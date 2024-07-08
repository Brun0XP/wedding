import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface Product {
  id: number
  name: string
  price: number
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<Product[]>([])

  const cartItemCount = computed(() => items.value.length)

  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => total + item.price * item.quantity, 0)
  })

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
    addItem,
    removeItem,
    clearCart,
    incrementQuantity,
    decrementQuantity
  }
})
