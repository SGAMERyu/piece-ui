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
    config: (md) => {
      md.use(Container, 'card', {
        render(tokens, idx) {
          const m = tokens[idx].info.trim().match(/^card\s+(.*)$/)

          if (tokens[idx].nesting === 1) {
            return `<DemoBlock>`
          } else {
            return `</DemoBlock>`
          }
        }
      })
      md.use(Container, 'code', {
        render(tokens, idx) {
          const m = tokens[idx].info.trim().match(/^code\s+(.*)$/)

          if (tokens[idx].nesting === 1) {
            return `<DemoCode>`
          } else {
            return `</DemoCode>`
          }
        }
      })
    }
  }
})
