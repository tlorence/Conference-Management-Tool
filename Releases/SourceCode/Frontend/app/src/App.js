import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
import Navbar from './Pages/components/Navbar/Navbar';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route>
          <AdminDashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
