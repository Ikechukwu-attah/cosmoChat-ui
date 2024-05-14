import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  // This should match the order in the hook's return statement

  return <RouterProvider router={router} />;
}

export default App;
