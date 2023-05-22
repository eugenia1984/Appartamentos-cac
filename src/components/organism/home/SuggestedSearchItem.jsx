import { Link } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import Headline from '../../atom/headline/Headline'
import './SuggestedSearchItem.css'
import { publicRoutes } from '../../../models/routes'

const SuggestedSearchItem = ({ title, listItem }) => {
  return (
    <div className="suggested-search-item">
      <Headline title={title} variant="h3" />
      <div className="suggested-items">
        {listItem.map((item) => (
          <Typography key={item}>{item}</Typography>
        ))}
      </div>
      <Link to={publicRoutes.SEARCH}>
        <Button variant="outlined">Ver más</Button>
      </Link>
    </div>
  )
}

export default SuggestedSearchItem
