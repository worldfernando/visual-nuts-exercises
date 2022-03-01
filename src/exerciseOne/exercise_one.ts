import { MissingParamError } from './errors/missing-param-error'
import { NumberCannotBeGreaterThanError } from './errors/number-cannot-begreater-than'

function isDivisibleBy (numberTest: number, divisibleByNumber: number): boolean {
  return numberTest % divisibleByNumber === 0
}

export class ExerciseOne {
  handle (initialNumber: number, finalNumber: number): String[] | Error {
    if (initialNumber <= 0) return new MissingParamError('initialNumber')
    if (finalNumber <= 0) return new MissingParamError('finalNumber')
    if (initialNumber > finalNumber) return new NumberCannotBeGreaterThanError(initialNumber.toString(), finalNumber.toString())
    const result: String[] = []
    for (let i = initialNumber; i <= finalNumber; i++) {
      if (isDivisibleBy(i, 3) && (isDivisibleBy(i, 5))) result.push('Visual Nuts')
      else if (isDivisibleBy(i, 3)) result.push('Visual')
      else if (isDivisibleBy(i, 5)) result.push('Nuts')
      else result.push(i.toString())
    }
    return result
  }
}
