//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let trigger = true;
document.getElementsByClassName('button1').onclick = function () {
    if (trigger) {
        document.getElementById('text1').style.display = 'none';
    } else {
        document.getElementById('text1').style.display = 'block';
    }
    trigger = !trigger;
};

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let secrBotton = document.getElementById('button2');
secrBotton.onclick = function () {
    this.style.display = 'none';
};

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let inputedAge = document.forms.input_age;
inputedAge.onsubmit = function (e) {
    e.preventDefault();
    console.log(+this.age.value);
    if (input_age.age.value < 18) {
        alert('ВІК МЕНШЕ 18!')
    }
};

//- Создайте меню, которое раскрывается/сворачивается при клике

let menuCl = document.getElementsByClassName('menu')[0];
menuCl.onclick = function () {
    this.classList.toggle('click');
};

//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.

let commentList = [
    {title: 'lorem1', body:'lorem ipsum dolo sit ameti'},
    {title: 'lorem2', body:'lorem ipsum dolo sit ameti'},
    {title: 'lorem3', body:'lorem ipsum dolo sit ameti'},
    {title: 'lorem4', body:'lorem ipsum dolo sit ameti'},
    {title: 'lorem5', body:'lorem ipsum dolo sit ameti'}
]

//Вывести список комментариев в документ, каждый в своем блоке.
//Добавьте каждому комментарию по кнопке для сворачивания его body.

for (comment of commentList) {

    let commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    let title = document.createElement('h2');
    title.innerText = comment.title;
    let bodyComment = document.createElement('div');
    bodyComment.innerText = comment.body;
    let button = document.createElement('button');
    button.innerText = 'НАПИШІТЬ КОМЕНТАР';
    button.style.background = 'blue';
    button.onclick = function () {
        bodyComment.classList.toggle('iventClick')
    }

    commentDiv.append(title, bodyComment,button);
    document.body.appendChild(commentDiv);

}


