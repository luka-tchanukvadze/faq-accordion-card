const boxImg = document.querySelector('.box-img')
const womanImg = document.querySelector('.woman')
const mobileImg = document.querySelector('.woman-img')
const patternImg = document.querySelector('.pattern-img')
const gridContainer = document.querySelector('.container')
const title = document.querySelector('.title')
const right = document.querySelector('.right')
let originalGridColumns = window.getComputedStyle(gridContainer).gridTemplateColumns;
const arrow = document.querySelector('.arrow')

let x = window.matchMedia("(max-width: 50rem)")
myFunction(x)
x.addEventListener('change', myFunction)

function myFunction(x){

  if (x.matches){
    if(womanImg.src.includes('illustration-woman-online-desktop.svg')){
      womanImg.src = './images/illustration-woman-online-mobile.svg'
      mobileImg.style.overflow = 'unset'
      boxImg.style.display = 'none'
      patternImg.style.display = 'none'
      gridContainer.style.display = 'flex'
      gridContainer.style.flexDirection = 'column'
      gridContainer.style.padding = '0 2rem'
      gridContainer.style.paddingBottom = '2rem'
      right.style.display = 'flex'
      right.style.flexDirection = 'column'
      right.style.justifyContent = 'center'
      right.style.alignItems = 'center'
      womanImg.style.transform = 'none'
      
    }
    } else{
      womanImg.src = './images/illustration-woman-online-desktop.svg';
      boxImg.style.display = 'block';
      mobileImg.style.overflow = 'hidden'
      patternImg.style.display = 'block';
      gridContainer.style.gridTemplateColumns = originalGridColumns
      gridContainer.style.justifyItems = 'initial'
      gridContainer.style.padding = ''
      gridContainer.style.display = ''
      right.style.display = ''
      womanImg.style.transform = ''
    }

}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded event fired');
  const arrow1 = document.querySelector('.arrow1')
  const arrow2 = document.querySelector('.arrow2')
  const arrow3 = document.querySelector('.arrow3')
  const arrow4 = document.querySelector('.arrow4')
  const arrow5 = document.querySelector('.arrow5')
  let isTextAdded1 = false
  let isTextAdded2= false
  let isTextAdded3 = false
  let isTextAdded4 = false
  let isTextAdded5 = false

  let originalStyle = null
  

  function addText(className, text){
    console.log('addText called with className:', className);
    let shortcut = document.querySelector(`.${className}`)
    // let divContainer = shortcut.nextElementSibling
    let divContainer = shortcut.parentElement.nextElementSibling;

    if (shortcut.classList.contains('div-text')) {
      return
    } else{
      let divText = document.createElement('div')
      divText.setAttribute('class', 'div-text')
      divText.textContent = text
    
      shortcut.appendChild(divText)
      if (className === 'num1') {
        isTextAdded1 = true
      } else if (className === 'num2') {
        isTextAdded2 = true
      } else if (className === 'num3') {
        isTextAdded3 = true
      } else if (className === 'num4') {
        isTextAdded4 = true
      } else if (className === 'num5') {
        isTextAdded5 = true
      }
    }
    
  }

  function removeText(className) {
    console.log('removeText called with className:', className);
    let shortcut = document.querySelector(`.${className}`);
    let divContainer = shortcut.nextElementSibling;
  
    if (divContainer && divContainer.classList.contains('div-text')) {
      let divText = divContainer.querySelector('.div-text');
  
      if (divText) {
        shortcut.removeChild(divText);
      }
  
      if (className === 'num1') {
        isTextAdded1 = false;
      } else if (className === 'num2') {
        isTextAdded2 = false;
      } else if (className === 'num3') {
        isTextAdded3 = false;
      } else if (className === 'num4') {
        isTextAdded4 = false;
      } else if (className === 'num5') {
        isTextAdded5 = false;
      }
    }
  }
  
  
  
  arrow1.addEventListener('click', () => {
    if (isTextAdded1) {
      removeText('num1');
    } else {
      addText('num1', 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.');
    }
    isTextAdded1 = !isTextAdded1;
  });
  
  arrow2.addEventListener('click', () => {
    if (isTextAdded2) {
      removeText('num2');
    } else {
      addText('num2', 'No more than 2GB. All files in your account must fit your allotted storage space.');
    }
    isTextAdded2 = !isTextAdded2;
  });
  
  arrow3.addEventListener('click', () => {
    if (isTextAdded3) {
      removeText('num3');
    } else {
      addText('num3', 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.');
    }
    isTextAdded3 = !isTextAdded3;
  });
  
  arrow4.addEventListener('click', () => {
    if (isTextAdded4) {
      removeText('num4');
    } else {
      addText('num4', 'Yes! Send us a message and we’ll process your request no questions asked.');
    }
    isTextAdded4 = !isTextAdded4;
  });
  
  arrow5.addEventListener('click', () => {
    if (isTextAdded5) {
      removeText('num5');
    } else {
      addText('num5', 'Chat and email support is available 24/7. Phone lines are open during normal business hours.');
    }
    isTextAdded5 = !isTextAdded5;
  });
  
})






