import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { Controller, useFormContext } from "react-hook-form"

type TRHFForm = {
  formKey: string
  form: {
    label: string
    defValue: string | number
    options: Array<any>
  }
}

const Dropdown = ({ formKey, form }: TRHFForm) => {
  const { control } = useFormContext()

  return (
    <FormControl fullWidth>
      <InputLabel id={`${formKey}_Select_Label`}>
        {form.label}
      </InputLabel>

      <Controller
        key={formKey}
        defaultValue={form?.defValue}
        name={formKey}
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { ref, ...fields } }) => {
          return (
            <Select labelId={`${formKey}_Select_Label`} id={`${formKey}_Select`} label={form?.label} fullWidth inputRef={ref} {...fields}>
              {form?.options?.map((option: any, idx: number) => (
                <MenuItem value={option.value ?? option} key={option.value + "_" + idx}>
                  {option.label ?? option}
                </MenuItem>
              ))}
              {!form?.options?.length ? <MenuItem value={" "}>{"No Data Found"}</MenuItem> : null}
            </Select>
          )
        }}
      />
    </FormControl>
  )
}

export default Dropdown
