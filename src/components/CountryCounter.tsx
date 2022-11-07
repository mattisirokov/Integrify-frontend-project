import * as React from 'react'

import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined'

import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Country } from '../types'

export default function Population() {
  const { countries } = useSelector((state: RootState) => state)
  console.log(countries.allcountries.length)
  const handlePopulationRender = (countries: Country[]) => (
    <Card>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              NUMBER OF COUNTRIES IN THE WORLD
            </Typography>
            <Typography color="textPrimary" variant="h4">
              {countries.length}
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
      {countries.allcountries.length > 0
        ? handlePopulationRender(countries.allcountries)
        : null}
    </div>
  )
}
