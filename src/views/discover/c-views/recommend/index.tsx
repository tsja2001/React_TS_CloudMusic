import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useMyDispatch } from '@/store'
import {
  fetchBannerDataAction,
  fetchHotRecommend,
  fetchNewAlbum
} from './store/recommend'
import TopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import { RecommendWrapper } from './style'
import NewAlbum from './c-cpns/new-album'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  // 发起数据
  const dispatch = useMyDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommend())
    dispatch(fetchNewAlbum())
  }, [])

  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
        </div>
        <div className="right"></div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
