import { Box } from '@mui/material'
import React from 'react'
import SearchBar from './SearchBar'
import Dropdown from './Dropdown'

const Fitler = () => {
  return (
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
        <SearchBar />
      </Box>
      <Box>
        <Dropdown />
      </Box>
    </Box>
  )
}

export default Fitler
