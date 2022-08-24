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