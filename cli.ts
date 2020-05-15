import { parse } from 'https://deno.land/std/flags/mod.ts'
import lipsumator, { Options, Unit } from './lib/lipsumator.ts'

const { args, stdout } = Deno

type Args = {
  unit?: Unit,
  length?: string,
  phrase?: string | string[]
}

async function main () {
  const parsedArgs = parse(args, {
    string: [
      'unit',
      'length',
      'phrase'
    ],
    alias: {
      u: 'unit',
      l: 'length',
      p: 'phrase'
    }
  }) as Args

  const options = createOptions(parsedArgs)
  const encoder = new TextEncoder()

  for (const string of lipsumator(options)) {
    await stdout.write(encoder.encode(string))
  }
}

function createOptions (args: Args): Options {
  return {
    unit: args.unit as Unit,
    phrases: ([] as string[]).concat(args.phrase ?? []),
    length: typeof args.length !== 'undefined'
      ? Number(args.length)
      : undefined,
  }
}

if (import.meta.main) {
  main()
}
