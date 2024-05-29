import { createI18n } from 'vue-i18n'
import { en, zhCN } from './locales'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, 'zh-CN': zhCN },
})

export default i18n
export const useI18n = () => ({ t: i18n.global.t })
