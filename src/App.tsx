import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import AppFooter from './compontens/app-footer'
import AppHeader from './compontens/app-header'

import { Button } from 'antd'

import { router } from './router'
function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense>
        <div>{useRoutes(router)}</div>
      </Suspense>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <AppFooter />
    </div>
  )
}

export default App
