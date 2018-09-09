export default {
  setText: ({ get, set }, text) => {
    set({ text })
  },
  returnToHomepage: ({ get }) => {
    const { browserHistory } = get()
    browserHistory.push({ pathname: '/' })
  }
}
