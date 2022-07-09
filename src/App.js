import './App.css';
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className={'Countries Block'}>

      </div>

      <div className={'CountryInfo Block'}>
        <Switch>
          {/*<Route path={'/'} exact  render={() => <h1>Countries App</h1>}/>*/}
          {/*<Route path={'/country/:code'} component={Country}/>*/}
          {/*<Route  render={() => <h1>Not found</h1>}/>*/}
        </Switch>
      </div>
    </div>
  );
}

export default App;
