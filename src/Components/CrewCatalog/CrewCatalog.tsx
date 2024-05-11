import { Box, Button } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { observer } from "mobx-react"
import AppStore from "../../Utils/Stores/AppStore"
import styles from "./CrewCatalog.module.css"

const CrewCatalog = () => {
  const columnHeader: Array<GridColDef> = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "class",
      headerName: "Classification",
      width: 150,
    },

    {
      field: "ratePerHour",
      headerName: "Rate per Hour (in ₹)",
      width: 150,
    },
  ]

  const onClickSidePanel = () => {
    AppStore.setSidePanel(true)
  }

  return (
    <Box className={styles.CatalogRoot}>
      <Box className={styles.TableHeader}>
        <Button onClick={onClickSidePanel}>Create Job</Button>
      </Box>
      <DataGrid rows={AppStore.crewData} columns={columnHeader} />
    </Box>
  )
}

export default observer(CrewCatalog)
