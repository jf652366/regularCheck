import { regIsNumber } from '../../regular'

export function isNumber(number: number | string) {
  return regIsNumber.test(String(number))
}

isNumber(123)
