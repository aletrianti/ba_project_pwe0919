import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './App.scss';

// import views
import SignIn from './views/SignIn/SignIn';
import SignUp from './views/SignUp/SignUp';
import Dashboard from './views/Dashboard/Dashboard';
import CompanyAndTeam from './views/CompanyAndTeam/CompanyAndTeam';
import Documents from './views/Documents/Documents';
import FAQs from './views/FAQs/FAQs';
import AdminPanel from './views/AdminPanel/AdminPanel';

// TODO: Add private routes and display AdminPanel only to admins
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/sign-in"/>
          </Route>
          <Route path="/sign-in" component={SignIn}/>

          <Route path="/sign-up" component={SignUp}/>
          <Route path="/sign-up/:accountType/:currentStep" component={SignUp}/>

          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/company-and-team" component={CompanyAndTeam}/>
          <Route path="/documents" component={Documents}/>
          <Route path="/faqs" component={FAQs}/>
          <Route path="/admin-panel" component={AdminPanel}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
