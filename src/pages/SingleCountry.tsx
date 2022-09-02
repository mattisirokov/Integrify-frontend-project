import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCountryThunk } from '../redux/slices/fetchSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import Navigation from '../components/Navigation'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

type Parameter = {
  name: string
}

export default function SingleCountry() {
  const dispatch = useDispatch<AppDispatch>()
  const { countries } = useSelector((state: RootState) => state)
  const { name } = useParams<Parameter>()

  useEffect(() => {
    dispatch(fetchCountryThunk(name))
  }, [dispatch, name])

  return (
    <div>
      <Navigation />
      {countries.items.map((country) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={country.flags.png}
            alt="green iguana"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {country.name.common}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Object.values(country.currencies).map(
                (currency) => currency.name
              )}
            </Typography>
          </CardContent>

          <CardActions>
            <IconButton aria-label="add to shopping cart">
              <AddShoppingCartIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  )
}
