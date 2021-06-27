import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
import Navbar from './Pages/components/Navbar/Navbar';
import Sidebar from './Pages/components/sidebar/Sidebar';

function App() {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
      <Switch>
        <Route>
          <Sidebar />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
