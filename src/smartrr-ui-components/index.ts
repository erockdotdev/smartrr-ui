import { AppProvider as PolarisProvider } from '@shopify/polaris'
import '@shopify/polaris/build/esm/styles.css'

// Providers
import { StyleProvider as PolarisStyleProvider } from './providers/StyleProvider'

// Actions
import { Button } from './actions/Button'
import { Tag } from './actions/Tag'

// Feedback Indicators
import { Banner } from './feedback-indicators/Banner'

// inputs
import { TextField } from './inputs/TextField'

export { Button, Tag, TextField, Banner, PolarisProvider, PolarisStyleProvider }
