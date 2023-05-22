import Headline from '../../../atom/headline/Headline'
import SuggestedSearchList from '../../../organism/home/SuggestedSearchList'
import './SuggestedSearchTemplate.css'

const SuggestedSearchTemplate = () => {
  return (
    <section className="search-suggested-container">
      <Headline title="Búsquedas sugeridas" variant="h2" />
      <SuggestedSearchList />
    </section>
  )
}

export default SuggestedSearchTemplate

