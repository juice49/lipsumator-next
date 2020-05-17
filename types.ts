export interface GeneratorOptions {
  length?: number,
  phrases: string[],
  applyFormatting: boolean
}

export enum Unit {
  Words = 'words',
  Sentences = 'sentences',
  Paragraphs = 'paragraphs'
}

export interface Options extends GeneratorOptions {
  unit: Unit
}
