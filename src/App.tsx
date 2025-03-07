import { memo } from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import { RepositoryProvider } from "./context/RepositoryProvider";

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
