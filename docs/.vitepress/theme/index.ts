// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import { MButton, MInput } from 'm-ui';
const components = [
  MButton,
  MInput,
];
const installCom = (app) => {
  components.forEach(com => {
    app.component(com.name, com)
  })
}
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    installCom(app);
  }
}
