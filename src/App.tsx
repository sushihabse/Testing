import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [language, setLanguage] = useState<"ja" | "en">("ja");

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      <Home language={language} />
    </>
  );
}

export default App;