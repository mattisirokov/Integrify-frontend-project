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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
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
  border: '2px solid #000',
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
        <StyledBadge badgeContent={items.length} color="secondary">
          <ShoppingCartIcon />
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
            Shopping cart
          </Typography>

          <List>
            {items.length === 0 ? (
              <ListItem>
                <ListItemText secondary="Your cart is currently empty" />
              </ListItem>
            ) : (
              items.map((item: any) => (
                <ListItem>
                  <ListItemAvatar>
                    <img
                      src={item.flags.png}
                      alt={item.name.common}
                      style={{
                        width: '35px',
                        height: '35px',
                        borderRadius: '100%',
                      }}
                    ></img>
                  </ListItemAvatar>
                  <ListItemText primary={item.name.common} />
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleRemoveFromCart(item)}
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
