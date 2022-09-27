import { defineConfig } from 'vitepress'
import Container from 'markdown-it-container'

export default defineConfig({
  themeConfig: {
    nav: [{ text: 'component', link: '/components/button', activeMatch: '/components/' }],
    sidebar: {
      '/components/': [
        {
          text: 'components',
          items: [
            {
              text: 'Button',
              link: '/components/button'
            }
          ]
        }
      ]
    }
  },
  markdown: {
    config: (md) => {}
  }
})
