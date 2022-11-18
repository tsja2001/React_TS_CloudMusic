import { Navigate, RouteObject } from 'react-router-dom'
import React, { lazy } from 'react'
// import Discover from '@/views/discover'
// import Focus from '@/views/focus'
// import Mine from '@/views/mine'
// import Download from '@/views/download'

const Discover = lazy(() => import('@/views/discover'))
const Recommend = lazy(
  () => import('@/views/discover/c-views/recommend')
)
const Ranking = lazy(
  () => import('@/views/discover/c-views/ranking')
)
const Songs = lazy(
  () => import('@/views/discover/c-views/songs')
)
const Djradio = lazy(
  () => import('@/views/discover/c-views/djradio')
)
const Artist = lazy(
  () => import('@/views/discover/c-views/artist')
)
const Album = lazy(
  () => import('@/views/discover/c-views/album')
)

const Focus = lazy(() => import('@/views/focus'))
const Mine = lazy(() => import('@/views/mine'))
const Download = lazy(() => import('@/views/download'))

export const router: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/download',
    element: <Download />
  }
]
