import { Options, Unit } from './types.ts'
import words from './lib/generators/words.ts'
import sentences from './lib/generators/sentences.ts'
import paragraphs from './lib/generators/paragraphs.ts'
import basePhrases from './phrases.ts'

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
