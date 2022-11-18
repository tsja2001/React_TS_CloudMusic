import React, { memo, PureComponent } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  name: string
}

interface IState {
  age: number
}

export class Demo extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      age: 111
    }
  }

  render(): React.ReactNode {
    return (
      <div>
        <h1>Demo1</h1>
        <h2>age: {this.state.age}</h2>
      </div>
    )
  }
}

export class Demo2 extends PureComponent<IProps, IState> {
  wuhu = 'ddd'
  state = {
    age: 123
  }

  render(): React.ReactNode {
    return (
      <div>
        <h1>Demo1</h1>
        <h2>age: {this.state.age}</h2>
      </div>
    )
  }
}

// const Demo: React.FC<IProps> = () => {
//   return (
//     <div className="Demo">
//       <h1>Demo</h1>
//     </div>
//   )
// }
// export default memo(Demo)
