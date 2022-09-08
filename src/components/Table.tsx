import * as React from 'react'
import { useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material'

import IconButton from '@mui/material/IconButton'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

import { fetchCountriesThunk } from '../redux/slices/fetchSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { Link } from 'react-router-dom'
import { addToCart } from '../redux/slices/cartSlice'

export default function MainTable() {
  const dispatch = useDispatch<AppDispatch>()
  const { countries } = useSelector((state: RootState) => state)
  const handleAddToCart = (country: any) => {
    dispatch(addToCart(country))
  }

  useEffect(() => {
    dispatch(fetchCountriesThunk())
  }, [dispatch])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <h4>Country flag</h4>
            </TableCell>
            <TableCell align="right">
              <h4>Name</h4>
            </TableCell>
            <TableCell align="right">
              <h4>Language(s)</h4>
            </TableCell>
            <TableCell align="right">
              <h4>Currency</h4>
            </TableCell>
            <TableCell align="right">
              <h4>Population</h4>
            </TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.countries.map((country) => (
            <TableRow
              key={country.name.common}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img
                  src={country.flags.png}
                  alt={country.name.common}
                  style={{
                    width: '85px',
                    height: '85px',
                    borderRadius: '100%',
                  }}
                ></img>
              </TableCell>

              <TableCell align="right">{country.name.common}</TableCell>
              <TableCell align="right">
                {Object.values(country.languages).map((language) => language)}
              </TableCell>
              <TableCell align="right">
                {Object.values(country.currencies).map(
                  (currency) => currency.name
                )}
              </TableCell>
              <TableCell align="right">{country.population}</TableCell>
              <TableCell align="right">
                <Link to={`/countries/${country.name.common}`}>
                  <Button size="small" variant="outlined">
                    Details
                  </Button>
                </Link>
              </TableCell>

              <TableCell align="right">
                <IconButton
                  aria-label="add to shopping cart"
                  onClick={() => handleAddToCart(country)}
                >
                  <AddShoppingCartIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
