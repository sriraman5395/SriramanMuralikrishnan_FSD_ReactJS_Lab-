
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddExpense from './components/AddExpense';
import ShowData from './components/ShowData';
import { getDataFromServer } from './service/service';

function App() {
  console.log(getDataFromServer());

  return (
    <Router>
    <div className="App">
          <Routes>
          <Route path="/" element={<AddExpense />} />
          <Route path="/showData" element={<ShowData />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
