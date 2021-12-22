import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="row">
    <div className="col">
      <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
    </div>
    <div className="col">
      <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
    </div>
  </div>
  );
}

export default App;
