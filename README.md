状态库的学习
1.jotai
2.zustand
3.valtio
4.Xstate

jotai的详细学习：
主要是用atom,useAtom这两个api来实现的
import { atom, useAtom } from "jotai";
// 创建原子数据,atom定义一个原子化状态
const countAtom = atom(1); //商品个数
const priceAtom = atom(67); //商品价格
// 利用派生来做，计算总价,一个api就可以使用
const totalAtom = atom((get) => get(countAtom) * get(priceAtom));

<!-- value值和set方法是可以不用同时写的 -->
 const [count, setCount] = useAtom(countAtom);
  // const [total] = useAtom(totalAtom);
  // 如果是只是用一个state（value)的值来展示，自己不需要修改的话,下面的写法是一样的
  const total=useAtom(totalAtom)

  如果是只写set方法的话，value用逗号隔开就行
  const [, setCount] = useAtom(countAtom);

  利用其中的一个插件  来实现全局的黑暗模式和白天模式
  // 这个是插件是用来切换黑白模式的，很简单的api
import {atomWithStorage} from 'jotai/utils'
import { useAtom } from 'jotai'
const darkModeAtom=atomWithStorage('darkMode',false)

import { changeTheme } from './theme'

const DarkMode=()=>{
    const [darkMode,setDarkMode]=useAtom(darkModeAtom)
return (
    <>
    <div>{darkMode?'dark':'light'}mode</div>
    <button className='p-2 border-2 border-solid border-sky-400 rounded-lg' onClick={()=>setDarkMode(pre=>changeTheme(pre))}>toggle theme</button>
    </>
)
}

export default DarkMode

在写一个hook来控制黑暗或者白天
也就是动态的往html上挂载class或者删除class
export const changeTheme = (isDarkMode: boolean) => {
  !isDarkMode
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark");
  return !isDarkMode
};

还需要在tailwind.config.js中配置加入如下代码：
 darkMode:'class',

 index.html中写的class
 <!DOCTYPE html>
<html lang="en" class="h-full">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body class="h-full dark:bg-slate-800 dark:text-slate-200">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>