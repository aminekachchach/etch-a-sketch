const container = document.querySelector('.container')

const btnBlack = document.createElement('button');
const btnGray = document.createElement('button');
const btnRGB = document.createElement('button');
const btnSize = document.createElement('button');
const resetBtn = document.createElement('button');
const buttonsContainer = document.querySelector('.buttons');



function resizeBtn(){
  btnSize.textContent = 'Grid Size';
  btnSize.style.color = 'black';

  btnSize.addEventListener('click', () => {
    let user = prompt('Enter Desired Grid Size form 1 to 100');
    if(user === null || user < 1){
      reSet();
      gridMaker(16,16);
      blackColor();
      grayColor();
      RGBColor();
    }else{
      container.querySelectorAll('.box').forEach(box => box.remove());
      reSet();
      gridMaker(user,user);
      blackColor();
      grayColor();
      RGBColor();
    }
  });
  buttonsContainer.appendChild(btnSize).classList.add('btn');
}
resizeBtn();



function reSet(){
  resetBtn.textContent = 'Reset';
  resetBtn.style.color = 'black';
  resetBtn.addEventListener('click', () => {
    const boxes = container.querySelectorAll('.box');

    boxes.forEach(box => box.style.backgroundColor = "#F5DEC1");
  })
  buttonsContainer.appendChild(resetBtn).classList.add('btn');

};
reSet();


function gridMaker(col,row) {

  for(let i = 0; i < (row * col); i++){
      const div = document.createElement('div');
      div.style.border = '1px solid white';
      div.style.backgroundColor = '#F5DEC1';
      container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
      container.style.gridTemplateRows = `repeat(${row}, 1fr)`;

      container.appendChild(div).classList.add('box');
  } 

};

gridMaker(16,16);

function grayColor (){
  const boxes = container.querySelectorAll('.box');
  btnGray.textContent = 'Gray';
  btnGray.style.color = 'black';
  btnGray.addEventListener('click' , () => {
    boxes.forEach(box => box.addEventListener('mouseover', () => {
      let Rnum = Math.floor(Math.random() * 255);
      let GrayScale = `rgb(${Rnum},${Rnum},${Rnum})`
      box.style.background = GrayScale;
    }))
  })

  buttonsContainer.appendChild(btnGray).classList.add('btn');

}
grayColor();


function blackColor (){
  const boxes = container.querySelectorAll('.box');
  btnBlack.textContent = 'Black';
  btnBlack.style.color = 'black';
  btnBlack.addEventListener('click' , () => {
    boxes.forEach(box => box.addEventListener('mouseover', () => {
      box.style.background = 'black';
    }))
  })
  buttonsContainer.appendChild(btnBlack).classList.add('btn');
}
blackColor();

function RGBColor (){
  const boxes = container.querySelectorAll('.box');
  btnRGB.textContent = 'RGB';
  btnRGB.style.color = 'black';

  btnRGB.addEventListener('click' , () => {
    boxes.forEach(box => box.addEventListener('mouseover', () => {
      let Rnum1 = Math.floor(Math.random() * 256);
      let Rnum2 = Math.floor(Math.random() * 256);
      let Rnum3 = Math.floor(Math.random() * 256);

      let RGBScale = `rgb(${Rnum1},${Rnum2},${Rnum3})`
      box.style.background = RGBScale;
    }))
  })

  buttonsContainer.appendChild(btnRGB).classList.add('btn');

}
RGBColor();

