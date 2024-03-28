# @isekaimaouyoki-sama/fastify-lrucache

This is a small wrapper around [lru-cache](https://www.npmjs.com/package/lru-cache).

## Install
```
npm install --save @isekaimaouyoki-sama/fastify-lrucache
```

## Usage

Easy to use require/import this plugin as below

```js
const path = require('path')
const fastify = require('fastify')()

fastify.register(
  require('@isekaimaouyoki-sama/fastify-lrucache'),
  { 
    ttl: 1000 * 60 * 5, // 5 minutes
    allowStale: false,  // disable stale data
    ////////////////////// other options. You can see others in lru-cache options
  }
)

fastify.get("/", async function(request, reply) {
  fastify.cacher.set("a", 1)

  if (fastify.cacher.get('a') && +fastify.cacher.get('a') === 1) {
    reply.send("Valid data") 
  } else {
    reply.send("Invalid data") 
  } 
})

fastify.listen({ port: 3000 }, err => {
  if (err) throw err
})
```