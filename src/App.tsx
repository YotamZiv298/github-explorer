import { memo } from "react";
import "./App.css";
import { RepositoryProvider } from "./Context/RepositoryProvider";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <RepositoryProvider>
      <div className="container">
        <Header />
        <Content />
      </div>
    </RepositoryProvider>
  );
}

export default memo(App);
