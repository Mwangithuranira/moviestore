document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('#movies ul');
    const forms = document.forms;
    const addform = forms['form'];

    // delete movies

    list.addEventListener("click", (e) => {
        if (e.target.className == "button") {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    })

    // add movies

    addform.addEventListener('submit', (e) => {
        e.preventDefault();

        //create elements
        const value = document.getElementById('text').value;
        const li = document.createElement('li');
        const movieName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        //add text content
        movieName.textContent = value;
        deleteBtn.textContent = 'DELETE';

        //add classes
        movieName.classList.add('name');
        deleteBtn.classList.add('button');

        //append to DOM
        li.appendChild(movieName);
        li.appendChild(deleteBtn);
        list.appendChild(li);
        //clear inputs
        document.getElementById('text').value = '';

    })
})
