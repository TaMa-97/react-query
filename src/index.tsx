import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query"; // React Query全ページで使えるように
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const queryClient = new QueryClient(); // QueryClient：React Queryがクエリデータを管理およびキャッシュするために使用するクライアント

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* QueryClientをインスタンス化して、QueryClientProviderに渡す */}
    {/* QueryClientProviderでAppコンポーネントをラップし、React Queryを使用するコンポーネントがqueryClientにアクセスできるようにする */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
