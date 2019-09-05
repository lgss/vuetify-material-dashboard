import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#189E99',
        secondary: '#213E5F',
        tertiary: '#78C486',
        accent: '#F9D444',
        error: '#f55a4e',
        info: '#00d3ee',
        success: '#5cb860',
        warning: '#F9D444'
      }
    }
  },
  icons: {
    iconfont: 'mdi'
  }
})
