const color=document.getElementById("color");




let n = (Math.random() * 0xfffff * 1000000).toString(16);
let randomcolor="#"+n.slice(0,6);




function changeColor(){
  const n = (Math.random() * 0xfffff * 1000000).toString(16);
  const randomcolor="#"+n.slice(0,6);
  const color=document.getElementById("color");
color.innerHTML=randomcolor;
const h1=document.getElementsByTagName('h1');
h1.innerHTML=randomcolor;


  document.body.style.backgroundColor = randomcolor;
}
