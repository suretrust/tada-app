import logo from './logo.svg'
import './App.css'
import AllTodos from './containers/AllTodos'
import AddTodo from './containers/AddTodo'
import Alert from './containers/Alert'

const App = () => {
  return (
    <div className='App'>
      <div className='container'>
        <header>tada app</header>
        <Alert text="I am working." />
        <AllTodos />
        <AddTodo />
      </div>
    </div>
  )
}

export default App
