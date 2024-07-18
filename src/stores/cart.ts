import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

interface Product {
  id: number
  name: string
  description: string
  image: string,
  price: number
  quantity: number
  categories: {
    id: number
    name: string
  }
}

export const useCartStore = defineStore('cart', () => {
  const items = useLocalStorage<Product[]>('cart', [])

  const cartItemCount = computed(() => items.value.length)

  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => total + item.price * item.quantity, 0)
  })

  const lastItem = computed(() => items.value.slice(-1)[0])

  const addItem = (product: Omit<Product, 'quantity'>) => {
    const item = items.value.find((item) => item.id === product.id)
    if (item) {
      item.quantity += 1
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }

  const removeItem = (productId: number) => {
    items.value = items.value.filter((item) => item.id !== productId)
  }

  const clearCart = () => {
    items.value = []
  }

  const isInCart = (productId: number) => {
    return items.value.some(item => item.id === productId);
  };

  const incrementQuantity = (productId: number) => {
    const item = items.value.find((item) => item.id === productId)
    if (item) {
      item.quantity += 1
    }
  }

  const decrementQuantity = (productId: number) => {
    const item = items.value.find((item) => item.id === productId)
    if (item && item.quantity > 1) {
      item.quantity -= 1
    } else {
      removeItem(productId)
    }
  }

  

  return {
    items,
    cartItemCount,
    totalPrice,
    lastItem,
    addItem,
    removeItem,
    clearCart,
    isInCart,
    incrementQuantity,
    decrementQuantity
  }
})
