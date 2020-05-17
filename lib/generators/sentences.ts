import { GeneratorOptions } from '../../types.ts'
import randomInteger from '../random_integer.ts'
import uppercaseFirst from '../uppercase_first.ts'
import clauses from './clauses.ts'

export default function* sentences ({
  phrases,
  length = Infinity,
  applyFormatting
}: GeneratorOptions): Generator<string, void> {
  for (let i = 0; i < length; i ++) {
    const outputs = clauses({
      length: randomInteger(1, 3),
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

    yield prepend + uppercaseFirst([...outputs].join('')) + '.'
  }
}
