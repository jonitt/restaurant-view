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
            <Grid
              style={{ height: '100%' }}
              container
              direction='column'
              justify='space-between'
            >
              <Grid item 
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.4)'
                  }}>
                <Typography
                  style={{
                    color: 'white',
                    fontSize: '1.8rem',
                    paddingRight: '5px'
                  }}
                  align='right'
                >
                  {restaurant.city}
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
