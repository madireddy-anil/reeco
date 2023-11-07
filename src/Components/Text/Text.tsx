import React from 'react'
import classNames from 'classnames'
import styles from './Text.module.css'

interface ITextProps {
  mode?: 'dark' | 'light'
  size?: 'default' | 'small' | 'xsmall' | 'xxsmall' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
  weight?: 'regular' | 'bold' | 'bolder' | 'thin' | 'lighter'
  number?: number
  isTextUppercase?: boolean
  color?: string
  className?: string
  label?: React.ReactNode
  style?: React.CSSProperties
  children?: React.ReactNode
}

const Text: React.FC<ITextProps> = ({ isTextUppercase, children, ...props }) => {
  const {
    mode = 'light',
    size = 'default',
    weight = 'regular',
    color = '',
    label = 'This is a paragraph.',
    className,
    number,
    style,
  } = props

  return (
    <span
      {...props}
      className={classNames(
        styles[weight],
        styles[color],
        styles[size],
        styles['Text'],
        styles['Text--' + mode],
        styles[className ? className : '']
      )}
      style={{
        color: color,
        fontSize: number ? `${number}px` : '',
        textTransform: isTextUppercase ? 'uppercase' : 'none',
        ...style,
      }}
    >
      {children || label}
    </span>
  )
}
export { Text }
export type { ITextProps }
