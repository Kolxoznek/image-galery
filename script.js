const input = document.querySelector('.search__input');
const imageContainers = document.querySelectorAll('.image-container');
let str = ''
input.addEventListener('input', () => {
    str = input.value;
    getData();
})

async function getData() {
    const res = await fetch(`https://api.unsplash.com/search/photos?query=${str}&per_page=9&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`)
    const data = await res.json();
    console.log(data)
    fillImages(data)
}

function fillImages(data) {
    imageContainers.forEach((container, i) => {
        container.style.background = `url('${data.results[i].urls.regular}')`
    })
}
