import React, { memo, useRef, useState } from 'react'
import type { ReactNode, ElementRef } from 'react'
import { myShallowEqual, useMySelector } from '@/store'
import {
  BannerControl,
  BannerLeft,
  BannerRight,
  BannerWrapper
} from './style'
import { Carousel } from 'antd'

interface IProps {
  children?: ReactNode
}

const TopBanner: React.FC<IProps> = () => {
  const { banners } = useMySelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    myShallowEqual
  )

  const bannerRef =
    useRef<ElementRef<typeof Carousel>>(null)

  const nextHandler = () => {
    bannerRef.current?.next()
  }
  const prevHandler = () => {
    bannerRef.current?.prev()
  }

  const [currentIndex, changeCurrentIndex] = useState(0)

  const imgChangeHandler = (from: number, to: number) => {
    changeCurrentIndex(to)
  }
  let bgImgUrl
  if (banners[currentIndex]) {
    bgImgUrl = banners[currentIndex].imageUrl
    bgImgUrl = bgImgUrl + '?imageView&blur=40x20'
  }

  return (
    <BannerWrapper
      style={{
        background: `url('${bgImgUrl}') center center / 6000px`
      }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            fade={true}
            ref={bannerRef}
            beforeChange={imgChangeHandler}
          >
            {banners.map((item) => (
              <div className="banner-item" key={item.url}>
                <img
                  className="image"
                  src={item.imageUrl}
                  alt={item.typeTitle}
                />
              </div>
            ))}
          </Carousel>
        </BannerLeft>
        <BannerRight />
        <BannerControl>
          <button
            className="btn left"
            onClick={prevHandler}
          ></button>
          <button
            className="btn right"
            onClick={nextHandler}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
