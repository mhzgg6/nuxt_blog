export const state = () => ({
  theme: 'default'
})

export const mutations = {
  setTheme (state, theme) {
    document.body.id = theme
    window.localStorage.setItem('THEME', theme)
    state.theme = theme
  }
}