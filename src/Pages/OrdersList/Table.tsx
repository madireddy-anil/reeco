import React, { useState } from 'react'
import { Button, Icon, Table } from 'semantic-ui-react'
import style from '../index.module.css'
import StatusModal from './StatusModal'
import { useDispatch } from 'react-redux'
import { updateProductStatus } from '../../config/reecoSlice'
import { useAppSelector } from '../../redux/hooks/store'
import { Text } from '../../Components/Text/Text'

export let product: any = {
  id: '1',
  productName: 'Lorem Ipsum',
  brand: 'brand 0001',
  price: '10',
  quantity: '10*10',
  total: '10',
  status: '',
}

const TableExampleBasic: React.FC<any> = ({ products }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState<boolean>(false)
  const [type, modalType] = useState<string>('')
  const [selectedStatus, setSelectedStatus] = useState<string | undefined>('')
  const reeco = useAppSelector(state => state.reeco)
  const spacer = <span style={{ marginLeft: '10px' }} />

  const [selectedId, setSelectedId] = useState<any>()

  const handleClose = (prd: any, index: any) => {
    setSelectedId(prd.id)
  }

  const handleCheck = (prd: any, index: any) => {
    setSelectedId(prd.id)
    setSelectedStatus('Approved')
  }

  const onUpdateStatus = (e: any) => {
    if (e.target.innerText === 'Update') {
      const updatedRecords = reeco.products.map((record: any) => {
        if (record.id === selectedId) {
          // Create a new object with the updated status
          return { ...record, status: selectedStatus }
        }
        return record
      })
      dispatch(updateProductStatus(updatedRecords))
    }
  }

  const getStatusColor = (status: any) => {
    let statusName: any = ''
    switch (status) {
      case 'Missing':
        statusName = 'orange'
        break
      case 'Approved':
        statusName = 'green'
        break
      case 'Missing - Urgent':
        statusName = 'red'
        break
      default:
        break
    }
    return statusName
  }

  return (
    <>
      <Table basic>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Product Name</Table.HeaderCell>
            <Table.HeaderCell>Brand</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Total</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {products.map((product: any, index: any) => {
          return (
            <Table.Body key={product.id}>
              <Table.Row>
                <Table.Cell>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={process.env.PUBLIC_URL + `images/test2.jpg`}
                      alt='aa'
                      style={{ width: '60px', height: '60px' }}
                    />

                    {product.productName}
                  </div>
                </Table.Cell>
                <Table.Cell>{product.brand}</Table.Cell>
                <Table.Cell>{product.price}</Table.Cell>
                <Table.Cell>{product.quantity}</Table.Cell>
                <Table.Cell>{product.total}</Table.Cell>
                <Table.Cell textAlign='right'>
                  <div className={style['product-status']}>
                    {product?.status && (
                      <Button circular color={getStatusColor(product.status)}>
                        {product?.status}
                      </Button>
                    )}
                    {spacer}
                    <span style={{ marginTop: '6px' }}>
                      <Icon
                        size='large'
                        name='checkmark'
                        onClick={() => {
                          setOpen(true)
                          modalType('check')
                          handleCheck(product, index)
                        }}
                        color={product.status === 'Approved' ? 'green' : undefined}
                      />
                    </span>
                    {spacer}
                    <span style={{ marginTop: '6px' }}>
                      <Icon
                        size='large'
                        name='close'
                        onClick={() => {
                          setOpen(true)
                          modalType('close')
                          handleClose(product, index)
                        }}
                        color={product.status !== 'Approved' ? getStatusColor(product.status) : undefined}
                      />
                    </span>
                    {spacer}
                    <div style={{ marginTop: '9px' }}>
                      <Text weight='bold'>Edit</Text>
                    </div>
                  </div>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          )
        })}
      </Table>

      <StatusModal
        open={open}
        type={type}
        selectedStatus={selectedStatus}
        disable={selectedStatus ? false : true}
        callback={(v: boolean) => {
          setOpen(v)
          setSelectedStatus(undefined)
        }}
        onChangeR01={(e: any) => setSelectedStatus(e)}
        onChangeR02={(e: any) => setSelectedStatus(e)}
        onUpdateStatus={(e: any) => selectedStatus && onUpdateStatus(e)}
      />
      {products.length < 1 && <div style={{ textAlign: 'center', fontWeight: 'bold' }}>No data found!</div>}
    </>
  )
}

export default TableExampleBasic
