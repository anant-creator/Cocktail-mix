import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { About, NewsLetter, HomeLayout, Error, Cocktail, Landing, SinglePageError } from './pages';
import { loader as landingLoader } from './pages/Landing';
import { loader as singleCocktailLoader } from './pages/Cocktail';
import { action as newsletterAction} from './pages/NewsLetter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    }
  }
})

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/about',
        element: <About/>
      },
      {
        index: true,
        errorElement: <SinglePageError/>,
        loader: landingLoader(queryClient),
        element: <Landing/>
      },
      {
        path:'/cocktail/:id',
        errorElement: <SinglePageError/>,
        loader: singleCocktailLoader(queryClient),
        element: <Cocktail/>
      },
      {
        path:'/error',
        element: <Error/>
      },
      {
        path:'/news-letter',
        errorElement: <SinglePageError/>,
        action: newsletterAction,
        element: <NewsLetter/>
      },
    ]
  },  
])
const App = () => {
  return <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    <ReactQueryDevtools initialIsOpen={false}/>
  </QueryClientProvider>
};
export default App;
