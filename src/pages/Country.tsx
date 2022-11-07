import Navigation from '../components/Navigation'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../redux/slices/cartSlice'
import { fetchCountryThunk } from '../redux/slices/fetchSlice'
import { AppDispatch, RootState } from '../redux/store'
import {
  Box,
  Typography,
  Grid,
  CardContent,
  Card,
  Button,
  styled,
} from '@mui/material'
import CountryCounter from '../components/CountryCounter'
import PopulationCard from '../components/PopulationCard'
import AreaCounter from '../components/AreaCounter'

type Parameter = {
  name: string
}

export default function SingleCountry() {
  const dispatch = useDispatch<AppDispatch>()
  const { countries } = useSelector((state: RootState) => state)
  const { name } = useParams<{ name: string }>()
  const country = countries.allcountries.find(
    (country) => country.name.common === name
  )

  const handleAddToCart = (country: any) => {
    dispatch(addToCart(country))
  }

  const MainButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    color: 'primary',
    lineHeight: 1.5,
    backgroundColor: '#ddf472',
    fontFamily: ['poppins'].join(','),
    '&:hover': {
      backgroundColor: 'white',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  })

  useEffect(() => {
    dispatch(fetchCountryThunk(name))
  }, [dispatch, name])

  return (
    <div>
      <Navigation />

      <Box sx={{ mx: '1rem' }}>
        <Box sx={{ m: '1rem', mx: '1rem' }} />

        <Typography variant="h4" sx={{ mb: 7, mt: 7, ml: 1 }}>
          Hey{' '}
          <span role="img" aria-label="sheep">
            👋
          </span>
          {'  '}
          welcome to {country?.name.common}!
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={4}>
            <PopulationCard />
          </Grid>

          <Grid item xs={12} md={4} lg={4}>
            <CountryCounter />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <AreaCounter />
          </Grid>
          <Grid item xs={12} md={4} lg={12}>
            <Box
              sx={{
                mt: '2rem',
                mb: '2rem',
                flexGrow: 1,
                borderBottom: 1,
                borderRadius: '5px',
                borderColor: 'grey.500',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px',
              }}
            >
              <Box>
                <MainButton variant="outlined" sx={{ mt: 3 }} href={`/`}>
                  Home
                </MainButton>
              </Box>
              <Box>
                <Button
                  variant="text"
                  color="success"
                  sx={{ ml: 1 }}
                  onClick={() => handleAddToCart(country)}
                >
                  Add to wishlist
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4} lg={5}>
            <Card variant="outlined">
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Welcome to our beautiful capital city
                </Typography>
                <Typography variant="h5" component="div">
                  {country?.capital}
                </Typography>

                <Typography variant="body2">
                  A beautiful city in
                  <br />
                  {country?.name.common} you should visit!
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4} lg={7}>
            <Card variant="outlined">
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  We love our football
                </Typography>
                <Typography variant="h5" component="div">
                  {country?.fifa}
                </Typography>

                <Typography variant="body2">
                  Is the national football team of
                  <br />
                  {country?.name.common}, come watch a game!
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4} lg={12}>
            <Card variant="outlined">
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Did you know that the area of {country?.name.common} is
                </Typography>
                <Typography variant="h5" component="div">
                  {country?.area} km²
                </Typography>

                <Typography variant="body2">
                  We're just part of the puzzle
                  <br />
                  that makes up {country?.region}!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
