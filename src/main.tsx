import { createRoot } from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("root");
const root = createRoot(container!); // eslint-disable-line @typescript-eslint/no-non-null-assertion
root.render(<App />);
