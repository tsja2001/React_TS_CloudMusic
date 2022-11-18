import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Focus: React.FC<IProps> = () => {
  return (
    <div className="Focus">
      <div>Focus</div>
    </div>
  )
}

export default memo(Focus)
