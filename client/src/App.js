import logo from './logo.svg';
import './App.css';
import CreateTask from './components/CreateTask';
import { Container } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <div className="main">
        <header>
          <h2> taskit </h2>
          <h3> a simple task manager</h3>
        </header>
        <Container>
          <CreateTask/>
        </Container>
      </div>
    </div>
  );
}

export default App;
