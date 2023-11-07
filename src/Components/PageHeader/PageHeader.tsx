import React from 'react'

import { Text } from '../Text/Text'
import style from './PageHeader.module.css'
import { Props } from '../../types'

/**
 * Header Component for Pages
 */
const PageHeader: React.FC<Props> = ({ children }) => {
  return <div className={style['page-header']}>{children}</div>
}

/**
 * Position Content on the Left Side of Header
 */
const LeftSide: React.FC<Props> = ({ children }): JSX.Element => (
  <div className={style['page-header__leftSide']}>{children}</div>
)

/**
 * Position Content on the Right Side of Header
 */
const RightSide: React.FC<Props> = ({ children }): JSX.Element => (
  <div className={style['page-header__rightSide']}>{children}</div>
)

interface TitleProps extends Props {
  subtitle?: string
}
/**
 * Title for the Header Component
 */
const Title: React.FC<TitleProps> = ({ subtitle, children }): JSX.Element => (
  <div className={style['page-header__title-wrapper']}>
    <div className={style['page-header__title']}>{children}</div>
    {subtitle && (
      <>
        <Text weight='regular' size='medium'>
          {subtitle}
        </Text>
      </>
    )}
  </div>
)

const HeaderContent = {
  Title,
  LeftSide,
  RightSide,
}

export { PageHeader, HeaderContent }
