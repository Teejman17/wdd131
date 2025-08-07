const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

const li = document.createElement('li');

const deleteButton = document.createElement('button');
li.textContent = input.value;

deleteButton.textContent = '❌';
li.append(deleteButton);
li.append(li);

button.addEventListener('click', () {
    if (input.value.trim() !== '') { // make sure the input is not empty
        displayList(input.value); // call the function that outputs the submitted chapter
        chaptersArray.push(input.value); // add the chapter to the array
        setChapterList(); // update the localStorage with the new array
        input.value = ""; // clear the input 
        input.focus(); // set the focus back to the input
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

function addChaptetList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();

}

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
    input.value = "";
    input.focus();

});

