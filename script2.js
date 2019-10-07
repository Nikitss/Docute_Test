new Docute({
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
      title: 'Introduction',
      children: [
        {
          title: 'Overview',
          link: '/docs/'
        },
        {
          title: 'Install Varwin',
          link: '/docs/'
        },
        {
          title: 'FAQ',
          link: '/guide/customization'
        },
      ]
    },
    {
      title: 'Getting started *or* Working with Varwin platform',
      children: [
        {
          title: 'RMS',
          link: '/guide/use-with-bundlers'
        },
        {
          title: 'Blockly',
          link: '/guide/offline-support'
        },
        {
          title: 'VR Client',
          link: '/guide/use-with-bundlers'
        },
        {
          title: 'Desktop',
          link: '/guide/use-with-bundlers'
        },
        {
          title: 'FAQ',
          link: '/guide/use-with-bundlers'
        }
      ]
    },
    {
      title: 'Working with SDK',
      children: [
        {
          title: 'Overview',
          link: '/options'
        },
        {
          title: 'Attributes',
          link: '/builtin-components'
        },
        {
          title: 'Interfaces',
          link: '/plugin-api'
        },
        {
          title: 'FAQ',
          link: '/builtin-components'
        }
      ]
    },
    {
      title: 'Video Tutorials',
      children: [
        {
          title: 'RMS',
          link: '/options'
        },
        {
          title: 'Creating content',
          link: '/builtin-components'
        },
      ]
    },
    {
      title: 'Credits',
      link: '/credits'
    }
  ],
  overrides: {
    '/': {
      language: 'English' // Used by the language dropdown menu in the sidebar
    },
    '/ru/': {
      language: 'РУССИАНО',
      // Override the default sidebar
      sidebar: [
        {
          children: [
            {
      title: 'ИВАН',
      children: [
        {
          title: 'ИГОРЬ',
          link: '/docs/'
        },
        {
          title: 'СЕРГЕЙ',
          link: '/docs/'
        },
      ]
    }
          ]
        }
      ]
    }
  }
})