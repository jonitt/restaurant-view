import React, { Component } from 'react';
import styles from './ListEntry.module.css';
import {
  Grid,
  CardMedia,
  Typography,
  Card,
  CardContent
} from '@material-ui/core';
import { borders } from '@material-ui/system';

export default class RestaurantList extends Component {
  state = {};

  formDeliveryString(restaurant) {
    const deliveryPrice = (
      restaurant.delivery_price / 100.0
    ).toFixed(2);

    return `Kuljetusmaksu ${deliveryPrice} ${restaurant.currency}`;
  }

  render() {
    const { props } = this;
    const { restaurant } = props;
    return (
      <Grid item borderRadius='50%'>
        <Card
          className={styles.container}
          borderRadius='50%'
          style={{ borderRadius: '5%' }}
        >
          <CardMedia
            classes={{ root: styles.image }}
            image={restaurant.image}
          >
            <Grid
              style={{ height: '100%' }}
              container
              direction='column'
              justify='space-between'
            >
              <Grid
                item
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.3)'
                }}
              >
                <Typography
                  style={{
                    color: 'white',
                    fontSize: '1.5rem',
                    paddingRight: '13px'
                  }}
                  align='right'
                >
                  {this.formDeliveryString(restaurant)}
                </Typography>
              </Grid>
              <Grid
                item
                style={{
                  width: '100%'
                }}
              >
                <CardContent
                  classes={{ root: styles.bottomContent }}
                >
                  <Typography
                    style={{
                      fontSize: '2.5rem',
                      color: 'white'
                    }}
                    align='center'
                  >
                    {restaurant.name}
                  </Typography>
                  <Typography
                    style={{
                      fontSize: '1.8rem',
                      color: 'white'
                    }}
                    align='center'
                  >
                    {restaurant.description}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </CardMedia>
          />
        </Card>
      </Grid>
    );
  }
}
