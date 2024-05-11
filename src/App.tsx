import { Box } from "@mui/material"
import { useEffect } from "react"
import { TCrewData } from "./Types/CrewData"
import AppStore from "./Utils/Stores/AppStore"
import { observer } from "mobx-react"

const crewJson: Array<TCrewData> = [
  {
    id: 1,
    class: "Foreman",
    ratePerHour: 50
  },
  {
    id: 2,
    class: "Operator",
    ratePerHour: 50
  }
]

const App = () => {

  useEffect(() => {
    AppStore.setCrewData(crewJson)
  }, [])

  return (
    <Box>
      
    </Box>
  )
}

export default observer(App)
