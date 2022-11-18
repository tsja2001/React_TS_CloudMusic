import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import headerTitle from '@/assets/data/header_titles.json'
import { Input, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import {
  HeaderLeft,
  HeaderRight,
  HeaderWapper
} from './style'

interface IProps {
  children?: ReactNode
}

const AppHeader: React.FC<IProps> = () => {
  const showItem = (item: any) => {
    if (item.type === 'path') {
      return (
        <NavLink
          to={item.link}
          className={({ isActive }) =>
            isActive ? 'active' : ''
          }
        >
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    } else {
      return (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
        >
          {item.title}
        </a>
      )
    }
  }

  return (
    <HeaderWapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitle.map((item) => (
              <div key={item.title} className="item">
                {showItem(item)}
              </div>
            ))}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            size="large"
            placeholder="歌名|歌手|专辑"
            prefix={<SearchOutlined />}
          ></Input>
          <button className="center">个人中心</button>
          <p>登陆</p>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWapper>
  )
}

export default memo(AppHeader)
