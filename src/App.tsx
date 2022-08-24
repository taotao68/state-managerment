import { atom, useAtom } from "jotai";
import DarkMode from "./DarkMode";



// 创建原子数据,atom定义一个原子化状态
const countAtom = atom(1); //商品个数
const priceAtom = atom(67); //商品价格
// 利用派生来做，计算总价,一个api就可以使用
const totalAtom = atom((get) => get(countAtom) * get(priceAtom));

// 定义一个子组件
const Price = () => {
  const [price] = useAtom(priceAtom);
  return <div>商品单价{price}</div>;
};

const Total = () => {
  const [count, setCount] = useAtom(countAtom);
  // const [total] = useAtom(totalAtom);
  // 如果是只是用一个state（value)的值来展示，自己不需要修改的话,下面的写法是一样的
  const total=useAtom(totalAtom)
  return (
    <>
      <div>总价：{total}</div>
      <button onClick={()=>setCount(pre=>pre+1)}>商品数量{count}</button>
    </>
  );
};

const App=() =>{
  const [, setCount] = useAtom(countAtom);
  return (
    <div className="App">
      <div>
        <DarkMode/>
        <Price/>
        <Total/>
      </div>
    </div>
  );
}

export default App;
