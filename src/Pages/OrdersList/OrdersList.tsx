import { Button, Icon, Search } from 'semantic-ui-react'
import { addProduct, resetAll } from '../../config/reecoSlice'
import TableExampleBasic from './Table'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../redux/hooks/store'
import style from './OrdersList.module.css'
import { useState } from 'react'

function OrdersList() {
  const dispatch = useDispatch()
  const { products } = useAppSelector(state => state.reeco)
  const [key] = useState(12424235123)

  const date = new Date()

  let day = date.getDate()
  let month = date.getMonth()
  let year = date.getFullYear()
  let dateI = `${day}-${month}-${year}`

  return (
    <div className={style['orderList-wrapper']}>
      <div className={style['orderList-header']}>
        <div>
          {' '}
          <Search size='large' placeholder='Search...' className={style['re-search']} />
        </div>
        <div>
          <Button basic color='red' onClick={() => dispatch(resetAll())}>
            Delete All
          </Button>
          <span style={{ marginLeft: '25px' }} />
          <Button
            basic
            color='green'
            onClick={() => {
              let product: any = {
                id: Math.floor(Math.random() * key),
                date: dateI,
                productName: 'Lorem Ipsum',
                brand: 'brand 0001',
                price: '10',
                quantity: '1',
                total: '10',
                status: '',
              }

              dispatch(addProduct(product))
            }}
          >
            Add Item
          </Button>
          <span style={{ marginLeft: '30px' }}>
            <Icon size='large' name='print' />
          </span>
        </div>
      </div>
      <TableExampleBasic products={products} />
    </div>
  )
}

export default OrdersList
