# Lipsumator next

<video controls>
  <source src='https://files-1go6hehqr.now.sh' type='video/mp4'>
</video>

In 2015 I made [Lipsumator](http://github.com/juice49/lipsumator), a
customisable placeholder text generator. The project used new (at the time)
JavaScript features like generators, so it relies on some tooling that has
become pretty out of date.

I still use the `lipsumator` CLI command occasionally, and I've been intending
to modernise the project for a while. Quickly generating  placeholder text from
your terminal and piping it to the clipboard is really useful.

Deno 1.0 has just been released, and Lipsumator seems like a great way to kick
the tires. Deno includes script distribution, bundling, testing, and command
line argument parsing tools. Everything I need for the next version of
Lipsumator. I want to try it all out and see how it works.

## Install

```
deno install -n lipsumator https://denopkg.com/juice49/lipsumator-next/cli.ts
```

## Run

### Generate three paragraphs

```
lipsumator --unit paragraphs --length 3
```

### Generate three paragraphs with custom phrases

```
lipsumator --unit paragraphs --length 3 --phrase 'Maranta Leuconeura' --phrase 'Monstera Deliciosa' --phrase 'Urtica Dioica'
```

### Generate ten sentences

```
lipsumator --unit paragraphs --length 10
```

### Generate fifty words

```
lipsumator --unit words --length 50
```

## Command line arguments

| Argument | Alias | Default | Description |
| --- | --- | --- | --- |
| `unit` | `u` | `paragraphs` | Units of text to generate (`words`, `sentences`, or `paragraphs`). |
| `length` | `l` | `1` | Quantity of text units to generate (`Infinity` for fun). |
| `phrase` | `p` | | Append a phrase to the phrase list. |
| `unformatted` | | `false` | Emit each unit of text without formatting or punctuation.  |

## Future

Lipsumator itself can probably be an independent library that can run in any JS
environment (like the browser and serverless functions). For now, I am combining
the Deno CLI and the Lipsumator library. Let's split those apart in the future.

## Todo

- Figure out [Deno dependency lock files](https://deno.land/manual/linking_to_external_code/integrity_checking).
- Add [Deno fmt](https://deno.land/manual/tools/formatter).
- Add [tests](https://deno.land/manual/testing).
- Look for a project phrase list in the `cwd`. Do we need to do anything with
[Deno permissions](https://deno.land/manual/examples/permissions) to make this
work?
