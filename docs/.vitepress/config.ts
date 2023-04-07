import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WireGuard VPN",
  description: "Wireguard desc",
  locales: {
    root: {
      label: '简体中文',
      lang: 'cn'
    },
    en: {
      label: 'English',
      lang: 'en'
    } 
  },
  head:[
    [
    'link',
    {rel: "icon",  href: "/favicon.ico"}
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/install-guide' }
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '安装指南', link: '/install-guide' },
          { text: 'wireguard 介绍', link: '/wireguard' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wireguard-vpn/wireguard-vpn.github.io' }
    ],

    logo: './img/logo.svg'
  }
})
