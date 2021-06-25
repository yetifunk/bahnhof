import './App.css';
import { Route } from 'react-router-dom'

import Header from './components/Header/Header'
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import CoinSearch from './components/CoinSearch/CoinSearch'
import ToDoList from './components/ToDoList/ToDoList'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" render={() => <WeatherSearch />} />
      <Route path="/" render={() => <CoinSearch />} />
      <Route path="/" render={() => <ToDoList />} />
    </div>
  );
}