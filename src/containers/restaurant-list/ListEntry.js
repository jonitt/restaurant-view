import React, { Component } from 'react';
import styles from './ListEntry.module.css';
import {
  Grid,
  CardMedia,
  Typography,
  Card,
  CardContent
} from '@material-ui/core';

export default class RestaurantList extends Component {
  state = {};

  /**
   * Forms a string with the delivery information
   */
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
            image={restaurant ? restaurant.image : ''}
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
                className='deliveryInfo'
                  style={{
                    paddingRight: '13px',
                  }}
                  variant='body1'
                  align='right'
                >
                  {restaurant ? this.formDeliveryString(restaurant) : ''}
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
                    variant='h2'
                    align='center'
                  >
                    {restaurant ? restaurant.name : ''}
                  </Typography>
                  <Typography
                    variant='body2'
                    align='center'
                  >
                    {restaurant ? restaurant.description : ''}
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
