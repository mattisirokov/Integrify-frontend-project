import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountriesThunk } from '../redux/slices/countriesSlice'
import { Country } from '../types'
import { AppDispatch, RootState } from '../redux/store'

export default function Langauge() {
  const dispatch = useDispatch<AppDispatch>()
  const { countries } = useSelector((state: RootState) => state)

  useEffect(() => {
    dispatch(fetchCountriesThunk())
  }, [dispatch])

  const handleLanguageRender = (countries: Country[]) => (
    <Card>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              THE LAND AREA OF THE WORLD
            </Typography>
            <Typography color="textPrimary" variant="h4">
              {countries.reduce((acc, curr) => acc + curr.area, 0)}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: 'highlight',
                height: 56,
                width: 56,
              }}
            >
              <InsertChartIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            pt: 2,
          }}
        >
          <ArrowUpwardIcon color="success" />
          <Typography
            variant="body2"
            sx={{
              mr: 1,
            }}
          >
            24%
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Since last month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
  return (
    <div>
      {countries.allCountries.length > 0
        ? handleLanguageRender(countries.allCountries)
        : null}
    </div>
  )
}
