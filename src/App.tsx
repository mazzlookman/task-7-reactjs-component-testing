import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TodoListPage from './pages/TodoListPage'
import { Provider } from 'react-redux'
import { store } from './redux/store';

function App() {

  return (
    <Provider store={ store }>
      <Router>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path='/todolist' element={ <TodoListPage /> } />
        </Routes>
      </Router>
    </Provider>    
  )
}

export default App
