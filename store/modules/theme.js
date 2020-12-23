/*
 * Date: 2020/12/23
 */
const theme = {
  state: {
    theme: 'default'
  },
  mututions: {
    setTheme (state, theme) {
      document.body.id = theme
      window.localStorage.setItem('THEME', theme)
      state.theme = theme
    }
  }
}

export default theme