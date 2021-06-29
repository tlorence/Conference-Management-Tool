import "./App.css";

import {Switch, BrowserRouter, Route} from "react-router-dom";

import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";

import Navbar from "./Pages/components/Navbar/Navbar";

import Sidebar from "./Pages/components/sidebar/Sidebar";

import EditorDashboard from "./Pages/EditerDashboard/EditorDashboard";

import ReviewerDashboard from "./Pages/ReviewerDashboard/ReviewerDashboard";

import ResearcherDashboard from "./Pages/ResearcherDashboard/ResearcherDashboard";

import WorkshopPresenterDashboard from "./Pages/WorkshopPresenterDashboard/WorkshopPresenterDashboard";

import Registration from "./Pages/Resregistration/Registration";
import Login from "./Pages/Login/Login";
import PaymentMethod from "./Pages/Payment/PaymentMethod";


// function App() {
//
//     return (
//
//         <BrowserRouter>

            {/*<Login/>*/}

            // <PaymentMethod/>

            {/*<Switch>*/}

            {/*    <Route path="/admin">*/}

            {/*        <AdminDashboard/>*/}

            {/*    </Route>*/}

            {/*    <Route path="/editor">*/}

            {/*        <EditorDashboard/>*/}

            {/*    </Route>*/}

            {/*    <Route path="/reviewer">*/}

            {/*        <ReviewerDashboard/>*/}

            {/*    </Route>*/}

            {/*    <Route path="/researcher">*/}

            {/*        <ResearcherDashboard/>*/}

            {/*    </Route>*/}

            {/*    <Route path="/workshopPresenter">*/}

            {/*        <WorkshopPresenterDashboard/>*/}

            {/*    </Route>*/}

            {/*    <div>*/}

            {/*        <Navbar/>*/}

            {/*        <Route path="/registration">*/}

            {/*            <Registration/>*/}

            {/*        </Route>*/}

            {/*        <Route path="/login">*/}

            {/*            <Login/>*/}

            {/*        </Route>*/}

            {/*        <Route path={"/paymentMethod"}>*/}

            {/*            <PaymentMethod/>*/}

            {/*        </Route>*/}


            {/*    </div>*/}

            {/*    <Route path={"/paymentMethod"}>*/}

            {/*        <PaymentMethod/>*/}

            {/*    </Route>*/}

            {/*</Switch>*/}

//         </BrowserRouter>
//
//     );
//
// }


// export default App;


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin">
          <AdminDashboard />
        </Route>{" "}
        <Route path="/editor">
          <EditorDashboard />
        </Route>{" "}
        <Route path="/reviewer">
          <ReviewerDashboard />
        </Route>{" "}
        <Route path="/researcher">
          <ResearcherDashboard />
        </Route>{" "}
        <Route path="/workshopPresenter">
          <WorkshopPresenterDashboard />
        </Route>{" "}
        <div>
          <Navbar />
          <Route path="/registration">
            <Registration />
          </Route>{" "}
          <Route path="/login">
            <Login />
          </Route>{" "}
          <Route path={"/paymentMethod"}>
            <PaymentMethod/>
          </Route>{" "}
        </div>{" "}
      </Switch>{" "}
    </BrowserRouter>
  );
}

export default App;

