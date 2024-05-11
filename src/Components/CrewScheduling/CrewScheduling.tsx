import { Box, Button } from "@mui/material"
import { observer } from "mobx-react"
import { FormProvider, useFieldArray, useForm } from "react-hook-form"
import Dropdown from "../Common/Dropdown"
import { useEffect, useMemo, useState } from "react"
import AppStore from "../../Utils/Stores/AppStore"
import TimePicker from "../Common/TimePicker"
import styles from "./CrewScheduling.module.css"
import dayjs from "dayjs"
import { toJS } from "mobx"
import Receipt from "../Receipt/Receipt"
import Insights from "../Insights/Insights"

const CrewScheduling = () => {
  const ScheduleForm = useForm()
  const [receipt, setReceipt] = useState<any>({})

  const { handleSubmit, control, watch } = ScheduleForm

  const { fields, append } = useFieldArray<any>({
    name: "jobs",
    control,
  })

  useEffect(() => {
    if (fields.length === 0) append({ CrewName: "", StartTime: dayjs(), EndTime: dayjs() })
  }, [])

  const CrewNames = useMemo(() => {
    return AppStore.crewData.map((x) => ({
      label: x.class,
      value: x.class,
    }))
  }, [AppStore.crewData])

  const DDForm = {
    label: "Crew Name",
    options: CrewNames,
    defValue: "",
  }

  const StartTime = {
    label: "Start Time",
  }

  const EndTime = {
    label: "End Time",
  }

  const onClickAddJob = () => {
    append({ CrewName: "", StartTime: dayjs(), EndTime: dayjs() })
  }

  const onSubmit = (data: any) => {
    // console.dir("Jobs :", data)

    const crewRates = AppStore.crewData
    const totalCosts: Record<string, number> = {}

    crewRates.forEach((rate) => {
      totalCosts[rate.class] = 0
    })

    data.jobs.forEach((crew: any) => {
      const { CrewName, StartTime, EndTime } = crew
      const rate = crewRates.find((rate: any) => rate.class === CrewName)

      if (rate) {
        const hoursWorked = Math.max(0, EndTime.diff(StartTime, "hour", true))
        const cost = hoursWorked * rate.ratePerHour
        totalCosts[CrewName] += parseFloat(cost.toFixed(3))
      }
    })

    setReceipt(totalCosts)
    console.info("Data :", totalCosts)
  }

  return (
    <Box className={styles.ScheduleRoot}>
      <FormProvider {...ScheduleForm}>
        <Box>Job Sheet Generator</Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box className={styles.Form}>
            {fields.map((field, index: number) => {
              return (
                <Box display={"flex"} columnGap={"10px"} mb={"10px"} key={field.id}>
                  <Dropdown formKey={`jobs.${index}.CrewName`} form={DDForm} />
                  <TimePicker formKey={`jobs.${index}.StartTime`} form={StartTime} />
                  <TimePicker formKey={`jobs.${index}.EndTime`} form={EndTime} minTime={watch(`jobs.${index}.StartTime`)} />
                </Box>
              )
            })}
          </Box>
          <Box display={"flex"} justifyContent={"space-between"} mt={"25px"}>
            <Button onClick={onClickAddJob}>Add Job</Button>
            <Button type="submit">Calculate</Button>
          </Box>
        </form>
      </FormProvider>
      {Object.keys(receipt).length > 0 && (
        <Box>
          <Receipt data={receipt} />
          <Insights data={receipt} />
        </Box>
      )}
    </Box>
  )
}

export default observer(CrewScheduling)
