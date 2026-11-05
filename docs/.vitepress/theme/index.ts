import DefaultTheme from 'vitepress/theme'
import StudioHome from './components/StudioHome.vue'
import CompetitorExplorer from './components/CompetitorExplorer.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('StudioHome', StudioHome)
    app.component('CompetitorExplorer', CompetitorExplorer)
  }
}
