export default {
  increment: ({ get, set }) => {
    const { counter } = get()
    set({ counter: counter + 1 })
  },
  decrement: ({ get, set }) => {
    const { counter } = get()
    set({ counter: counter - 1 })
  },
  setText: ({ get, set }, text) => {
    set({ text })
  },
  returnToHomepage: ({ get }) => {
    const { browserHistory } = get()
    browserHistory.push({ pathname: '/' })
  }
}
