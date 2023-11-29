import _ from 'lodash'
export const currency = (money) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(money)
}

export const thousandFormat = (number) => {
  try {
    return number.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.')
  } catch (error) {
    console.log(error)
  }
}

export const formatNumber = (number) => {
  return _.toNumber(number).toLocaleString()
}
