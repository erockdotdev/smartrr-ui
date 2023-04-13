import { ButtonProps, Button as PolarisButton } from '@shopify/polaris'

export const Button = ({ children }: ButtonProps) => {
  return <PolarisButton>{children}</PolarisButton>
}
