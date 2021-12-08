//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//    Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

document.getElementById('button').onclick = function () {
    let str1 = document.forms.textHeader.black.value;
    let str2 = document.forms.textHeader.white.value;
    let str3 = document.forms.textFooter.red.value;
    let str4 = document.forms.textFooter.pink.value;
    console.log(str1, str2, str3, str4);
};

//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//    При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//(Додатковачастина для завдання)

let form = document.forms['tabCreator'];
form.onsubmit = function (e) {
    e.preventDefault();
    let horizontal = +form.horizontal.value;
    let vertical = +form.vertical.value;
    let inform = form.inform.value;
    console.log(horizontal, vertical, inform);

    let table = document.createElement('table');

    for (let i = 0; i < horizontal; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < vertical; j++) {
            let td = document.createElement('td');
            td.innerText = inform;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
};

//- Сворити масив не цензцрних слів.
//    Сворити інпут текстового типу.
//    Якщо людина вводить слово і воно міститься в масиві не цензурних слів
//кинути алерт з попередженням.
//    Перевірку робити при натисканні на кнопку

let dirtyWords1 = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'];
let input = document.createElement('input');
let button = document.createElement('button');
button.innerText = 'КОНТРОЛЬ';
button.style.background = 'blue';
document.body.append(input, button);

button.addEventListener('click', function () {
    let valueInput = input.value;

    for (let word of dirtyWords1) {
        if (word === valueInput) {
            alert('ЦЕ НЕКУЛЬТУРНО!');
            input.value = '';
            return;
        }
    }
    if (valueInput) {
        alert('КОНТРОЛЬ УСПІШНО ПРОЙДЕНО!');
        input.value = '';
    }
})

//- Сворити масив не цензцрних слів.
//    Сворити інпут текстового типу.
//    Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//    Кинути алерт з попередженням у випадку якщо містить.
//    Перевірку робити при натисканні на кнопку

let dirtyWords2 = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'];

let input1 = document.createElement('input');
let button1 = document.createElement('button');
button1.innerText = 'КОНТРОЛЬ';
button1.style.background = 'violet';
document.body.append(input1, button1);

button1.addEventListener('click', function () {
     let wordD = input1.value;
    for (let element of dirtyWords2) {
        if (wordD.includes(element)) {
            alert('ЦЕ НЕКУЛЬТУРНО!');
            input1.value = '';
            return;
        } else {
            alert('КОНТРОЛЬ УСПІШНО ПРОЙДЕНО!');
            input1.value = '';
            return;
        }
    }
});




