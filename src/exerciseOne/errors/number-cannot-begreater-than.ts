export class NumberCannotBeGreaterThanError extends Error {
  constructor (initialNumber: string, finalNumber: string) {
    super(`The number ${initialNumber} cannot be greater Than ${finalNumber}`)
    this.name = 'NumberCannotBeGreaterThanError'
  }
}
