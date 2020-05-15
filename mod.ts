import basePhrases from './phrases.ts'

export enum Unit {
  Words = 'words',
  Sentences = 'sentences',
  Paragraphs = 'paragraphs'
}

export interface Options {
  unit: Unit,
  length?: number,
  phrases: string[]
}

const generators = {
  [Unit.Words]: words,
  [Unit.Sentences]: sentences,
  [Unit.Paragraphs]: paragraphs
}

export default function* lipsumator ({
  unit,
  length,
  phrases
}: Options): Generator<string, void> {
  const allPhrases = [
    ...phrases,
    ...basePhrases
  ]

  for (const output of generators[unit](allPhrases, length)) {
    yield output
  }
}

function* words (
  phrases: string[],
  length: number = Infinity
): Generator<string, void> {
  for (let i = 0; i < length; i ++) {
    // TOOD: Buffer output to skip repeats.
    const prepend = i !== 0
      ? ' '
      : ''

    yield prepend + phrases[Math.floor(Math.random() * phrases.length)]
  }
}

function* clauses (
  phrases: string[],
  length: number = Infinity
): Generator<string, void> {
  for (let i = 0; i < length; i ++) {
    const prepend = i !== 0
      ? ', '
      : ''

      yield prepend + [...words(phrases, 5)].join('')
  }
}

function* sentences (
  phrases: string[],
  length: number = Infinity
): Generator<string, void> {
  for (let i = 0; i < length; i ++) {
    yield [...clauses(phrases, 3)].join('') + '.'
  }
}

function* paragraphs (
  phrases: string[],
  length: number = Infinity
): Generator<string, void> {
  for (let i = 0; i < length; i ++) {
    yield [...sentences(phrases, 5)].join(' ') + '\n\n'
  }
}
