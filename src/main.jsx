import "react";
import { createRoot } from "react-dom/client";
import Hello from "./Hello";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Hello>
      <button>Submit</button>
    </Hello>
  </>
);
