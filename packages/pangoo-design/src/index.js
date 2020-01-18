/* Automatically generated by './build/bin/build-entry.js' */

import Hello from '../components/hello/index.js'

const components = [Hello]

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$PANGOO_DESIGN = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000,
  }
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Hello,
}
