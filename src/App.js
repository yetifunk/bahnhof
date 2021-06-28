import './App.css';
import { Route, Link } from 'react-router-dom'

import Header from './components/Header/Header'
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import CoinSearch from './components/CoinSearch/CoinSearch'
import ToDoList from './components/ToDoList/ToDoList'
import HeadlineNews from './components/HeadlineNews/HeadlineNews'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/home" exact render={() => <WeatherSearch />} />
      <Route path="/home" exact render={() => <CoinSearch />} />
      <Link to='/news'>Headline News</Link>
      <Route path='/news' exact render={() => <HeadlineNews />} />
      <Route path="/home" exact render={() => <ToDoList />} />
    </div>
  );
}