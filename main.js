import { loadDefaultJapaneseParser } from "budoux";

window.addEventListener('DOMContentLoaded', () => {
  const parser = loadDefaultJapaneseParser();

  // parse
  // const elText = document.querySelector('.js-budoux-array');
  // const text = elText.textContent;
  // const array = parser.parse(text);
  // console.log(array);

  // translateHTMLString
  // const elText = document.querySelector('.js-budoux-html');
  // const text = elText.textContent;
  // elText.textContent = "";
  // elText.innerHTML = parser.translateHTMLString(text);
  // const a = parser.translateHTMLString(text);
  // console.log(a);

  // applyElement
  const elTextArray = Array.from(document.querySelectorAll('.js-budoux'));
  for(let i = 0; i < elTextArray.length; i++) {
    parser.applyElement(elTextArray[i]);
  }
});