import { Drawer } from "@mui/material"
import { observer } from "mobx-react"
import { ReactNode } from "react"
import AppStore from "../../../Utils/Stores/AppStore"

const SidePanel = ({ children }: { children: ReactNode }) => {

  const onCloseDrawer = () => {
    AppStore.setSidePanel(false)
  }

  return (
    <Drawer open={true || AppStore.sidePanel} onClose={onCloseDrawer} anchor="right">
      {children}
    </Drawer>
  )
}

export default observer(SidePanel)
