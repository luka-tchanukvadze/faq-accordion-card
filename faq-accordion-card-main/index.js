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
  const arrow1 = document.querySelector('.arrow1')
  const arrow2 = document.querySelector('.arrow2')
  const arrow3 = document.querySelector('.arrow3')
  const arrow4 = document.querySelector('.arrow4')
  const arrow5 = document.querySelector('.arrow5')
  let isTextAdded = false
  let originalStyle = null

  function addText(className, text){
    let shortcut = document.querySelector(`.${className}`)
    let divText = document.createElement('div')
    divText.setAttribute('class', 'div-text')
    divText.textContent = text
  
    shortcut.appendChild(divText)
    isTextAdded = true
    originalStyle = shortcut.parentElement.getAttribute('style')
    shortcut.parentElement.style.flexDirection = 'column'
  }

  function removeText(className){
    let shortcut = document.querySelector(`.${className}`)
    let divContainer = shortcut.nextElementSibling

    if(divContainer && divContainer.classList.contains('div-text')){
      shortcut.parentElement.removeChild(divContainer)
      isTextAdded = false

      shortcut.parentElement.setAttribute('style', shortcut.parentElement.dataset.originalStyle)
      delete shortcut.parentElement.dataset.originalStyle

    }
  }
  
  arrow1.addEventListener('click', () => {
    if(isTextAdded){
      removeText('num1 .to-add-text')
    } else{
      addText('num1', 
      'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
      )
    }
  })
  
  arrow2.addEventListener('click', () => {
    if(isTextAdded){
      removeText('num2 .to-add-text')
    } else{
      addText('num2', 
      'No more than 2GB. All files in your account must fit your allotted storage space.'
      )
    }
  })
  
  arrow3.addEventListener('click', () => {
    if(isTextAdded){
      removeText('num3 .to-add-text')
    } else{
      addText('num3', 
      'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
      )
    }
  })
  
  arrow4.addEventListener('click', () => {
    if(isTextAdded){
      removeText('num4 .to-add-text')
    } else{
      addText('num4', 
      "Yes! Send us a message and we’ll process your request no questions asked."
      )
    }
  })
  
  arrow5.addEventListener('click', () => {
    if(isTextAdded){
      removeText('num5 .to-add-text')
    } else{
      addText('num5', 
      'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
      )
    }
  })
})






