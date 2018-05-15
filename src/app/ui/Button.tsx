import * as React from 'react'

interface IButtonProps {
  readonly text: string
  readonly disabled?: boolean
  readonly type?: string
  readonly onClick?: () => void
}

export const Button: React.SFC<IButtonProps> = ({ text, disabled, onClick, type }) =>
  <button type={type} disabled={disabled} onClick={onClick}>{text}</button>
