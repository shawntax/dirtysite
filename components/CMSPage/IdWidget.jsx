import { nanoid } from 'nanoid/non-secure'
import { useCallback } from 'react'

const IdControl = ({ label, field, value, onChange }) => {
  return <input type="text" value={value ?? nanoid(10)} id="IdInput" disabled />
}

const IdPreview = ({ value }) => {
  return <span>{value}</span>
}

const Widget = {
  name: 'id-widget',
  controlComponent: IdControl,
  previewComponent: IdPreview,
}

export default Widget
