import './App.css';
import {Route, Switch} from "react-router-dom";
import Header from "./components/UI/Header/Header";
import Quotes from "./containers/Quotes/Quotes";
import AddPage from "./containers/AddPage/AddPage";

function App() {
  return (
    <div className="App">
    <Header/>
          <Switch>
            <Route path={'/'} exact  component={Quotes}/>
            <Route path={'/add'}   component={AddPage}/>
            <Route path={'/quotes/:id/edit'} exact component={AddPage}/>
            <Route path={'/quotes/:category'} exact component={Quotes}/>
            <Route  render={() => <h1>Not found</h1>}/>
          </Switch>
  </div>
  );
}

export default App;
