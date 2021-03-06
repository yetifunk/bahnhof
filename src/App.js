import './App.css';
import { Route, Link } from 'react-router-dom'

import Header from './components/Header/Header'
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import CoinSearch from './components/CoinSearch/CoinSearch'
import ToDoList from './components/ToDoList/ToDoList'
import HeadlineNews from './components/HeadlineNews/HeadlineNews'
import sign from './Train_Crossing.png'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Route path='/' exact render={() => <WeatherSearch />} />
      <Route path='/' exact render={() => <CoinSearch />} />
      <Link to='/news' className='news-button'><h1>Headline News</h1></Link>
      <Route path='/news' exact render={() => <HeadlineNews />} />
      <Route path='/' exact render={() => <ToDoList />} />
      <img src={sign} alt='train crossing' className='about-sign' />
    </div>
  );
}