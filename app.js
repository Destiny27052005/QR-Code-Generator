const input = document.querySelector('input');
const generate = document.querySelector('#generate');
const img = document.querySelector('#code');
const form = document.querySelector('form');
const empty = document.querySelector('p');

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

generate.addEventListener('click', () => {
    if (input.value === "") {
        img.style.display = 'none';
        empty.style.display = 'block';
        setTimeout(() => {
            empty.style.display = 'none';
        }, 3000)
    } else {
        img.style.display = 'block';
        const text = input.value
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    }
    setTimeout(() => {
        input.value = null;
    }, 2000)

})