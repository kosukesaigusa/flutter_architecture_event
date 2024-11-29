import Shiki from '@shikijs/markdown-it'

const shiki = await Shiki({
  themes: {
    light: 'one-dark-pro',
    dark: 'one-dark-pro',
  },
})

export default ({ marp }) => marp.use(shiki)
