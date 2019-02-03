const triggers = document.querySelectorAll('.cool > li');
const backgr = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => {
        if (this.classList.contains('trigger-enter')) {
            this.classList.add('trigger-enter-active');
        }
    }, 150);
    // shorter way
    // setTimeout(() => (this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);

    backgr.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left,
    }
    backgr.style.setProperty('width', `${coords.width}px`);
    backgr.style.setProperty('height', `${coords.height}px`);
    backgr.style.setProperty('transform', `translate( ${coords.left}px, ${coords.top}px )`);

}

function handleLeave() {
    this.classList.remove('trigger-enter','trigger-enter-active');
    backgr.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));