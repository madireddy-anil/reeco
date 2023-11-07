import React from 'react'
import style from './OrderNumberCard.module.css'
import { HeaderContent, PageHeader } from '../../Components/PageHeader/PageHeader'
import { Text } from '../../Components/Text/Text'
import { Button } from 'semantic-ui-react'
import { useAppSelector } from '../../redux/hooks/store'

function OrderNumberCard() {
  const { products } = useAppSelector(state => state.reeco)
  return (
    <div className={style['orderNoCard-wrapper']}>
      <PageHeader>
        <HeaderContent.LeftSide>
          <HeaderContent.LeftSide>
            <div>
              Orders: <span style={{ textDecoration: 'underline' }}> {products?.length ? products[0]?.id : '--'}</span>
              <br />
              <div className={style['order-no']}>
                <Text size='xxlarge' weight='bold'>
                  Order {products?.length ? products[0]?.id : '--'}
                </Text>
              </div>
            </div>
          </HeaderContent.LeftSide>
        </HeaderContent.LeftSide>
        <HeaderContent.RightSide>
          <HeaderContent.RightSide>
            <Button className={style['custom-btn']} circular>
              Back
            </Button>{' '}
            <Button circular positive>
              Approve Order
            </Button>
          </HeaderContent.RightSide>
        </HeaderContent.RightSide>
      </PageHeader>
    </div>
  )
}

export default OrderNumberCard
