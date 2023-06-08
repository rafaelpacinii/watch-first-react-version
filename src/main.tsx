import { createRoot } from "react-dom/client";
import { App } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./routes/Home";
import { Catalog } from "./routes/Catalog";
import { ErrorPage } from "./routes/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/watch-first-react-version/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/watch-first-react-version/", element: <Home /> },
      { path: "/watch-first-react-version/catalog", element: <Catalog /> },
    ],
  },
]);

const container = document.getElementById("root");
const root = createRoot(container!); // eslint-disable-line @typescript-eslint/no-non-null-assertion
root.render(<RouterProvider router={router} />);
