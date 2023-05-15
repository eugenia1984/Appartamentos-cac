import { Paper } from '@mui/material'

const ItemCarousel = ({ item }) => {
  const { fullName, telephone, srcImg } = item
  return (
    <Paper>
      <h2>{fullName}</h2>
      <img src={srcImg} alt={fullName} />
      <p>{telephone}</p>
    </Paper>
  )
}

export default ItemCarousel
