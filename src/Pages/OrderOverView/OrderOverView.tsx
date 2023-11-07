import style from './OrderOverView.module.css'
import { Text } from '../../Components/Text/Text'
import { Grid } from 'semantic-ui-react'
import { useAppSelector } from '../../redux/hooks/store'

function OrderOverView() {
  const { products } = useAppSelector(state => state.reeco)

  const countTotal = (products: any) => {
    let sum = 0
    products.map((product: any) => {
      return (sum = sum + Number(product.total))
    })
    return sum
  }

  const arr = [
    { name: 'Supplier', value: products[0]?.productName ?? '--' },
    { name: 'Shipping date', value: products[0]?.date ?? '--' },
    { name: 'Total', value: countTotal(products) ? countTotal(products) : '--' },
    {
      name: 'Category',
      value:
        products?.length && products[0]?.total >= 1 ? (
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '-24px' }}>
            <img
              src={process.env.PUBLIC_URL + `images/test1.png`}
              alt='aa'
              style={{ marginLeft: '10%', width: '30px', height: '30px' }}
            />
            <img
              src={process.env.PUBLIC_URL + `images/test2.jpg`}
              alt='aa'
              style={{ marginLeft: '10%', width: '30px', height: '30px' }}
            />
          </div>
        ) : (
          '--'
        ),
    },
    { name: 'Department', value: products[0]?.brand ?? '--' },
    { name: 'Status', value: products[0]?.status ?? 'Waiting for approval' },
  ]
  return (
    <div className={style['overView-wrapper']}>
      <Grid columns={6} divided>
        <Grid.Row>
          {arr.map(item => {
            return (
              <Grid.Column>
                <Text style={{ marginLeft: '20px' }}>{item.name}</Text>
                <br />
                <br />
                <Text style={{ marginLeft: '20px' }} weight='bold'>
                  {item.value ?? '--'}
                </Text>
              </Grid.Column>
            )
          })}
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default OrderOverView
