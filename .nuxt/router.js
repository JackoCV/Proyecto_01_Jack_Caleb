import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _102c36b6 = () => interopDefault(import('..\\pages\\albums\\index.vue' /* webpackChunkName: "pages/albums/index" */))
const _2b6685c2 = () => interopDefault(import('..\\pages\\artists\\index.vue' /* webpackChunkName: "pages/artists/index" */))
const _73e8d194 = () => interopDefault(import('..\\pages\\label_records\\index.vue' /* webpackChunkName: "pages/label_records/index" */))
const _6c9614ee = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _1d82cc4d = () => interopDefault(import('..\\pages\\albums\\_id.vue' /* webpackChunkName: "pages/albums/_id" */))
const _4c550972 = () => interopDefault(import('..\\pages\\artists\\_id.vue' /* webpackChunkName: "pages/artists/_id" */))
const _3633ae08 = () => interopDefault(import('..\\pages\\label_records\\_id.vue' /* webpackChunkName: "pages/label_records/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/albums",
    component: _102c36b6,
    name: "albums"
  }, {
    path: "/artists",
    component: _2b6685c2,
    name: "artists"
  }, {
    path: "/label_records",
    component: _73e8d194,
    name: "label_records"
  }, {
    path: "/",
    component: _6c9614ee,
    name: "index"
  }, {
    path: "/albums/:id",
    component: _1d82cc4d,
    name: "albums-id"
  }, {
    path: "/artists/:id",
    component: _4c550972,
    name: "artists-id"
  }, {
    path: "/label_records/:id",
    component: _3633ae08,
    name: "label_records-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
