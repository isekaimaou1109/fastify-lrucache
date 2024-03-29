import wrapper from 'fastify-plugin'
import { LRUCache } from 'lru-cache'

function lruCachePlugin(fastify, options, done) {
  let defaultOtps = {
    ttl: 1000 * 60 * 5,
    allowStale: false,
    max: 500,
    maxSize: 5000, 
    ttlAutopurge: true,
    sizeCalculation: (value, key) => {
      return 1
    },
    updateAgeOnGet: true,
    updateAgeOnHas: true,
  }
  const cacher = new LRUCache(Object.freeze({
    ...defaultOtps,
    ...options
  }))
  fastify.decorate('cacher', cacher)
  done()
}

export default wrapper(lruCachePlugin, {
  name: '@isekaimaouyoki-sama/fastify-lrucache',
  fastify: '4.x'
});