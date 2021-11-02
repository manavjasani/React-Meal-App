import './App.css';
import Meals from './components/Meals/Meals';
import { Route, Switch } from 'react-router-dom';
import MealDetail from './components/MealDetail/MealDetail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Meals} />
        <Route path="/:id" component={MealDetail} />
      </Switch>
    </div>
  );
}

export default App;
