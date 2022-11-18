import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { discoverMenu } from '@/assets/data/local_data'
import { NavWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const NavBar: React.FC<IProps> = () => {
  return (
    <NavWrapper className="">
      <div className="nav wrap-v1">
        {discoverMenu.map((item) => (
          <div className="item" key={item.title}>
            <NavLink to={item.link}>{item.title}</NavLink>
          </div>
        ))}
      </div>
    </NavWrapper>
  )
}

export default memo(NavBar)
