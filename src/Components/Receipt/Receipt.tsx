import { Box } from "@mui/material"
import styles from "./Receipt.module.css"
import { useMemo } from "react"

const Receipt = ({ data }: any) => {
  const total: any = useMemo(() => {
    return Object.values(data).reduce((acc: any, val: any) => acc + val, 0)
  }, [data])

  return (
    <Box className={styles.ReceiptRoot}>
      <Box className={styles.ReceiptBox}>
        <h2>Receipt</h2>
        {Object.keys(data).map((item, index) => (
          <Box className={styles.ReceiptItem} key={`Receipt_${index}`}>
            <span className={styles.Operator}>{item}</span>
            <span className={styles.Charges}>₹ {data[item].toFixed(2)}</span>
          </Box>
        ))}
        <Box className={styles.TotalRates}>
          <Box className={styles.ReceiptItem}>
            <span className={styles.Operator}>Total</span>
            <span className={styles.Charges}>₹ {total.toFixed(2)}</span>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Receipt
