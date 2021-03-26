import (/* webpackChunkName: 'test' */'./first')
.then(({plus})=>{
  console.log(plus(22,33,44,55,77));
})
.catch((err)=>{
  console.log(err);
})
import {mul} from './second'
console.log(mul(22,2));