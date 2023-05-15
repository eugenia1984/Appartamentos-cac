import Carousel from 'react-material-ui-carousel'
import ItemCarousel from '../../../organism/about/ItemCarousel'
import { items } from './items'

const AgentsTemplate = () => {
  return (
    <>
      <Carousel>
        {items.map((item) => (
          <ItemCarousel key={item.id} item={item} />
        ))}
      </Carousel>
    </>
  )
}

export default AgentsTemplate
