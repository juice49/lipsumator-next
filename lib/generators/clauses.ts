import { GeneratorOptions } from '../../types.ts'
import randomInteger from '../random_integer.ts'
import words from './words.ts'

export default function* clauses ({
  phrases,
  length = Infinity,
  applyFormatting
}: GeneratorOptions): Generator<string, void> {
  for (let i = 0; i < length; i ++) {
    const prepend = i !== 0
      ? ', '
      : ''

    const outputs = words({
      length: randomInteger(2, 10),
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
