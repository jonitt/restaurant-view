import React from 'react';
import styles from './App.module.css';

import RestaurantList from '../restaurant-list/RestaurantList.js';
/*import PageHeader from '../components/page-header/PageHeader.js';
import PageFooter from '../components/page-footer/PageFooter.js';
*/

function App() {
  return (
    <div className={styles.container}>
      <RestaurantList />
      {/*
        <PageHeader />
        <RestauntList />
        <PageFooter />
      */}
    </div>
  );
}

export default App;
