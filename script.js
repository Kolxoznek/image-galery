const input = document.querySelector('.search__input');
const imageContainer = document.querySelector('.grid');
const resetBtn = document.querySelector('.search__reset');
const emptyPlaceholder = document.createElement('h2');
emptyPlaceholder.classList.add('empty-placeholder');
emptyPlaceholder.textContent = 'По вашему запросу не найдено изображений.'
let str = 'winter'

async function getData() {
    const res = await fetch(`https://api.unsplash.com/search/photos?query=${str}&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`)
    const data = await res.json();

    if (data.results.length === 0) {
        imageContainer.append(emptyPlaceholder);
    } else {
        data.results.forEach((image) => {
            renderImage(`${image.urls.regular}`)
        })
    }
}

function renderImage(src) {
    const elem = document.createElement('div');
    elem.classList.add('image')
    elem.style.backgroundImage = `url('${src}')`;
    imageContainer.append(elem);
}

document.forms[0].addEventListener('submit', (e) => {
    e.preventDefault();
    str = document.forms[0].str.value;
    imageContainer.innerHTML = ''
    getData();
})

input.addEventListener('input', () => {
    if (input.value === '') {
        resetBtn.classList.add('hide')
    } else {
        resetBtn.classList.remove('hide')
    }
})

resetBtn.addEventListener('click', () =>  resetBtn.classList.add('hide'));

getData();