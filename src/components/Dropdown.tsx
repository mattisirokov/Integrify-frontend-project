import React from 'react'
import { FormControl } from '@mui/material'
import { MenuItem } from '@mui/material'
import { Select } from '@mui/material'
import { InputLabel } from '@mui/material'

export default function sortDropdown() {
  //const dispatch = useDispatch<AppDispatch>()

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
          value="A-Z" /*onClick={() => dispatch(SortedNames(`A-to-Z`))}*/
        >
          Sort name A-Z
        </MenuItem>
        <MenuItem value="Z-A">Sort name Z-A</MenuItem>
        <MenuItem value="Small-Large">Population small-large</MenuItem>
        <MenuItem value="Large-Small">Population large-small</MenuItem>
      </Select>
    </FormControl>
  )
}
