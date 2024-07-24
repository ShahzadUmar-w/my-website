import "./Styles/App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import RouterApp from "./Router/Router";

gsap.registerPlugin(useGSAP);

const App = () => {
  return (
    <div>
      <RouterApp />
    </div>
  );
};

export default App;
