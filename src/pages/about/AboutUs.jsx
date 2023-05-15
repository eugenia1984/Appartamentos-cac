import Headline from '../../components/atom/headline/Headline'
import AgentsTemplate from '../../components/templates/about/agents/AgentsTemplate'
import HistoryTemplate from '../../components/templates/about/history/HistoryTemplate'
import { COLOR } from '../../theme/theme'

const AboutUs = () => {
  return (
    <main>
      <section>
        <Headline title="Quienes somos" />
        <HistoryTemplate />
      </section>
      <section style={styles.agentSection}>
        <Headline title="Nuestros agentes" variant="h2" />
        <AgentsTemplate />
      </section>
    </main>
  )
}

export default AboutUs

const styles = {
  agentSection: {
    background: `${COLOR.LIGHT_BACKGROUND}`,
    padding: '2rem',
    marginBottom: '5rem'
  }
}
