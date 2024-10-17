// src/App.jsx
import './App.css';
import Button1 from './components/example-1-normal-css/Button';
import Button2 from './components/example-2-inline-css/Button';

function App() {
  return (
    <div className="App">
      <Button1 buttonText="Example 1" />
      <Button2 buttonText="Example 2" />
    </div>
  );
}

export default App;