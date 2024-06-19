import React from "react";
import Layout from "./components/Layout/Layout";
import Router from "./routes";

function App() {
  return (
    <div className="App">
      <Layout>
        <Router />
      </Layout>
    </div>
  );
}

export default App;
