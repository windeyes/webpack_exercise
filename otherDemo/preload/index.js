window.onload = function(){
  let btn1 = document.querySelector('.btn1')
  let data = 0
  btn1.onclick = function(){
    import(/*webpackChunkName:'test',webpackPrefetch:true*/'./plus.js').then(({plus})=>{
     console.log( data = plus(data,1));
    })
  }
}