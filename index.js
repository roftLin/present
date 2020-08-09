import dp from '@roft/dp'

export default function present(obj) {
  return dp(result => Object.entries(obj).forEach(([key, value]) => {
    if (!!value) {
      if (typeof value == 'object') {
        result[key] = present(value)
      } else {
        result[key] = value
      }
    }
  }))({});
}
