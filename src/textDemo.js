// function *gen(x){
//   var index = 1
//   var ccc;
//   // while(true){
//   //   yield index++
//   // }
//   ccc = (yield index++)
//   index--
// }
// let it = gen(10)
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
import "./text.css";
import './text1.less'
import texthr from './texthr'
import texthr2 from './texthr2'

texthr()
texthr2()
let myfn = ()=>{
  console.log(myFn);
}
if (module.hot) {
  module.hot.accept('./texthr.js', function() {
    // 对更新过的 library 模块做些事情...
    texthr()
  });
  module.hot.accept('./texthr2.js', function() {
    // 对更新过的 library 模块做些事情...
    texthr2()
  });
}
console.log(process.env.NODE_ENV);