import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'White Tee / Brand Studio',
  description: 'Same white T-shirt. Different meaning. Competitive research, brand hypotheses, and a clear first experiment for IS117.',
  lang: 'en-US',
  base: '/plain-white-tee-studio/',
  cleanUrls: false,
  lastUpdated: true,
  sitemap: { hostname: 'https://kaw393939.github.io/plain-white-tee-studio/' },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/plain-white-tee-studio/mark.svg' }],
    ['meta', { name: 'theme-color', content: '#f6f5f0' }]
  ],
  themeConfig: {
    siteTitle: 'WHITE TEE / STUDIO',
    logo: '/mark.svg',
    nav: [
      { text: 'Overview', link: '/' },
      { text: 'Landscape', link: '/research/landscape' },
      { text: 'Ideas', link: '/strategy/ideas' },
      { text: 'Our next move', link: '/strategy/recommendation' }
    ],
    sidebar: [
      { text: '01 / Understand', items: [
        { text: 'The project brief', link: '/project/brief' },
        { text: 'Competitive landscape', link: '/research/landscape' },
        { text: 'Evidence & sources', link: '/research/sources' }
      ] },
      { text: '02 / Explore', items: [
        { text: 'Three brand territories', link: '/strategy/ideas' },
        { text: 'Recommended first move', link: '/strategy/recommendation' }
      ] },
      { text: '03 / Make & review', items: [
        { text: 'Decision board', link: '/project/decisions' },
        { text: 'Build & review roadmap', link: '/project/roadmap' }
      ] }
    ],
    search: { provider: 'local' },
    outline: { level: [2, 3] },
    socialLinks: [{ icon: 'github', link: 'https://github.com/kaw393939/plain-white-tee-studio' }],
    editLink: { pattern: 'https://github.com/kaw393939/plain-white-tee-studio/edit/main/docs/:path', text: 'Edit this research' },
    footer: {
      message: 'IS117 / A research studio. Brand directions are proposals; product claims need evidence.',
      copyright: 'Research reviewed November 5, 2026.'
    }
  }
})
