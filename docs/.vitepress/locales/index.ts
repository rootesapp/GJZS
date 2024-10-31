import { defineConfig } from 'vitepress'
import zh_CN from './zh_CN'
import en_US from './en_US' // Assuming you have an en_US module

export default defineConfig({
    locales: {
        root: {
            label: '简体中文',
            lang: zh_CN.lang,
            themeConfig: zh_CN.themeConfig,
            description: zh_CN.description
        },
        // Corrected the missing comma here
        en: {
            label: 'English',
            lang: en_US.lang,
            themeConfig: en_US.themeConfig,
            description: en_US.description
        }
    }
})
