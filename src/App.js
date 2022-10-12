import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './layout/Main';

function App() {
  // Creating the browser router
  const router = createBrowserRouter([
    { path: '/', 
    element: <Main></Main>, 
    children: [
      { path: '/', element: <Navbar></Navbar>},
      { path: '/home', element: <Navbar></Navbar>},
    ]},
    { path: '/*', element: <div>Error 404</div>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
