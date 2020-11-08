MOTIF CLI interface action

Basically, a command **binds a method to match a MOTIF [entrypoint syntax](#entrypoint-syntax)**.

At the moment, CLI is only accessible as a single line command prompt;
but we'd like to present it as a interactive, staying alive, dialog.

### Entrypoint syntax

In the `./dev-start` file you can find the following call :

```javascript
KAMI.cli(
  process.argv.slice(3),
  {
    log: true
  })
```

**From the CLI side**, when you write a command, note that **the three first words are ignored**.
Use the following syntax to call a COMMAND.

```bash
node dev-start.js -- <args>
npm start -- <args>
```

**In the code side**, the signature for a COMMAND function is
quite similar to the top-level `KAMI.cli()` method :

```javascript
export default (args: [], options: {}) =>
```