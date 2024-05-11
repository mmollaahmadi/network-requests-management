import React from "react";
import "./App.css";
import useAxios from "./hooks/useAxios";

interface MyDataType {
  code: number;
  description: string;
}

function App() {
  const correctRequest = useAxios<MyDataType>(
    "https://httpstat.us/200?sleep=3000"
  );

  const wrongRequest = useAxios<MyDataType>(
    "https://httpstat.us/500?sleep=2000"
  );

  return (
    <div className="App bg-gray-200 h-[100vh] py-32 px-64">
      <h1 className="font-bold text-[1.5rem] my-6">
        Network Requests Management
      </h1>
      <div className="my-6">
        {correctRequest?.loading ? (
          <div>Loading...</div>
        ) : correctRequest?.error ? (
          <div>Error: {correctRequest?.error?.message}</div>
        ) : (
          <div className="inline-grid">
            <button
              className="rounded-lg text-white px-6 py-2 bg-black hover:bg-slate-900"
              onClick={() => correctRequest?.refetch()}
            >
              Test Correct API
            </button>
            {`code: ${correctRequest.data?.code} \n`}
            {`description: ${correctRequest.data?.description}`}
          </div>
        )}
      </div>      
      {wrongRequest?.loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <button
            className="rounded-lg text-white px-6 py-2 bg-black hover:bg-slate-900"
            onClick={() => wrongRequest?.refetch()}
          >
            Test Wrong API
          </button>
          {wrongRequest?.error && (
            <div>Error: {wrongRequest?.error?.message}</div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
