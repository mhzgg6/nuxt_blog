import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

export default ({app, store}) => {
  //  创建18n实例
  //  This way we can use it in middleware and pages asyncData/detch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'zh',
    messages: {
      // 'en': require('~/local')
    }
  })
  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }
    return `/${app.i18n.locale}/${link}`
  }
}