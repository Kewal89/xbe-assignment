import { Box } from "@mui/material"
import { useEffect } from "react"
import { TCrewData } from "./Types/CrewData"
import AppStore from "./Utils/Stores/AppStore"
import { observer } from "mobx-react"
import CrewCatalog from "./Components/CrewCatalog/CrewCatalog"
import styles from "./App.module.css"
import Header from "./Components/Header/Header"
import "@fontsource/inter/300.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/700.css"
import SidePanel from "./Components/Common/SidePanel/SidePanel"
import CrewScheduling from "./Components/CrewScheduling/CrewScheduling"

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
  {
    id: 3,
    class: "Carpenter",
    ratePerHour: 21,
  },
  {
    id: 4,
    class: "Electrician",
    ratePerHour: 12,
  },
  {
    id: 5,
    class: "Plumber",
    ratePerHour: 150,
  },
  {
    id: 6,
    class: "Mason",
    ratePerHour: 90,
  },
  {
    id: 7,
    class: "Painter",
    ratePerHour: 130,
  },
  {
    id: 8,
    class: "Concrete Finisher",
    ratePerHour: 58,
  },
  {
    id: 9,
    class: "HVAC Technician",
    ratePerHour: 245,
  },
  {
    id: 10,
    class: "Heavy Equipment Operator",
    ratePerHour: 900,
  },
]

const App = () => {
  useEffect(() => {
    AppStore.setCrewData(crewJson)
  }, [])

  return (
    <Box className={styles.AppRoot}>
      <Header />
      <Box className={styles.MainContainer}>
        <CrewCatalog />
        <SidePanel>
          <CrewScheduling />
        </SidePanel>
      </Box>
    </Box>
  )
}

export default observer(App)
