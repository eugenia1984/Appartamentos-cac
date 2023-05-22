import { SUGGESTED_LIST } from './suggested'
import SuggestedSearchItem from './SuggestedSearchItem'
import './SuggestedSearchList.css'

const SuggestedSearchList = () => {
  return (
    <section className="search-list-container">
        {SUGGESTED_LIST &&
          SUGGESTED_LIST.map((item) => (
            <SuggestedSearchItem
              title={item.title}
              listItem={item.list}
              key={item.id}
            />
          ))}
    </section>
    
  )
}

export default SuggestedSearchList
