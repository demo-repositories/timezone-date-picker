import {ChangeEvent} from 'react'
import {Stack} from '@sanity/ui'
import {set, unset} from 'sanity'
import {DateTime} from 'luxon'

export const TimezoneDatePicker = (props) => {
  const {elementProps, onChange, value = {}} = props

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: string,
  ) => {
    const eventValue = event.currentTarget.value
    const newValue = value
    if (eventValue) {
      newValue[field] = eventValue
      const dt = DateTime.fromISO(newValue.raw, {zone: newValue.zoneName})
      newValue['iso'] = dt.toISO()
    }
    onChange(eventValue ? set(newValue) : unset())
  }

  return (
    <Stack space={2}>
      <input
        type="datetime-local"
        style={{padding: '7px'}}
        onChange={(e) => handleChange(e, 'raw')}
        value={value.raw}
      />
      <select
        style={{padding: '7px'}}
        onChange={(e) => handleChange(e, 'zoneName')}
        value={value.zoneName}
      >
        <option value={'America/Los_Angeles'}>Los Angeles</option>
        <option value={'America/New_York'}>New York</option>
      </select>
    </Stack>
  )
}
