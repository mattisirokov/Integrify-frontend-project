import * as React from 'react'
import {
  Box,
  Typography,
  Modal,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import StyledBadge from '@mui/material/Badge'

import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { removeFromCart } from '../redux/slices/cartSlice'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid main',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
}

export default function BasicModal() {
  const dispatch = useDispatch<AppDispatch>()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const { items } = useSelector((state: RootState) => state.cart)
  const handleRemoveFromCart = (item: any) => {
    dispatch(removeFromCart(item))
  }

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <StyledBadge badgeContent={items.length} color="primary">
          <FavoriteBorderIcon />
        </StyledBadge>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Your travel wishlist
          </Typography>

          <List>
            {items.length === 0 ? (
              <ListItem>
                <ListItemText secondary="Add something nice to your wishlist" />
              </ListItem>
            ) : (
              items.map((country: any) => (
                <ListItem>
                  <ListItemAvatar>
                    <img
                      src={country.flags.png}
                      alt={country.name.common}
                      style={{
                        width: '35px',
                        height: '35px',
                        borderRadius: '100%',
                      }}
                    ></img>
                  </ListItemAvatar>
                  <ListItemText primary={country.name.common} />
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleRemoveFromCart(country)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))
            )}
          </List>
        </Box>
      </Modal>
    </div>
  )
}
