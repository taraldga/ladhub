import React from 'react';
import {useQuery} from "react-query";



const Fjelltop = () => {

  const {isLoading, error, data} = useQuery('fjelltopData', async () => {
    const res = await fetch('http://localhost:8000/api/fjelltop/ascents', {
      headers: {
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUzNTU3Mzg1LCJpYXQiOjE2NTM1NTcwODUsImp0aSI6IjMxNTg5MDNlNzE4MDQyZWViYjkzYjM5NWQxZmI2MzJhIiwidXNlcl9pZCI6MX0.8aJXO6KNDKWHMQtzVj-NelVOgBxDQZBLnta8yJ7sOiE"
      }
    });
    return await res.json();
  });

  return (
    <div>
      <h1 className="text-3xl">Fjelltop</h1>
      {data && data.map((item: any) => item.top.name)}
    </div>
  );
}


export default Fjelltop;