import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _58ea6720 = () => interopDefault(import('..\\pages\\albums\\index.vue' /* webpackChunkName: "pages/albums/index" */))
const _ad46ebf8 = () => interopDefault(import('..\\pages\\artists\\index.vue' /* webpackChunkName: "pages/artists/index" */))
const _34e29eb9 = () => interopDefault(import('..\\pages\\label_records\\index.vue' /* webpackChunkName: "pages/label_records/index" */))
const _42512304 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _d7b09cf0 = () => interopDefault(import('..\\pages\\albums\\_id.vue' /* webpackChunkName: "pages/albums/_id" */))
const _37cd3d6c = () => interopDefault(import('..\\pages\\artists\\_id.vue' /* webpackChunkName: "pages/artists/_id" */))
const _686a093e = () => interopDefault(import('..\\pages\\label_records\\_id.vue' /* webpackChunkName: "pages/label_records/_id" */))

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
    component: _58ea6720,
    name: "albums"
  }, {
    path: "/artists",
    component: _ad46ebf8,
    name: "artists"
  }, {
    path: "/label_records",
    component: _34e29eb9,
    name: "label_records"
  }, {
    path: "/",
    component: _42512304,
    name: "index"
  }, {
    path: "/albums/:id",
    component: _d7b09cf0,
    name: "albums-id"
  }, {
    path: "/artists/:id",
    component: _37cd3d6c,
    name: "artists-id"
  }, {
    path: "/label_records/:id",
    component: _686a093e,
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
