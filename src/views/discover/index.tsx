import React, { memo, Suspense, useEffect } from 'react'
import type { ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'
import hyRequest from '@/server'
import NavBar from './c-cpns/nav-bar'

interface IProps {
  children?: ReactNode
}

const Discover: React.FC<IProps> = () => {
  useEffect(() => {
    hyRequest.get({ url: '/banner' }).then((res) => {
      console.log('[ res ] >', res)
    })
  }, [])

  return (
    <div className="Discover">
      <NavBar></NavBar>

      <Suspense>
        <Outlet></Outlet>
      </Suspense>
    </div>
  )
}

export default memo(Discover)
