/*https://jsonplaceholder.typicode.com/todos
с помощью fetch взять список дел по ссылке выше, обрезать (slice) до 10-15, 
потом с помощью map привести элементы к нужному нам виду, и использовать этот массив для вывода в 
нашем проекте ту ду листа.
*/

function getTodoList() {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            // if (response.status === 200) {
            return response.json();
            // } else {
            //     return response.status;
            // }
        })
        .then((result) => {
            if (Array.isArray(result)) {
                const todos = result.slice(0, 15);
                displayTodoList(todos);
            } else {
                console.log('Received result is not an array');
            }
        })
        .catch((response) => {
            if (response.status !== 200) {
                alert('Something went wrong:(');
            }

        });
}

function displayTodoList(todos) {
    const todoList = todos.map(elem => {
        const item = document.createElement('li');
        item.textContent = elem.title;
        return item;
    });

    // Очищаем текущий список перед добавлением новых элементов
    const olElement = document.querySelector('ol');
    olElement.innerHTML = '';
    olElement.append(...todoList);
}
getTodoList();