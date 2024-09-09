import './App.css';
import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <div className='container'>
            <div className='content__top'>
              <Categories />
              <Sort />
            </div>
            {/* <h2 className='content__title'>All Pizza's</h2>
            <div className='content__items'>
              <PizzaBlock title='Cheesburger Pizza' price='17.95' />
              <PizzaBlock title='Mexican Pizza ' price='16.95' />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
