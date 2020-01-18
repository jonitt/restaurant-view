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

  render() {
    const { props } = this;
    const { restaurant } = props;
    return (
      <Grid item>
        <Card className={styles.container}>
          <CardMedia
            classes={{ root: styles.image }}
            image={restaurant.image}
          >
            <Grid style={{height: '100%'}} container direction='row' justify='flex-end' alignItems='flex-end' alignContent='flex-end'>
              <Grid item xs={2}>
                <Typography
                  style={{
                    color: 'white',
                    fontSize: '1.8rem',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                  }}
                  align='right'
                >
                  {restaurant.city}
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <CardContent
                  classes={{ root: styles.bottomContent }}
                >
                  <Typography
                    style={{
                      fontSize: '2.4rem',
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
