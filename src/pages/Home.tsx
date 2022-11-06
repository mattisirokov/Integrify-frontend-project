import React from 'react'
import Navigation from '../components/Navigation'
import MainCards from '../components/MainCards'
import PopulationCard from '../components/PopulationCard'
import CountryCounter from '../components/CountryCounter'
import FilterBar from '../components/FilterBar'
import { Box, Grid, Typography } from '@mui/material'
import AreaCounter from '../components/AreaCounter'

const Home = () => {
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
          welcome to the world of countries!
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
            <FilterBar />
          </Grid>

          <Grid item xs={12}>
            <MainCards />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Home
