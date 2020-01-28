import React, { Component } from 'react';
import styles from './RestaurantList.module.css';
import restaurants from './../../utils/data/restaurants.json';
import ListEntry from './ListEntry';
import { Grid, Container, Button } from '@material-ui/core';

export default class RestaurantList extends Component {
  state = {
    listEntries: [],
    sorting: 'asc'
  };

  /**
   * Returns restaurant objects sorted by their names.
   * THe function assumes that 'sorting' value is not an improper string
   * @param {list} restaurants list of restaurant objects
   * @param {string} sorting sorting order
   */
  sortByName(restaurants, sorting) {
    const val = sorting === 'asc' ? 1 : -1;
    return restaurants.sort((a, b) =>
      a.name > b.name ? val : -1 * val
    );
  }

  /**
   * Reverses sorting variable.
   * @param {string} currentSorting
   */
  changeSorting(currentSorting) {
    this.setState({
      sorting: currentSorting === 'asc' ? 'des' : 'asc'
    });
  }

  //make images lazy load when scrolling down, with a loading circle

  render() {
    const { sorting } = this.state;
    return (
      <Container maxWidth={false} disableGutters={true}>
        <Grid className={styles.container}>
          <Button
            onClick={() => this.changeSorting(sorting)}
          >
            SORT
          </Button>
          <Grid
            spacing='3'
            container
            direction='row'
            justify='center'
          >
            {this.sortByName(
              restaurants.restaurants,
              sorting
            ).map(r => (
              <ListEntry restaurant={r} />
            ))}
          </Grid>
        </Grid>
      </Container>
    );
  }
}
