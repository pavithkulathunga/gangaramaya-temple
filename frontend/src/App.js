
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './layout/Layout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    
    // children: [
    //   {
    //     // index: true,
    //     // element: <AllStudents />,
    //   },

    // ],
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
