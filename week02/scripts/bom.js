const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

const li = document.createElement('li');

const deleteButton = document.createElement('button');
li.textContent = input.value;

deleteButton.textContent = '❌';
li.append(deleteButton);
li.append(li);

button.addEventListener('click', function() {
        if(input.value.trim() !== '')
    {
        
    }
});

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
    input.value = "";
    input.focus();

});

