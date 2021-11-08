import Logo from './logo.png';
import './App.css';
import AllTodos from './containers/AllTodos';
import AddTodo from './containers/AddTodo';
import Alert from './containers/Alert';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={Logo} alt="logo" /> tada app
        </header>
        <Alert text="I am working." />
        <AllTodos />
        <AddTodo />
      </div>
    </div>
  );
};

export default App;
