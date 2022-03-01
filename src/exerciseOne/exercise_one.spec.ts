import { MissingParamError } from './errors/missing-param-error'
import { NumberCannotBeGreaterThanError } from './errors/number-cannot-begreater-than'
import { ExerciseOne } from './exercise_one'

interface SutTypes {
  sut: ExerciseOne
}

const makeSut = (): SutTypes => {
  const sut = new ExerciseOne()
  return {
    sut
  }
}

describe('Exercise One', () => {
  test('Should return Error if no initial number provided ', () => {
    const { sut } = makeSut()
    const response = sut.handle(0, 1)
    expect(response).toEqual(new MissingParamError('initialNumber'))
  })

  test('Should return Error if no final number provided ', () => {
    const { sut } = makeSut()
    const response = sut.handle(1, 0)
    expect(response).toEqual(new MissingParamError('finalNumber'))
  })

  test('Should return Error if the initial number is greater than final number ', () => {
    const { sut } = makeSut()
    const response = sut.handle(7, 2)
    expect(response).toEqual(new NumberCannotBeGreaterThanError((7).toString(), (2).toString()))
  })

  test('Should return Success if return ["1","2","Visual","4","Nuts"] ', () => {
    const { sut } = makeSut()
    const response = sut.handle(1, 5)
    expect(response).toEqual(['1', '2', 'Visual', '4', 'Nuts'])
  })

  test('Should return Success if return ["1","2","Visual","4","Nuts","Visual","7","8","Visual","Nuts","11","Visual","13","14","Visual Nuts"] ', () => {
    const { sut } = makeSut()
    const response = sut.handle(1, 15)
    expect(response).toEqual(['1', '2', 'Visual', '4', 'Nuts', 'Visual', '7', '8', 'Visual', 'Nuts', '11', 'Visual', '13', '14', 'Visual Nuts'])
  })
})
