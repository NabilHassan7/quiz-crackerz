import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layout/Main';

function App() {
  // Creating the browser router
  const router = createBrowserRouter([
    { path: '/', 
    element: <Main></Main>, 
    children: [
      { 
        path: '/',
        loader: async() => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element: <Home></Home>
      },

      { 
        path: '/home',
        loader: async() => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element: <Home></Home>
      },

      { path: '/topics', 
        loader: async() => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element: <Topics></Topics>},

      { 
        path: '/statistics',
        // Loading the data required for the statistics page
        loader: async({params}) => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
        }, 
        element: <Statistics></Statistics>
      },

      { 
        path: '/quiz/:quizId',
        // Loading the data required for the statistics page
        loader: async({params}) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        }, 
        element: <Quiz></Quiz>
      },

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
