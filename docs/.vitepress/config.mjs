import {defineConfig} from 'vitepress'

const createSidebar = (version) => {
  const withPrefix = (p) => `/${version}${p}`
  
  return [
    {
      text: 'Prologue',
      items: [
        { text: 'Release Notes', link: withPrefix('/release-notes') },
        { text: 'Upgrade Guide', link: withPrefix('/upgrade-guide') },
      ],
    },
    {
      text: 'Getting Started',
      items: [
        { text: 'Installation', link: withPrefix('/installation') },
        { text: 'Configuration', link: withPrefix('/configuration') },
        { text: 'Project Structure', link: withPrefix('/project-structure') },
        { text: 'Deployment', link: withPrefix('/deployment') },
      ],
    },
    {
      text: 'Core Concepts',
      items: [
        { text: 'API Routing', link: withPrefix('/api-routing') },
      ],
    },
    {
      text: 'The Basics',
      items: [
        { text: 'Request', link: withPrefix('/request') },
        { text: 'Response', link: withPrefix('/response') },
        { text: 'Events', link: withPrefix('/events') },
        { text: 'Subscribers', link: withPrefix('/subscribers') },
        { text: 'Tasks', link: withPrefix('/tasks') },
      ],
    },
  ]
}

// Set base to handle VitePress routing correctly
const base = '/'

export default defineConfig({
  title: 'Lumo Framework',
  description:
    'A minimal framework for building serverless applications in TypeScript',
  base,
  cleanUrls: true,
  themeConfig: {
    search: {
      provider: 'local',
    },
    logo: {
      light: '/tamo-mascot.png',
      dark: '/tamo-mascot-dark.png'
    },
    nav: [
      {
        text: 'Version',
        items: [
          {
            text: 'Master',
            link: '/master/release-notes',
            activeMatch: '^/master',
          },
          {
            text: '0.1.0-alpha',
            link: '/0.1.0-alpha/release-notes',
            activeMatch: '^/0.1.0-alpha',
          },
          {
            text: '1.0.0-alpha',
            link: '/1.0.0-alpha/release-notes',
            activeMatch: '^/1.0.0-alpha',
          },
        ],
      },
      { text: 'GitHub', link: 'https://github.com/lumo-framework/lumo' },
    ],
    sidebar: {
      '/master/': createSidebar('master'),
      '/0.1.0-alpha/': createSidebar('0.1.0-alpha'),
      '/1.0.0-alpha/': createSidebar('1.0.0-alpha'),
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lumo-framework/lumo' },
    ],
  },
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap',
        rel: 'stylesheet',
      },
    ],
  ],
})
