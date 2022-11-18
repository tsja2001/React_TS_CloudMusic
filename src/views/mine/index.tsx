import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Mine: React.FC<IProps> = () => {
  return (
    <div className="Mine">
      <div>Mine</div>
    </div>
  )
}

export default memo(Mine)
