import create from "zustand";

export interface Tokens {
  access: string;
  refresh: string;
}

interface State {
  tokens: Tokens;
  setTokens: (tokens: Tokens) => void;
}

const getLocalStorage = (key: string) =>
  JSON.parse(window.localStorage.getItem(key) as string);
const setLocalStorage = (key: string, value: any) =>
  window.localStorage.setItem(key, JSON.stringify(value));

const useStore = create<State>((set) => ({
  tokens: getLocalStorage("tokens") || { access: "", refresh: "" },
  setTokens: (tokens) =>
    set(() => {
      setLocalStorage("tokens", tokens);
      return { tokens };
    }),
}));


export default useStore;
