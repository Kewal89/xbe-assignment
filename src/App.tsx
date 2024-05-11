import { Box } from "@mui/material"
import { useEffect } from "react"
import { TCrewData } from "./Types/CrewData"
import AppStore from "./Utils/Stores/AppStore"
import { observer } from "mobx-react"
import CrewCatalog from "./Components/CrewCatalog/CrewCatalog"

const crewJson: Array<TCrewData> = [
  {
    id: 1,
    class: "Foreman",
    ratePerHour: 50,
  },
  {
    id: 2,
    class: "Operator",
    ratePerHour: 24,
  },
]

const App = () => {
  useEffect(() => {
    AppStore.setCrewData(crewJson)
  }, [])

  return (
    <Box>
      <CrewCatalog />
    </Box>
  )
}

export default observer(App)
