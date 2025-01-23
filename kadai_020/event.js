const Btn = document.getElementById('btn');
const textElement = document.getElementById('text');

Btn.addEventListener('click' , () => {
  console.log('ボタンをクリックしました');
  textElement.textContent = 'ボタンをクリックしました';
});