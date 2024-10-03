export default function useFormatter() {
  const formatCurrency = (value: number, locale = 'pt-BR', currency = 'BRL') => {
    if (value == null) {
      return ''
    }

    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(value)
  }

  return {
    formatCurrency
  }
}
