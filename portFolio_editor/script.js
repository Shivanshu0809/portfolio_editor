function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj = document.querySelector(".value");
  animateValue(obj, 0, 1113, 10000);

  function animateValue(obj2, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj2.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj2 = document.querySelector(".value2");
  animateValue(obj2, 0, 1661, 10000);


  var img =document.getElementById('EditImg');
  var sliders =['images/HeroSec.jpg','images/img1.jpg','images/img2.jpg','images/img4.jpg','images/img5.jpg','images/img3.jpg','images/img6.jpg'];
  var Start=0;

  function slider(){
    if(Start<sliders.length){
      Start=Start+1;
    }
    else{
      Start=1;
    }
    img.innerHTML="<img src="+sliders[Start-1]+">";
    console.log(img);
  }
  setInterval(slider,1500);

 const menu= document.querySelector(".hamburger");
 const bgShadow =document.querySelector("#MobileMenubar");
 const MenuElement =document.querySelector(".menu");
 const list =document.querySelector(".ul");
//  const heroSec =document.querySelector(".hero");

var temp=0;
 menu.addEventListener("click",()=>{
  if(temp==1){
    bgShadow.style.height="0vh";
    MenuElement.style.display="none"
    list.style.opacity="0"

    temp=0;
  }
  else{
    bgShadow.style.height="56vh";
    MenuElement.style.display="block"
    list.style.opacity="1"
  
    temp=1;
  }
 
 })
