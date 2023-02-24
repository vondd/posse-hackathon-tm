// ふみや
const art = document.querySelector('.art');
const ALLarts = document.querySelectorAll('.art')
art.addEventListener('click',()=>{

  ALLarts.forEach((e)=>{
    e.classList.add('blue')
  })
})

const snack = document.querySelector('.snack');
const ALLsnacks = document.querySelectorAll('.snack')
snack.addEventListener('click',()=>{
  ALLsnacks.forEach((e)=>{
    e.classList.add('blue2')
  })
})

const baske = document.querySelector('.baske');
const ALLbasket = document.querySelectorAll('.baske')
baske.addEventListener('click',()=>{
  ALLbasket.forEach((e)=>{
    e.classList.add('blue3')
  })
})

const kaizyo = document.querySelector('.kaizyo')

kaizyo.addEventListener('click',()=>{
  ALLbasket.forEach((e)=>{
    e.classList.remove('blue3')
  })
  ALLarts.forEach((e)=>{
    e.classList.remove('blue')
  })
  ALLsnacks.forEach((e)=>{
    e.classList.remove('blue2')
  })
})