import { PieChart } from "@mui/x-charts/PieChart"
import { useDrawingArea } from "@mui/x-charts/hooks"
import { styled } from "@mui/material/styles"
import { ReactNode, useMemo } from "react"
import { Box } from "@mui/material"
import styles from "./Insights.module.css"

const size = {
  height: 200,
}

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}))

const PieCenterLabel = ({ children }: { children: ReactNode }) => {
  const { width, height, left, top } = useDrawingArea()
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  )
}

const Insights = ({ data }: any) => {
  const insightsData: any = useMemo(() => {
    return Object.entries(data).map(([key, value]) => ({
      value: value,
      label: key,
    }))
  }, [data])

  console.info(data)

  return (
    <Box className={styles.InsightsRoot}>
      {insightsData.length > 0 && (
        <PieChart series={[{ data: insightsData, innerRadius: 80 }]} {...size}>
          <PieCenterLabel>Charges</PieCenterLabel>
        </PieChart>
      )}
    </Box>
  )
}

export default Insights
