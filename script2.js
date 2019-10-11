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
          link: '/docs/Varwinplatform_generalinformation'
        },
        {
          title: 'Install Varwin',
          link: '/docs/Varwininstallationandlaunch'
        },
        {
          title: 'FAQ',
          link: '/docs/FAQ_Possibletechnicalissues'
        },
      ]
    },
    {
      title: 'Getting started *or* Working with Varwin platform',
      children: [
        {
          title: 'RMS',
          link: '/docs/VarwinRMSApp'
        },
        {
          title: 'Blockly',
          link: '/docs/WorkingwithBlockly'
        },
        {
          title: 'VR Client',
          link: '/docs/CreatingVRprojects_'
        },
        {
          title: 'Desktop',
          link: '/docs/CreatingVRprojects_'
        },
        {
          title: 'FAQ',
          link: '/docs/FAQ_Possibletechnicalissues'
        }
      ]
    },
    {
      title: 'Working with SDK',
      children: [
        {
          title: 'Overview',
          link: '/docs/VarwinSDK_ENG'
        },
        {
          title: 'Attributes',
          link: '/docs/Publicinterfaces'
        },
        {
          title: 'Interfaces',
          link: '/docs/Publicinterfaces'
        },
        {
          title: 'FAQ',
          link: '/docs/FAQ_Possibletechnicalissues'
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