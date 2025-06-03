import DefaultTheme from 'vitepress/theme'
import './style.css'
import Spacer from './components/Spacer.vue'
import Contributors from './components/Contributors.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Spacer', Spacer)
    app.component('Contributors', Contributors)
  },
}