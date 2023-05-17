import { nanoid } from 'nanoid/non-secure'

const IdControl = ({ value, onChange }) => {
  if (!value) {
    value = nanoid(10)
    onChange(value)
  }
  return (
    <div
      style={{
        display: 'flex',
        padding: '10px',
      }}
    >
      <input
        type="text"
        key="uuid-input"
        name="uuid-input"
        value={value}
        disabled={true}
        style={{
          backgroundColor: 'transparent',
          fontFamily: 'monospace',
        }}
      />
    </div>
  )
}

const Widget = {
  name: 'id-widget',
  controlComponent: IdControl,
  previewComponent: null,
}

export default Widget
