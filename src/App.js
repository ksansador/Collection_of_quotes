import './App.css';
import {Route, Switch} from "react-router-dom";
import Header from "./components/UI/Header/Header";
import Quotes from "./components/Quotes/Quotes";
import AddPage from "./containers/AddPage/AddPage";

function App() {
  return (
    <div className="App">
    <Header/>

          <Switch>
            <Route path={'/'} exact  component={Quotes}/>
            <Route path={'/add'}   component={AddPage}/>
            <Route path={'/quotes/:category'} component={Quotes}/>
            <Route path={'/quotes/:category/edit'} exact component={AddPage}/>
            <Route  render={() => <h1>Not found</h1>}/>
          </Switch>
  </div>
  );
}

export default App;
