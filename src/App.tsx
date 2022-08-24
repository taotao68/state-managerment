import { useState } from 'react'
import {atom,useAtom} from 'jotai'

// 创建原子数据,atom定义一个原子化状态
const countAtom=atom(0)

// 定义一个子组件
const Display=()=>{
  const [count]=useAtom(countAtom)
  return (
    <>
    <div>展示区域{count}</div>
    </>
  )
}

function App() {
  const [, setCount] = useAtom(countAtom)
  return (
    <div className="App">
      <div>
        <Display/>
       <button className='' onClick={()=>setCount(pre=>pre+1)}>btn</button>
      </div>
    </div>
  )
}

export default App
