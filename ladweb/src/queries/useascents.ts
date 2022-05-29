import { useQuery } from "react-query";
import axios from "axios";
import useStore from "../hooks/useStore";
import { useNavigate } from "react-router-dom";

const getAscents = async (token: string) =>  { 
  console.log("Is getting ascents")
  const res = await axios('http://localhost:8000/api/fjelltop/ascents', {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });
  return res.data;
}

export default function useAscents() {
  const { tokens, setTokens } = useStore();
  const navigate = useNavigate();
  return useQuery('ascents', async () => getAscents(tokens.access), {
    onError: async (err: any) => {
      if(err.response.status === 401) {
        if(tokens?.refresh && tokens.refresh.length > 0) {
          const res = await axios('http://localhost:8000/api/token/refresh/', {
            method: "POST",
            data: {
              "refresh":tokens.refresh
            }
          });
          setTokens(res.data);
          getAscents(res.data.access)
          
        } else {
          navigate('/login')
        }
      }
    } ,
    retry: (count: number, error: any) => {console.log(error);return count < 3 && !(error.response.status === 401)}
  })
}
