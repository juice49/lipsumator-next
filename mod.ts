import basePhrases from './phrases.ts'

export enum Unit {
  Words = 'words',
  Sentences = 'sentences',
  Paragraphs = 'paragraphs'
}

interface GeneratorOptions {
  length?: number,
  phrases: string[],
  applyFormatting: boolean
}

export interface Options extends GeneratorOptions {
  unit: Unit
}

const generators = {
  [Unit.Words]: words,
  [Unit.Sentences]: sentences,
  [Unit.Paragraphs]: paragraphs
}

export default function* lipsumator ({
  unit = Unit.Paragraphs,
  length = 1,
  phrases = [],
  applyFormatting = true
}: Options): Generator<string, void> {
  const allPhrases = [
    ...phrases,
    ...basePhrases
  ]

  const outputs = generators[unit]({
    phrases: allPhrases,
    length: length,
    applyFormatting
  })

  for (const output of outputs) {
    yield output
  }
}

function* words ({
  phrases,
  length = Infinity,
  applyFormatting
}: GeneratorOptions): Generator<string, void> {
  for (let i = 0; i < length; i ++) {
    // TOOD: Buffer output to skip repeats.
    const prepend = i !== 0
      ? ' '
      : ''

    const phrase = phrases[Math.floor(Math.random() * phrases.length)]

    if (!applyFormatting) {
      yield phrase
      continue
    }

    yield prepend + phrase
  }
}

function* clauses ({
  phrases,
  length = Infinity,
  applyFormatting
}: GeneratorOptions): Generator<string, void> {
  for (let i = 0; i < length; i ++) {
    const prepend = i !== 0
      ? ', '
      : ''

    const outputs = words({
      length: 5,
      phrases,
      applyFormatting
    })

    if (!applyFormatting) {
      yield* outputs
      continue
    }

    yield prepend + [...outputs].join('')
  }
}

function* sentences ({
  phrases,
  length = Infinity,
  applyFormatting
}: GeneratorOptions): Generator<string, void> {
  for (let i = 0; i < length; i ++) {
    const outputs = clauses({
      length: 3,
      phrases,
      applyFormatting
    })

    const prepend = i !== 0
      ? ' '
      : ''

    if (!applyFormatting) {
      yield* outputs
      continue
    }

    yield prepend + [...outputs].join('') + '.'
  }
}

function* paragraphs ({
  phrases,
  length = Infinity,
  applyFormatting
}: GeneratorOptions): Generator<string, void> {
  for (let i = 0; i < length; i ++) {
    const outputs = sentences({
      length: 5,
      phrases,
      applyFormatting
    })

    if (!applyFormatting) {
      yield* outputs
      continue
    }

    yield [...outputs].join(' ') + '\n\n'
  }
}
