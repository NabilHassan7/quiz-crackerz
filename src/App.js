import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  // Creating the browser router
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar></Navbar>
    },
    { path: '/home', element: <Navbar></Navbar>},
    { path: '/*', element: <div>Error 404</div>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
