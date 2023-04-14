import '@shopify/polaris/build/esm/styles.css'
import { ReactNode } from 'react'

export const StyleProvider = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>
}
