const accordionList = document.querySelectorAll('.js-accordion .title');
const activeClass = 'ativo';

function activeAccordion() {
    const detail = document.querySelectorAll('.js-accordion .title::after');
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
    detail.forEach((item) => {
        item.classList.toggle(activeClass);
    })
}

accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion);
});