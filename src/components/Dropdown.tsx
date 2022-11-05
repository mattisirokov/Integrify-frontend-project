import React from 'react'
import { FormControl, MenuItem, Select, InputLabel } from '@mui/material'
import { AppDispatch } from '../redux/store'
import { useDispatch } from 'react-redux'
import { SortedNames, SortedPopulation } from '../redux/slices/fetchSlice'

export default function SortingDropdown() {
  const dispatch = useDispatch<AppDispatch>()

  const handleSortNames = (action: string) => {
    dispatch(SortedNames(action))
  }

  const handleSortPopulation = (action: string) => {
    dispatch(SortedPopulation(action))
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Sort by</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        label="Sort by"
        defaultValue=""
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem
          value="A-to-Z"
          onClick={() => dispatch(SortedNames('`A-to-Z'))}
        >
          Sort name A-Z
        </MenuItem>

        <MenuItem
          value="Z-A"
          onClick={() => {
            handleSortNames('Z-to-A')
          }}
        >
          Sort name Z-A
        </MenuItem>
        <MenuItem
          value="Small-Large"
          onClick={() => {
            handleSortPopulation('small-to-large')
          }}
        >
          Population small-large
        </MenuItem>
        <MenuItem
          value="Large-Small"
          onClick={() => {
            handleSortPopulation('large-to-small')
          }}
        >
          Population large-small
        </MenuItem>
      </Select>
    </FormControl>
  )
}
