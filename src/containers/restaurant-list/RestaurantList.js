import React, { Component } from 'react';
import styles from './RestaurantList.module.css';
import restaurants from './../../utils/data/restaurants.json';
import ListEntry from './ListEntry';
import { Grid, Container } from '@material-ui/core';

export default class RestaurantList extends Component {
  state = {
    listEntries: []
  };

  //function to sort by name, ascending and descending

  //function to create entry for each element
  createEntries = () => {
    const { restaurants } = this.props,
      listEntries = restaurants.restaurants.map(e => e);

    this.setState({
      listEntries: listEntries
    });
  };

  //make images lazy load when scrolling down, with a loading circle

  render() {
    console.log(restaurants);
    return (
      <Container maxWidth={false} disableGutters={true}>
        <Grid className={styles.container}>
          SORT
          <Grid
            spacing='3'
            container
            direction='row'
            justify='center'
          >
            {restaurants.restaurants.map(r => (
              <ListEntry restaurant={r} />
            ))}
          </Grid>
        </Grid>
      </Container>
    );
  }
}
