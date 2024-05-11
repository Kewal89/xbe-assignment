import { Box, Button, SxProps } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { observer } from "mobx-react"
import AppStore from "../../Utils/Stores/AppStore"
import styles from "./CrewCatalog.module.css"

const tableSX: SxProps = {
  "&": {
    borderRadius: "0 0 10px 10px",
  },
}

const CrewCatalog = () => {
  const columnHeader: Array<GridColDef> = [
    {
      field: "id",
      headerName: "ID",
      width: 75,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "class",
      headerName: "Classification",
      minWidth: 200,
      headerAlign: "left",
      align: "left",
    },

    {
      field: "ratePerHour",
      headerName: "Rate per Hour (in ₹)",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
  ]

  const onClickSidePanel = () => {
    AppStore.setSidePanel(true)
  }

  return (
    <Box className={styles.CatalogRoot}>
      <Box className={styles.TableHeader}>
        <Button variant="outlined" onClick={onClickSidePanel}>
          Create Job
        </Button>
      </Box>
      <DataGrid rows={AppStore.crewData} columns={columnHeader} sx={tableSX} hideFooterSelectedRowCount />
    </Box>
  )
}

export default observer(CrewCatalog)
