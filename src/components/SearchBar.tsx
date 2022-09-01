import { useEffect } from 'react'
import { useState } from 'react'
import { fetchCountrySearch } from '../redux/slices/fetchSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { styled, alpha } from '@mui/material/styles'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'

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

  const searchHandler = (e: any) => {
    setTerm(e.target.value)
    if (term !== '') {
      dispatch(fetchCountrySearch(term))
    }
  }

  useEffect(() => {
    dispatch(fetchCountrySearch(term))
  }, [dispatch, term])

  return (
    <div>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase onChange={searchHandler} placeholder="search" />
      </Search>
    </div>
  )
}
