const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
yesBtn.addEventListener('click', () => {
    question.innerHTML = "Let's Walk Together and Call It a Date.✨";
    question.style.opacity = 1;
    yesBtn.innerHTML = 'Ofcourse';
    yesBtn.addEventListener('click', () => {
        yesBtn.style.display = 'none';
    // Change the text after 1 second
    setTimeout(() => {
        question.style.opacity = 0;
        setTimeout(() => {
          question.innerHTML = 'OKKKAAYYY!!! 😁✨';
          question.style.opacity = 1;
        }, 250);
      }, 500);
    });
    noBtn.style.display = 'none';
    icon.style.display = 'none';
  

  });
noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});