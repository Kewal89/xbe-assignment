import { Drawer, SxProps } from "@mui/material"
import { observer } from "mobx-react"
import { ReactNode } from "react"
import AppStore from "../../../Utils/Stores/AppStore"

const drawerSX: SxProps = {
  "& .MuiPaper-root": {
    width: "70vw"
  }
}

const SidePanel = ({ children }: { children: ReactNode }) => {

  const onCloseDrawer = () => {
    AppStore.setSidePanel(false)
  }

  return (
    <Drawer sx={drawerSX} open={AppStore.sidePanel} onClose={onCloseDrawer} anchor="right">
      {children}
    </Drawer>
  )
}

export default observer(SidePanel)
