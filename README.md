# Finity (Deno)

A finite state machine library with a friendly configuration DSL.

## Features

See [Finity (Node) Features](https://github.com/nickuraltsev/finity#features)

## Example

```javascript
import Finity from 'https://deno.land/x/finity@1.0.3/mod.js'
const worker = Finity
    .configure()
    .initialState("ready")
    .on("task_submitted").transitionTo("running")
    .state("running")
    .do((state, context) => processTaskAsync(context.eventPayload))
    .onSuccess().transitionTo("succeeded")
    .onFailure().transitionTo("failed")
    .onTimeout(1000)
    .transitionTo("timed_out")
    .global()
    .onStateEnter(state => console.log(`Entering state '${state}'`))
    .start()

worker.handle("task_submitted", task)
```

[More examples](https://github.com/nickuraltsev/finity/tree/master/examples)

## Usage

See [Finity (Node) Usage](https://github.com/nickuraltsev/finity#usage)

## TypeScript Support

Finity (Deno) is not written in TypeScript.
Finity (Node) includes [TypeScript typings](https://github.com/nickuraltsev/finity/blob/master/index.d.ts) which can be used to convert Finity (Deno) to TypeScript (PRs welcome)

## License

- Finity (Deno) is licensed under the [MIT license](https://github.com/nickuraltsev/finity/blob/master/LICENSE)
- Almost all code is reused from [Finity (Node)](https://github.com/nickuraltsev/finity), also under the MIT licnese
