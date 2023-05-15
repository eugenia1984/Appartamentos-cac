import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

/*
 * Reusable H! componente for all the primary titles on the ages
 * By default is already set:
 * - align: center, but can be change with props, alternativa values: 'left', 'right', 'justify'
 * - variant: 'h1', alternative values: 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2'
 * -color: 'secondary', alternativa values: 'primary'
 */
const Headline = ({ variant, title, align, color }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography
        variant={variant ? variant : 'h1'}
        align={align ? align : 'center'}
        color={color ? color : 'secondary'}
      >
        {title ? title : 'Title not found'}
      </Typography>
    </Box>
  )
}

export default Headline
