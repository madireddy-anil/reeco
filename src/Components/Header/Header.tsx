import React from 'react'
import style from './Header.module.css'
import { HeaderContent, PageHeader } from '../PageHeader/PageHeader'
import { Text } from '../Text/Text'
import { Dropdown, Icon } from 'semantic-ui-react'

function Header() {
  return (
    <div className={style['header-wrapper']}>
      <PageHeader>
        <HeaderContent.LeftSide>
          {/* <HeaderContent.Title>Clients List</HeaderContent.Title> */}
          <HeaderContent.LeftSide>
            <Text size='xxlarge' weight='bold' style={{ marginTop: '-2px' }}>
              Reeco
            </Text>
          </HeaderContent.LeftSide>
          <HeaderContent.LeftSide>Stores</HeaderContent.LeftSide>
          <HeaderContent.LeftSide>Orders</HeaderContent.LeftSide>
          <HeaderContent.LeftSide>Analytics</HeaderContent.LeftSide>
        </HeaderContent.LeftSide>
        <HeaderContent.RightSide>
          <HeaderContent.RightSide>{<Icon size='large' name='cart arrow down' />}</HeaderContent.RightSide>
          <HeaderContent.RightSide>
            <Dropdown text='Hello, Test'>
              <Dropdown.Menu>
                <Dropdown.Item text='Profile' />
                <Dropdown.Item text='Setting' />
              </Dropdown.Menu>
            </Dropdown>
          </HeaderContent.RightSide>
        </HeaderContent.RightSide>
      </PageHeader>
    </div>
  )
}

export default Header
