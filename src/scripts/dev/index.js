const btn = document.querySelector('.btn');
btn.addEventListener('click', searchSubstring);

function searchSubstring(e) {
    e.preventDefault();
    let count = 0;
    const input = document.querySelector('.input');
    const userValue = input.value.toLowerCase().trim();
    input.value = '';
    const list = document.querySelectorAll('.russia');
    if (userValue !== '') {
        list.forEach(elem => {
            elem.innerHTML = elem.innerText.replace(/\s/g, '');
            if (elem.innerText.toLowerCase().search(userValue) !== -1) {
                count++;
                elem.innerHTML = markSubstring(
                    elem.innerText,
                    elem.innerText.toLowerCase().search(userValue),
                    userValue.length
                );
            }

        });
        const parent = document.querySelector('#result');
        count !== 0 ? parent.innerHTML = 'По запросу |' + '<b>' + userValue + '</b>' + '|     найдено совпадений: ' + count : parent.innerHTML = 'Ничего не найдено';
    }
}

function markSubstring(elem, position, lenUserVal) {
    return (
        elem.slice(0, position) +
        '<mark>' +
        elem.slice(position, position + lenUserVal) +
        '</mark>' +
        elem.slice(position + lenUserVal)
    );
}