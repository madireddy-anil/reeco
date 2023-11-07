import React from 'react'
import { Modal, Radio } from 'semantic-ui-react'

const StatusModal: React.FC<any> = ({
  open,
  type,
  callback,
  onChangeR01,
  onChangeR02,
  selectedStatus,
  onUpdateStatus,
  disable,
}) => {
  return (
    <Modal
      open={open}
      size='mini'
      header={type === 'close' ? 'Select one option?' : 'Confirm'}
      content={
        <div>
          {type === 'close' ? (
            <div style={{ padding: '30px' }}>
              <Radio label='Missing' name='radioGroup' value={selectedStatus} onChange={() => onChangeR01('Missing')} />
              <br />
              <div style={{ height: '10px' }} />
              <Radio
                label='Missing - Urgent'
                name='radioGroup'
                value={selectedStatus}
                onChange={() => onChangeR02('Missing - Urgent')}
              />
            </div>
          ) : (
            <div style={{ padding: '30px' }}>Approve the product status</div>
          )}
        </div>
      }
      actions={['Close', { key: 'Confirm', content: 'Update', positive: true, disable: disable }]}
      onClose={() => callback(false)}
      onActionClick={onUpdateStatus}
    />
  )
}

export default StatusModal
