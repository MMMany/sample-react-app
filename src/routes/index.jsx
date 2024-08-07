import { createBrowserRouter } from "react-router-dom";

import MainRoutes from "./MainRoutes";

const router = createBrowserRouter([MainRoutes], {
  basename: "sample",
});

export default router;
