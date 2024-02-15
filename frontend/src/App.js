
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './layout/Layout';
import Layout2 from './components/Layout2';
import Layout3 from './components/Layout3';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    
    children: [
      {
        index: true,
        element: <Layout2 />,
      },
      {
        index: true,
        element: <Layout3 />,
      },

    ],
  },
]);

const App = () => {
  return (
    <main>   
      <RouterProvider router={router} />  
    </main>
  );
};

export default App;
