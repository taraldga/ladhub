import axios from "axios";
import { Tokens } from "../hooks/useStore";

type ErrorHandleProps = {
  err: any;
  tokens: Tokens;
  setTokens: (tokens: Tokens) => void;
  onSuccess: (token: string) => void
  onFailure: () => void
}

const checkLogin = async (errorProps: ErrorHandleProps) => {
  const { err, tokens, setTokens, onSuccess, onFailure } = errorProps;
  if (err.response.status === 401) {
    if (tokens?.refresh && tokens.refresh.length > 0) {
      const res = await axios("http://localhost:8000/api/token/refresh/", {
        method: "POST",
        data: {
          refresh: tokens.refresh,
        },
      });
      setTokens(res.data);
      onSuccess(res.data.access);
    } else {
      onFailure();
    }
  }
};

export { checkLogin };
