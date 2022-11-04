import { ButtonProps } from './button'

export function variantTypeHover(props: ButtonProps) {
  const { variant } = props
  if (variant === 'filled') {
    return `{colors.${props.color}.400}`
  }
  if (variant === 'light') {
    return `{colors.${props.color}.200}`
  }
  if (variant === 'outline') {
    return `{colors.${props.color}.100}`
  }
  if (variant === 'subtle') {
    return `{colors.${props.color}.100}`
  }
  return {}
}

export function getCssColors(props: ButtonProps) {
  if (props.disabled) {
    return {
      color: '{colors.text-disabled}',
      backgroundColor: '{colors.disabled}',
      cursor: 'not-allowed'
    }
  }

  return {}
}
