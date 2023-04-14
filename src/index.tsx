import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProvider } from '@shopify/polaris'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
/**
 * See https://polaris.shopify.com/components/utilities/app-provider#using-translations
 * for info on locals and the i18n prop
 */
root.render(
  <React.StrictMode>
    <AppProvider
      i18n={{
        Polaris: {
          ResourceList: {
            sortingLabel: 'Sort by',
            defaultItemSingular: 'item',
            defaultItemPlural: 'items',
            showing: 'Showing {itemsCount} {resource}',
            Item: {
              viewItem: 'View details for {itemName}',
            },
          },
          Common: {
            checkbox: 'checkbox',
          },
        },
      }}
    >
      <App />
    </AppProvider>
  </React.StrictMode>,
)
