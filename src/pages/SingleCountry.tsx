import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCountryThunk } from '../redux/slices/fetchSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { Link } from 'react-router-dom'
import { addToCart } from '../redux/slices/cartSlice'
import Navigation from '../components/Navigation'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { IconButton } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

import Grid from '@mui/material/Grid'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

type Parameter = {
  name: string
}

export default function SingleCountry() {
  const dispatch = useDispatch<AppDispatch>()
  const { countries } = useSelector((state: RootState) => state)
  const { name } = useParams<Parameter>()
  const handleAddToCart = (country: any) => {
    dispatch(addToCart(country))
  }

  useEffect(() => {
    dispatch(fetchCountryThunk(name))
  }, [dispatch, name])

  return (
    <div>
      <Navigation />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        {countries.countries.map((country) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="240"
              width="345"
              image={country.flags.png}
              alt={country.name.common}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {country.name.common}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {country.region}
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Fifa code" />
                  <ListItemText secondary={country.fifa} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Capital(s)" />
                  <ListItemText
                    secondary={Object.values(country.capital).map(
                      (capital) => capital
                    )}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Area" />
                  <ListItemText secondary={country.area} />
                </ListItem>
              </List>
            </CardContent>

            <CardActions>
              <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                  <Link to="/">
                    <Button
                      variant="outlined"
                      startIcon={<KeyboardArrowLeftIcon />}
                    >
                      Home
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={8}>
                  <IconButton
                    aria-label="add to shopping cart"
                    onClick={() => handleAddToCart(country)}
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </div>
  )
}
