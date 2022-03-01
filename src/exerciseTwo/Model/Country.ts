export class Country {
  constructor (private readonly country: string, private readonly languages: string[]) {}

  getLanguages (): string[] {
    return this.languages
  }
}
