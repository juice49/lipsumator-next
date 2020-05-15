# Lipsumator next

In 2015 I made [Lipsumator](http://github.com/juice49/lipsumator), a
customisable placeholder text generator. The project used new (at the time)
JavaScript features like generators, so it relis on some tooling that has become
pretty out of date.

I still use the `lipsumator` CLI command occasionally, and I've been intending
to modernise the project for a while. Quickly generating  placeholder text from
your terminal and piping it to the clipboard is really useful.

Deno 1.0 has just been released, and Lipsumator seems like a great way to kick
the tires. Deno includes script distribution, bundling, testing, and command
line argument parsing tools. Everything I need for the next version of
Lipsumator. I want to try it all out and see how it works.

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
- Add [install instructions](https://deno.land/manual/tools/script_installer).