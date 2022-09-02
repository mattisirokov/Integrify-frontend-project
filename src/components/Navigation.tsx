import * as React from 'react'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import { useTheme } from '@mui/material/styles'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { ColorModeContext } from '../context/ColorModeContext'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import SearchBar from './SearchBar'

export default function SearchAppBar() {
  const theme = useTheme()
  const { toggleColorMode } = React.useContext(ColorModeContext)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Countries Table
          </Typography>

          <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>

          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Sort by</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              label="Sort by"
              //onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Sort A-Z</MenuItem>
              <MenuItem value={20}>Sort Z-A</MenuItem>
              <MenuItem value={30}>Sort small-large</MenuItem>
              <MenuItem value={40}>Sort large-small</MenuItem>
            </Select>
          </FormControl>

          <SearchBar />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
