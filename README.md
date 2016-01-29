gun-repl
========
An interactive prompt for gunDB.

> **Note:** this project is not yet finished and is a bit rough around the edges.

## Try it out
In your terminal, run:
```bash
git clone https://github.com/PsychoLlama/gun-repl.git
npm install
npm run build
```

Now go to `localhost:8080` and you'll be greeted with the prompt. To get a feel for how it works, type this in the prompt:
```javascript
gun.put({ hello: 'world!' })
// should log out the result.
// try putting another object!
```

## Goals for this project
Right now, it's only half-finished. The boilerplate has been laid down, but there are no instructions on the site, and it would be nice to have autocompletion, or a list of example commands you could run by clicking.

I'd also like to host this on github pages and have it built intuitive enough that we could use it as a gentle introduction to gunDB.