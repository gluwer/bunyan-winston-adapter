bunyan-winston-adapter
======================

Allows to use winston logger in restify server without bunyan. Must be used with already installed winston.

At the moment is is very simple and its main purpose is to log some restify internal logs (that expect bunyan) using
winston logger. It only supports default winston log levels.

Level `trace` is mapped to `debug` and level `fatal` is mapped to `error`.

## How to use with restify

```
var bunyanToWinstonAdapter = require('bunyan-winston-adapter');

// pass to adapter a winston logger instance (may be whole module if default logger is used)
restify.createServer({
  log: bunyanToWinstonAdapter.createAdapter(winston),
});
```

It is also possible to provide your own mapping from bunyan to winston. This will override default mapping. You can provide only the types you want to override:

```
var mapping = {
  trace: 'silly'
};

restify.createServer({
  log: bunyanToWinstonAdapter.createAdapter(winston, mapping),
});
```

## Why not add a logger to bunyan that pushes to winston?

I do not want to have some things passed from one logger to another which will be slower and amount of code in both
cases is similar.

## License

MIT
