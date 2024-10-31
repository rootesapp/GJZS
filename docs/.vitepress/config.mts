import { defineConfig } from 'vitepress'
import locales from './locales'

export default defineConfig({
    ignoreDeadLinks: true,
    title: {
        '/': '玩机百宝箱', // 中文
        '/en/': 'Device Toolbox' // 英文
    },
    locales: {
        '/': locales.locales, // 中文
        '/en/': {
            lang: 'en-US',
            title: 'Device Toolbox',
            description: 'A versatile toolbox for device management.'
        }
    },
    srcExclude: ['README.md'],
    head: [
        ['meta', { name: 'theme-color', content: '#ea668d' }],
        ['link', { rel: 'stylesheet', href: 'https://font.sec.miui.com/font/css?family=MiSans:200,300,400,450,500,600,650,700:Chinese_Simplify,Latin&display=swap' }],
        ['link', { rel: 'stylesheet', href: 'https://font.sec.miui.com/font/css?family=MiSans:200,300,400,450,500,600,650,700:Chinese_Traditional,Latin&display=swap' }]
    ],
    themeConfig: {
        footer: {
            copyright: {
                '/': 'Copyright © 2021-2024', // 中文
                '/en/': 'Copyright © 2021-2024' // 英文
            }
        }
    }
})
