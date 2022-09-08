import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar/>
      <main className="container">
        <Counters/>
      </main>
    </>
    
  );
}

export default App;
