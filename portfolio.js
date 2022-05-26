var home=document.querySelector('.home')
var about=document.querySelector('.about')
var mySkills=document.querySelector('.mySkills')
var navLinkA=document.querySelector('.navlinkA')
var navLinkB=document.querySelector('.navlinkB')
var navLinkC=document.querySelector('.navlinkC')
var LinkA=document.querySelector('.linkA')
var LinkB=document.querySelector('.linkB')
var LinkC=document.querySelector('.linkC')
let worksSlider=document.querySelectorAll('.all_det')
let worksSlid=document.querySelectorAll('.all_de')
let newS=document.querySelectorAll('.new_s')
let minusBut=document.querySelector('.minus')
let plusBut=document.querySelector('.plus')
var butOne=document.querySelector(".but")
var sideParent=document.querySelector('.side_parent')
var indivNew=document.querySelector('.indiv_new')
var coverStyle=document.querySelector('.cover_style')

// console.log(worksSlider)


//plus and minus buttons
var counter=000
console.log(counter)
 plusBut.addEventListener('click', ()=>{
    counter+=100
    if(counter>300){
      counter=0
    }
    console.log(counter)
    worksSlider.forEach(
      item=>item.style.transform=`translate(-${counter}%)`
      )
 })

 minusBut.addEventListener('click', ()=>{
   counter-=100
   if(counter<0){
     counter=300
   }
   console.log(counter)
   worksSlider.forEach(
    item=>item.style.transform=`translate(-${counter}%)`
    )

 })
var count=0
 //testimonial section
 function slide(){
   
  count+=100
    if(count>300){
      count=0
    }
    console.log(count)
    worksSlid.forEach(
      item=>item.style.transform=`translate(-${count}%)`
      )

 }
 setInterval(slide, 3000)


worksSlider.forEach((item)=>{
  item.addEventListener('mouseover', ()=>{
    item.children[0].style.display="flex"
    // item.children[0].classList.toggle('disp')
})
item.addEventListener('mouseout', ()=>{
  item.children[0].style.display="none"
  // item.children[0].classList.toggle('disp')
}
)

})

// worksSlid.forEach((item)=>{
//   item.addEventListener('mouseover', ()=>{
//     item.children[0].style.display="flex"
//     // item.children[0].classList.toggle('disp')
// })
// item.addEventListener('mouseout', ()=>{
//   item.children[0].style.display="none"
//   // item.children[0].classList.toggle('disp')
// }
// )

// })


// navbar button
butOne.addEventListener('click', function(){
      var details=document.querySelector(".butlist")
      if( details.style.display==="block"){
        details.style.display="none"
      }else if( details.style.display="none"){
        details.style.display="block"
      }
    })
var details=document.querySelector(".butlist")
// butOne.addEventListener('click',()=>{
//   // var details=document.querySelector(".butlist")
//   details.style.display="block"
// })
details.addEventListener('mouseup',()=>{
  var details=document.querySelector(".butlist")
  details.style.display="none"
})

    //windows onload
    window.addEventListener('load', ()=>{
      home.classList.remove('invisible')
      mySkills.classList.add('invisible')
      about.classList.add('invisible')
      navLinkA.style.backgroundColor="maroon"
      navLinkB.style.backgroundColor="inherit"
      navLinkC.style.backgroundColor="inherit"
      console.log("hello world")
      sideParent.style.backgroundColor="none"
    })




//large screen functionality
navLinkA.addEventListener('click', ()=>{
  home.classList.remove('invisible')
  mySkills.classList.add('invisible')
  about.classList.add('invisible')
  navLinkA.style.backgroundColor="maroon"
  navLinkB.style.backgroundColor="inherit"
  navLinkC.style.backgroundColor="inherit"
  sideParent.style.backgroundColor=""
})

navLinkB.addEventListener('click', ()=>{
   home.classList.add('invisible')
   mySkills.classList.add('invisible')
   about.classList.remove('invisible')
   navLinkB.style.backgroundColor="maroon"
   navLinkA.style.backgroundColor="inherit"
   navLinkC.style.backgroundColor="inherit"
   sideParent.style.backgroundColor="rgb(2, 17, 17)"
})

navLinkC.addEventListener('click',()=>{
  home.classList.add('invisible')
  about.classList.add('invisible')
  mySkills.classList.remove('invisible')
  navLinkC.style.backgroundColor="maroon"
  navLinkB.style.backgroundColor="inherit"
  navLinkA.style.backgroundColor="inherit"
  sideParent.style.backgroundColor="rgb(6, 1, 31)"
})



// mobile links functionality
LinkA.addEventListener('click', ()=>{
  home.classList.remove('invisible')
  mySkills.classList.add('invisible')
  about.classList.add('invisible')
  LinkA.style.backgroundColor="maroon"
  LinkB.style.backgroundColor="inherit"
  LinkC.style.backgroundColor="inherit"
})

LinkB.addEventListener('click', ()=>{
 home.classList.add('invisible')
   mySkills.classList.add('invisible')
   about.classList.remove('invisible')
   LinkB.style.backgroundColor="maroon"
   LinkA.style.backgroundColor="inherit"
   LinkC.style.backgroundColor="inherit"
})

LinkC.addEventListener('click', ()=>{
  home.classList.add('invisible')
  about.classList.add('invisible')
  mySkills.classList.remove('invisible')
  LinkC.style.backgroundColor="maroon"
  LinkB.style.backgroundColor="inherit"
  LinkA.style.backgroundColor="inherit"
})