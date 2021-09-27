const counter = document.querySelector('#counter')

document.querySelector('#add').addEventListener('click', function name(params) {
    // counter.innerHTML =  +(counter.innerHTML) + 1;
    counter.innerHTML = Number(counter.innerHTML) + 1
})

document.querySelector('#sub').addEventListener('click', function name(params) {
    // counter.innerHTML =  +(counter.innerHTML) + 1;
    counter.innerHTML = Number(counter.innerHTML) - 1
})