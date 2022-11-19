import React, { memo, useEffect } from 'react'
import type { ReactNode } from 'react'
import { RecommendWrapper } from './style'
import AreaHeaderV1 from '@/compontens/area-header-v1'
import { fetchHotRecommend } from '../../store/recommend'
import { useMyDispatch, useMySelector } from '@/store'
import SongMenuItem from '@/compontens/song-menu-item'

interface IProps {
  children?: ReactNode
}

const HotRecommend: React.FC<IProps> = () => {
  const dispatch = useMyDispatch()
  useEffect(() => {
    dispatch(fetchHotRecommend())
  }, [])

  const { hotRecommend } = useMySelector((state) => ({
    hotRecommend: state.recommend.hotRecommend
  }))

  return (
    <RecommendWrapper className="HotRecommend">
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      />
      <div className="recommend-list">
        {hotRecommend.map((item) => {
          return (
            <SongMenuItem key={item.id} itemData={item} />
          )
        })}
      </div>
    </RecommendWrapper>
  )
}

export default memo(HotRecommend)
