const header = document.getElementsByTagName('h1');
const h4 = document.getElementsByTagName('h4');
console.log

header[0].addEventListener('click', () =>{
    header[0].innerText = 'Åh fan!'
});

h4[0].addEventListener('mouseover', () => {
    h4[0].style.backgroundColor = 'hotpink'
})

h4[0].addEventListener('mouseleave', () => {
    h4[0].style.backgroundColor = 'transparent'
})