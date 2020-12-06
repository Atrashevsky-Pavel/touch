import "core-js";
import './styles/style.css';
let checkInput = false;
document.getElementById('input').
    addEventListener('click', () => {
    if(!checkInput) {
        checkInput = true;
        document.getElementById('input').value = '';
    }
});
document.getElementById('button').
    addEventListener('click', () => {
     const result = document.getElementById('input').value;
     console.log(result);
     if(result && checkInput) {
         call(result);
     }
});

function call (valueInput) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: valueInput,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => alert('Успешно: ' + json.body))
        .catch((error) => alert(error))
}
