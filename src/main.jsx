import { createRoot } from "react-dom/client";
import { Greeting, Hello } from "./Hello";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Hello name="Jean" age={25} majeur={true} />
    <Greeting />
  </>
);
