const numberOfBook = document.querySelectorAll('.book');
const pageBackground = document.querySelector('body');
const titles = document.querySelectorAll('h2');
const advertisement = document.querySelector('.adv');
const chapter = document.querySelectorAll('li');


numberOfBook[0].before(numberOfBook[1]);
numberOfBook[5].before(numberOfBook[3]);
numberOfBook[5].after(numberOfBook[2]);

pageBackground.style.backgroundImage =  'url(./image/you-dont-know-js.jpg)';

titles[4].innerHTML = '<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes" target="_blank">Книга 3. this и Прототипы Объектов</a>';

advertisement.remove();

chapter[3].after(chapter[6]);
chapter[6].after(chapter[8]);
chapter[9].after(chapter[2]);
chapter[49].before(chapter[55]);
chapter[52].before(chapter[48]);
chapter[54].before(chapter[51]);

chapter[25].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');



console.log(chapter);






