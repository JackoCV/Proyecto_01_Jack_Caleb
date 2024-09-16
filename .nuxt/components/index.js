export { default as AlbumCard } from '../..\\components\\global\\AlbumCard.vue'
export { default as ArtistCard } from '../..\\components\\global\\ArtistCard.vue'
export { default as FooterView } from '../..\\components\\global\\FooterView.vue'
export { default as HeaderView } from '../..\\components\\global\\HeaderView.vue'
export { default as LabelCard } from '../..\\components\\global\\LabelCard.vue'
export { default as SongCard } from '../..\\components\\global\\SongCard.vue'
export { default as Tabs } from '../..\\components\\global\\Tabs.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
