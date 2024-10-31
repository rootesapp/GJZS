import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'zh-CN',
    description: '玩机百宝箱官方网站',

    themeConfig: {
        nav: nav(),

        lastUpdatedText: "最后更新",
        darkModeSwitchLabel: '深色模式',
        returnToTopLabel: '回到顶部',
        outline: {
            label: '目录'
        },

    }
})

function nav() {
    return [
        { text: '下载', link: '/Download.html' },
        { text: '支持', link: '/Support.html' },
        { text: '历史版本', link: '/version.html' },
        { text: '开发者平台', link: '/Developer.html' },
    ]
}
