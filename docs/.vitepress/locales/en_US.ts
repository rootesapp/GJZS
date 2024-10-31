import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    description: 'Official website of Play Machine Toolbox',

    themeConfig: {
        nav: nav(),

        lastUpdatedText: "Last Updated",
        darkModeSwitchLabel: 'Dark Mode',
        returnToTopLabel: 'Back to Top',
        outline: {
            label: 'Table of Contents'
        },

    }
})

function nav() {
    return [
        { text: 'Download', link: '/en/Download.html' },
        { text: 'Support', link: '/en/Support.html' },
        { text: 'Historical Versions', link: '/version.html' },
    ]
}
