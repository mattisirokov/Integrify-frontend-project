import { useEffect } from 'react'
import { useState } from 'react'
import {
  fetchCountryThunk,
  fetchCountriesThunk,
} from '../redux/slices/countriesSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { styled, alpha } from '@mui/material/styles'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'
import { Box, Button } from '@mui/material'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

export default function SearchBar() {
  const dispatch = useDispatch<AppDispatch>()
  const [term, setTerm] = useState('')

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value)
  }

  const handleClear = () => {
    dispatch(fetchCountriesThunk())
  }

  useEffect(() => {
    if (!term) {
      dispatch(fetchCountriesThunk())
    } else {
      dispatch(fetchCountryThunk(term))
    }
  }, [dispatch, term])

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase onChange={searchHandler} placeholder="search..." />
      </Search>
      <Button
        variant="text"
        color="success"
        sx={{ ml: 1 }}
        onClick={() => handleClear()}
      >
        Clear
      </Button>
    </Box>
  )
}
