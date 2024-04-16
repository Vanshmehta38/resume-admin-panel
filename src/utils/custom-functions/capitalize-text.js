export const capitalizeText = string => {
  if (!string) return string
  const trimmed = string?.trim()

  return trimmed?.charAt(0)?.toUpperCase() + trimmed?.slice(1)
}

export const uppercaseText = string => {
  return string?.replace(/[a-z]/g, char => char?.toUpperCase())
}

export const CapitalizeWords = string => {
  if (string && string?.length > 0) {
    const mySentence = string?.toLowerCase() || string
    const words = mySentence.split(' ')

    const result = words
      .map(word => {
        if (word.length > 0) {
          return word[0].toUpperCase() + word.substring(1)
        } else return word
      })
      .join(' ')

    return result
  } else return string
}
