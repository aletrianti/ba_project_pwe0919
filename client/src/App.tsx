import * as React from 'react';
import { BrowserRouter, Route, RouteProps, Switch, Redirect } from 'react-router-dom';
import './App.scss';

// import views
import SignIn from './views/SignIn/SignIn';
import SignUp from './views/SignUp/SignUp';
import Dashboard from './views/Dashboard/Dashboard';
import CompanyAndTeam from './views/CompanyAndTeam/CompanyAndTeam';
import Documents from './views/Documents/Documents';
import FAQs from './views/FAQs/FAQs';
import AdminPanel from './views/AdminPanel/AdminPanel';

// localStorage
import { getTokenFromLocalStorage } from './utils/localStorageActions';

const App = () => {
  interface CustomRouteProps extends Omit<RouteProps, 'component'> {
    component: React.ElementType;
  }

  const PrivateRoute: React.FC<CustomRouteProps> = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props => (getTokenFromLocalStorage() !== undefined ? <Component {...props} /> : <Redirect to="/sign-in" />)}
    />
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {getTokenFromLocalStorage() !== undefined ? <Redirect to="/dashboard" /> : <Redirect to="/sign-in" />}
          </Route>
          <Route path="/sign-in" component={SignIn} />

          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-up/:accountType/:currentStep" component={SignUp} />

          <PrivateRoute path="/dashboard" component={Dashboard} />

          <PrivateRoute path="/company-and-team/:section" component={CompanyAndTeam} />

          <PrivateRoute path="/documents" component={Documents} />

          <PrivateRoute path="/faqs" component={FAQs} />

          <PrivateRoute path="/admin-panel/:section" component={AdminPanel} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
