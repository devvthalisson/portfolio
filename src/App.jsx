import { useState } from "react";
import { Header } from "./layout/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <p className="text-2xl text-black">i'm coding</p>
    </>
  );
}

export default App;
