import Headline from '../../components/atom/headline/Headline'
import AgentsTemplate from '../../components/templates/about/AgentsTemplate'
import HistoryTemplate from '../../components/templates/about/HistoryTemplate'

const AboutUs = () => {
  return (
    <main>
      <section>
        <Headline title="Quienes somos" />
        <HistoryTemplate />
      </section>
      <section>
        <Headline title="Nuestros agentes" variant="h2" />
        <AgentsTemplate />
      </section>
    </main>
  )
}

export default AboutUs
