import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { RecommendWrapper } from './style'
import AreaHeaderV1 from '@/compontens/area-header-v1'

interface IProps {
  children?: ReactNode
}

const HotRecommend: React.FC<IProps> = () => {
  return (
    <RecommendWrapper className="HotRecommend">
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      />
    </RecommendWrapper>
  )
}

export default memo(HotRecommend)
