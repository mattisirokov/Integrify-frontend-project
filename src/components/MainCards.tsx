import * as React from 'react'
import { useEffect } from 'react'

import { fetchCountriesThunk } from '../redux/slices/fetchSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material'
import { addToCart } from '../redux/slices/cartSlice'

export default function MainTable() {
  const dispatch = useDispatch<AppDispatch>()
  const { countries } = useSelector((state: RootState) => state)

  const handleAddToCart = (country: any) => {
    dispatch(addToCart(country))
  }

  useEffect(() => {
    dispatch(fetchCountriesThunk())
  }, [dispatch])

  return (
    <div>
      <Box sx={{ mt: 3 }}>
        <Grid container spacing={5}>
          {countries.allcountries.map((country: any) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345, minHeight: 310 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="150"
                    image={country.flags.png}
                    alt="{country.name.common}"
                  />
                  <CardContent>
                    <Box sx={{ mb: 1 }}>
                      <Typography
                        gutterBottom
                        variant="subtitle2"
                        component="div"
                      >
                        {country.region}
                      </Typography>
                    </Box>
                    <Typography gutterBottom variant="h6" component="div">
                      {country.name.common}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        Population: {country.population}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Capital: {country.capital}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        flexGrow: 1,

                        borderRadius: '5px',
                        borderColor: 'grey.500',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{ mt: 3 }}
                        href={`/countries/${country.name.common}`}
                      >
                        Learn more
                      </Button>

                      <IconButton
                        aria-label="add to favorites"
                        onClick={() => handleAddToCart(country)}
                      >
                        <FavoriteBorderIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  )
}
