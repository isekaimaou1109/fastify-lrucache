import wrapper from 'fastify-plugin'
import { LRUCache } from 'lru-cache'

function lruCachePlugin(fastify, options) {
  let defaultOtps = {
    ttl: 1000 * 60 * 5,
    allowStale: false
  }
  const cacher = new LRUCache(Object.freeze({
    ...defaultOtps,
    ...options
  }))
  fastify.decorate('cacher', cacher)
}

export default wrapper(lruCachePlugin, {
  name: '@isekaimaouyoki-sama/fastify-lrucache',
  fastify: '4.x'
});