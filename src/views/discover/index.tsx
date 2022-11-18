import React, { memo, Suspense, useEffect } from 'react'
import type { ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'
import hyRequest from '@/server'

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
      <div>Discover</div>
      <button>
        <Link to="/discover/recommend">recommend</Link>
      </button>
      <button>
        <Link to="/discover/ranking">ranking</Link>
      </button>
      <button>
        <Link to="/discover/songs">songs</Link>
      </button>
      <button>
        <Link to="/discover/djradio">djradio</Link>
      </button>
      <button>
        <Link to="/discover/artist">artist</Link>
      </button>
      <button>
        <Link to="/discover/album">album</Link>
      </button>
      <Suspense>
        <Outlet></Outlet>
      </Suspense>
    </div>
  )
}

export default memo(Discover)
