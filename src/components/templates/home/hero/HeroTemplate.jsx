import {  Grid } from '@mui/material'
import './HeroTemplate.css'
import HeroButtons from '../../../organism/home/HEroButtons'
import HeroForm from '../../../organism/home/HeroForm'

const HeroTemplate = () => {
  return (
    <div className="hero">
      <Grid container sx={styles.container}>
        <HeroButtons />
        <HeroForm />
      </Grid>
    </div>
  )
}

export default HeroTemplate

const styles = {
  container: {
    width: '100%',
    maxWidth: '500px',
    minHeight: '300px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '12px'
  }
}