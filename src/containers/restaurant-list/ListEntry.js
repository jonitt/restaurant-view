import React, { Component } from 'react';
import styles from './ListEntry.module.css';
import {
  Grid,
  CardMedia,
  Typography
} from '@material-ui/core';

export default class RestaurantList extends Component {
  state = {};

  render() {
    const { props } = this;
    const { restaurant } = props;
    return (
      <Grid item className={styles.container}>
        <CardMedia
          classes={{ root: styles.image }}
          image={restaurant.image}
        >
          <Typography
            style={{ fontSize: '1.8rem' }}
            align='right'
          >
            {restaurant.city}
          </Typography>
        </CardMedia>{' '}
        />
      </Grid>
    );
  }
}
