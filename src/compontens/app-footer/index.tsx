import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const AppFooter: React.FC<IProps> = () => {
  return (
    <div className="AppFooter">
      <div>AppFooter</div>
    </div>
  )
}

export default memo(AppFooter)
