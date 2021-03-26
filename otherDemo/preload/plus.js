console.log('plus文件被加载了');
export function plus(){
  return [].reduce.call(arguments,(a,b)=>a+b)
}