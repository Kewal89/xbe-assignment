import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { Controller, useFormContext } from "react-hook-form"
import { LocalizationProvider, TimePicker as MUITimePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Dayjs } from "dayjs"

type TRHFForm = {
  formKey: string
  form: {
    label: string
  }
  minTime?: Dayjs
}

const TimePicker = ({ formKey, form, minTime }: TRHFForm) => {
  const { control } = useFormContext()

  return (
    <FormControl fullWidth>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          key={formKey}
          name={formKey}
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { ref, ...fields } }) => {
            return <MUITimePicker {...fields} inputRef={ref} label={form.label} minTime={minTime} />
          }}
        />
      </LocalizationProvider>
    </FormControl>
  )
}

export default TimePicker
