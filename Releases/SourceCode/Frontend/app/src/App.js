import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import Navbar from "./Pages/components/Navbar/Navbar";
import Sidebar from "./Pages/components/sidebar/Sidebar";
import EditorDashboard from "./Pages/EditerDashboard/EditorDashboard";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <Switch>
        <Route path="/admin">
          <AdminDashboard />
        </Route>
        <Route path="/editor">
          <EditorDashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
