export const pattern = {
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  passwordPattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,20}$/,
  alphaAllowed: /^[A-Z a-z]+$/i,
  alphaWithUnderscoreAllowed: /^[A-Z _ a-z]+$/i,
  numbersAllowed: /^[0-9]+$/i,
  panCardAllowed: /^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/,

  urlPattern:
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
  alphaNumericAllowed: /^[A-Z a-z 0-9]+$/i,
  imageMime: /(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)+$/i,
  partnerEmail: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  internationalNumber: /^\+\d{2}-\d{3}-\d{3}-\d{4}$/i
}
