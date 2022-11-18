import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const AppHeader: React.FC<IProps> = () => {
  return (
    <div className="AppHeader">
      <div>
        <h2>appHeader</h2>
        <button>
          <Link to="/discover">discover</Link>
        </button>
        <button>
          <Link to="/focus">focus</Link>
        </button>
        <button>
          <Link to="/mine">mine</Link>
        </button>
        <button>
          <Link to="/download">download</Link>
        </button>
      </div>
    </div>
  )
}

export default memo(AppHeader)
