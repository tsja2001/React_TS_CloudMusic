import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import AppFooter from './compontens/app-footer'
import AppHeader from './compontens/app-header'
import { router } from './router'
function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense>
        <div>{useRoutes(router)}</div>
      </Suspense>
      <AppFooter />
    </div>
  )
}

export default App
