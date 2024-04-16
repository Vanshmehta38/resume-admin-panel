export const discountCheck = value => {
  if (value[0] === '1') {
    if (value[2] === '0' && value[1] === '0') {
      value = value.slice(0, 3)
    } else {
      value = value.slice(0, 2)
    }
  } else {
    value = value.slice(0, 2)
  }

  return value
}
