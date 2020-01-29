import React from 'react';
import styles from './App.module.css';
import RestaurantList from '../restaurant-list/RestaurantList.js';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <RestaurantList />
      </div>
    </ThemeProvider>
  );
}

export default App;
