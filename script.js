new Docute({
  overrides: {
    '/': {
      language: 'English' // Used by the language dropdown menu in the sidebar
    },
    '/zh/': {
      language: 'РУССКИЙ',
      // Override the default sidebar
      
    }
  },
  versions: {
    '0.5.1 (Latest)': {
      link: '/'
    },
    '0.5.0': {
      link: '/0.1/'
    }
  },
  sidebar: [
    {
      title: 'Guide',
      children: [
        {
          title: 'Introduction',
          link: '/docs/'
        },
        {
          title: 'Customization',
          link: '/guide/customization'
        },
        {
          title: 'Markdown Features',
          link: '/guide/markdown-features'
        },
        {
          title: 'Use Vue in Markdown',
          link: '/guide/use-vue-in-markdown'
        },
        {
          title: 'Internationalization',
          link: '/guide/internationalization'
        },
        {
          title: 'Plugin',
          link: '/guide/plugin'
        },
        {
          title: 'Deployment',
          link: '/guide/deployment'
        }
      ]
    },
    {
      title: 'Advanced',
      children: [
        {
          title: 'Use With Bundlers',
          link: '/guide/use-with-bundlers'
        },
        {
          title: 'Offline Support',
          link: '/guide/offline-support'
        }
      ]
    },
    {
      title: 'References',
      children: [
        {
          title: 'Options',
          link: '/options'
        },
        {
          title: 'Built-in Components',
          link: '/builtin-components'
        },
        {
          title: 'Plugin API',
          link: '/plugin-api'
        }
      ]
    },
    {
      title: 'Credits',
      link: '/credits'
    }
  ]
})