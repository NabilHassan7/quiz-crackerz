import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Main from './layout/Main';

function App() {
  // Creating the browser router
  const router = createBrowserRouter([
    { path: '/', 
    element: <Main></Main>, 
    children: [
      { path: '/', element: <Home></Home>},
      { path: '/home', element: <Home></Home>},
      { 
        path: '/statistics',
        // Loading the data required for the statistics page
        loader: async({params}) => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
        }, 
        element: <Statistics></Statistics>},
      { path: '/blog', element: <Blogs></Blogs>},
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
