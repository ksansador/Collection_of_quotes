import './App.css';
import {Route, Switch} from "react-router-dom";
import Header from "./components/UI/Header/Header";
import HomePage from "./containers/HomePage/HomePage";
import Quotes from "./components/Quotes/Quotes";
import Quote from "./components/Quote/Quote";
import AddPage from "./containers/AddPage/AddPage";

function App() {
  return (
    <div className="App">
    <Header/>

      <main className={'mainBlock'}>
        <div className={'Categories Block'}>
          <HomePage/>
        </div>

        <div className={'Quotes Block'}>
          <Switch>
            <Route path={'/'} exact  component={Quotes}/>
            <Route path={'/add'}   component={AddPage}/>
            <Route path={'/quotes/:category'} component={Quote}/>
            <Route  render={() => <h1>Not found</h1>}/>
          </Switch>
        </div>
      </main>
  </div>
  );
}

export default App;
