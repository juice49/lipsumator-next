import { GeneratorOptions } from '../../types.ts'

export default function* words ({
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
