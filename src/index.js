import NavBox from './nav-box'
import NavBoxPane from './nav-box-pane'
import './nav-box.less'

NavBox.install = function(Vue) {
  Vue.component(NavBox.name, NavBox)
}

NavBoxPane.install = function(Vue) {
  Vue.component(NavBoxPane.name, NavBoxPane)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(NavBox)
  window.Vue.use(NavBoxPane)
}

export { NavBox, NavBoxPane }
