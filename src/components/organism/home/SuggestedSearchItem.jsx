import { Button, Typography } from "@mui/material"
import Headline from "../../atom/headline/Headline"

const SuggestedSearchItem = ({ title, listItem }) => {
  return (
    <>
      <Headline title={title} variant="h3" />
      {listItem.map((item) => (
        <Typography key={item}>{item}</Typography>
      ))}
      <Button>Ver más</Button>
    </>
  )
}

export default SuggestedSearchItem
