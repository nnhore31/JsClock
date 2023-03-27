let da = new Date();
console.log(da);
// console.log('hello');
setInterval(()=>{
   let d= new Date();
   let hs=d.getHours();
   let ms=d.getMinutes();
   let ss=d.getSeconds();
   
   let ht=30*hs+(ms/2);
   let mt=6*ms;
   let st=6*ss;
   
   h.style.transform=`rotate(${ht}deg)`;
   m.style.transform=`rotate(${mt}deg)`;
   s.style.transform=`rotate(${st}deg)`;
   
},1000);