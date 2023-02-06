let myForm = document.querySelector('myForm');
let text = document.querySelector('#text');
let elements = myForm.elements;
let str = elements.str;
let addText = elements.addText;
let sumBtn = elements.sum;
let sumOutput = document.querySelector('#sumOutput');
let surname = document.querySelector('#surname');
let userName = document.querySelector('#name');
let secondName = document.querySelector('#secondName');
let questBtn = elements.quest;

// Дан инпут и абзац. При клике на кнопку запишите значение инпута в конец текста абзаца.
addText.addEventListener('click', function (evt) {
    evt.preventDefault();
    text.append('${str.value}');
})

// Дан инпут. В него вводится число. При клике на кнопку найдите сумму цифр этого числа.
sumBtn.addEventListener('click' , function (evt) {
    evt.preventDefault();
    let mas = str.value.split('');
    let sum = 0;
    mas.forEach((el) => {
        sum += Number(el);
    })
    sumOutput.append(sum);
})

// В инпут вводится ФИО через пробел. При клике на кнопку запишите фамилию, имя и отчество в анкету.
questBtn.addeventListener('click', (evt) => {
    evt.preventDefault();
    let mas = str.value.split(' ');
    surname.append(mas[0]);
    userName.append(mas[1]);
    secondName.append(mas[2]);

});

// Дан инпут. В него вводится текст. При клике на кнопку узнайте количество слов в этом тексте.



