`sudo npm install -g ipso-cli`

ipso-cli
========

ipso cli

* It is currently tailored fairly tightly to my size and shape of process. 

**However**, there are options:


`ipso --help`

```

  Usage: ipso [options]

  Options:

    -h, --help            output usage information
    -V, --version         output the version number
    -w, --no-watch        Dont watch spec and src dirs.
    -n, --no-env          Dont load .env.test
    -m, --mocha           Use mocha.
    -e, --alt-env [name]  Loads .env.name
        --spec    [dir]   Specify alternate spec dir.
        --src     [dir]   Specify alternate src dir.
        --lib     [dir]   Specify alternate compile target.

```

### Highlight

It can quickly start up a node-inspector session on a v8 debugger socket. It may at some point seamlessly attach to the running tests, with `Module.does(...)` specifying breakpoints. (that would be very! very! nice...)

```
$ ipso --mocha -e name
ipso: warning: .env.name is PRODUCTION
ipso: loaded .env.name
ipso: watching directory: ./spec
ipso: watching directory: ./src
>
>
> inspect 3001 5860 lib/examples/basic.js
> 
> debugger listening on port 5860    <----------------------------
> Node Inspector v0.5.0
> info: socket.io started
> Visit http://127.0.0.1:3001/debug?port=5860 to start debugging.
>       =====================================
```

### Specific!ness

It watches for ./src and ./spec changes and runs the changed.

`ipso --mocha --src [dir] --spec [dir] --lib [dir]`

* ./src changes will be compiled into ./lib/...
* the corresponding test will then be run from ./spec/...
* the followingly illustrated "path echo" **is assumed to ALWAYS be the case**

```
 src/same/dirname/source_name.coffee
spec/same/dirname/source_name_spec.coffee
```
