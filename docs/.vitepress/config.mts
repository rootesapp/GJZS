import { defineConfig } from 'vitepress'
import locales from './locales'

export default defineConfig({
    ignoreDeadLinks: true,
    locales: {
        '/': {
            title: '玩机百宝箱',
            description: '一个多功能的设备管理工具。'
        },
        '/en/': {
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
                '/': 'Copyright © 2021-2024',
                '/en/': 'Copyright © 2021-2024'
            }
        }
    }
})
