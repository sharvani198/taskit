import logo from './logo.svg';
import './App.css';
import CreateTask from './components/CreateTask';
import ShowTasks from './components/ShowTasks';
import UpdateTask from './components/UpdateTask';
import { Container, Header } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <div className="main">
        <header>
          <Header inverted block as="h1" ><a href="/">taskit </a></Header>
          <h3>a simple task manager</h3>
        </header>
        <Container>
          <Router>
            <Routes>
             <Route exact path='/create' element={<CreateTask/>} />
              <Route exact path='/' element={<ShowTasks/>} />
              <Route exact path='/update/:id' element={<UpdateTask  />} />
            </Routes>
          </Router>
        </Container>
      </div>
    </div>
  );
}

export default App;
