import create from 'zustand'


export interface Tokens {
  access: string;
  refresh: string;
}

interface State {
  tokens: Tokens;
  setTokens: (tokens: Tokens) => void;
}

const useStore = create<State>(set => ({
    tokens: {access: "", refresh: ""},
    setTokens: (tokens) => set({tokens})
}))

export default useStore;