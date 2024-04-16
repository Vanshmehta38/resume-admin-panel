export const toFileName = string => {
  try {
    if (string) {
      if (typeof string === 'string') {
        const updatedString = string.replaceAll(' ', '-').toLowerCase()

        return updatedString
      }

      return string
    }

    return string
  } catch {
    return string
  }
}
