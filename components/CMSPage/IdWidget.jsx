import { nanoid } from 'nanoid/non-secure'

const IdControl = ({ value, onChange }) => {
  if (!value) {
    value = nanoid(10)
    onChange(value)
  }
  return (
    <div style={{ display: 'flex', padding: '10px' }}>
      <input
        type="text"
        key="uuid-input"
        name="uuid-input"
        value={value}
        disabled
      />
    </div>
  )
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
