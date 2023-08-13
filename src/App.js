import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import { Spinner } from './components/Spinner'
function App() {
  return (
    <RouterProvider router={router} fallbackElement={<Spinner />} />
  )
}

export default App;
