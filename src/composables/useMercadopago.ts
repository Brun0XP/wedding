import {  onMounted } from "vue";

let mercadopago: any;

export default function useFormatter() {
  
  onMounted(() => {
    // @ts-ignore
    mercadopago = new MercadoPago(process.env.VITE_MERCADOPAGO_TOKEN)
  })

  const openCheckout = (preferenceId: string) => {
    mercadopago.checkout({
      preference: {
        id: preferenceId
      },
      autoOpen: true
    })
  }

  return {
    mercadopago,
    openCheckout
  };
}
