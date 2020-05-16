import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import lipsumator, { Unit } from './mod.ts'

const { test } = Deno

test('Lipsumator should yield the quantity of text units requested.', () => {
  const textUnits = [
    ...lipsumator({
      length: 3,
      unit: Unit.Words,
      phrases: [],
      applyFormatting: false
    })
  ]

  assertEquals(textUnits.length, 3)
})

test('Formatted sentences should end with a full stop.', () => {
  const [sentence] = lipsumator({
    length: 1,
    unit: Unit.Sentences,
    phrases: [],
    applyFormatting: true
  })
  
  assertEquals(sentence[sentence.length - 1], '.')
})
