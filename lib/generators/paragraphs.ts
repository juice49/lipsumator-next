import { GeneratorOptions } from '../../types.ts'
import randomInteger from '../random_integer.ts'
import sentences from './sentences.ts'

export default function* paragraphs ({
  phrases,
  length = Infinity,
  applyFormatting
}: GeneratorOptions): Generator<string, void> {
  for (let i = 0; i < length; i ++) {
    const outputs = sentences({
      length: randomInteger(3, 6),
      phrases,
      applyFormatting
    })

    if (!applyFormatting) {
      yield* outputs
      continue
    }

    yield [...outputs].join('') + '\n\n'
  }
}
