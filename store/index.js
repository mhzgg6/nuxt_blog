export const state = () => ({
  theme: 'default',
  locales: ['zh', 'en'],
  locale: 'zh'
})

export const mutations = {
  setTheme (state, theme) {
    document.body.id = theme
    window.localStorage.setItem('THEME', theme)
    state.theme = theme
  },
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}