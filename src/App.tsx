import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TodoListPage from './pages/TodoListPage'
import { Provider } from 'react-redux'
import { store } from './redux/store';
import { ProductPage } from './pages/ProductPage';

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path='/todolist' element={ <TodoListPage /> } />
          <Route path='/products' element={ <ProductPage /> } />
        </Routes>
      </Router>
    </Provider>    
  )
}

export default App
