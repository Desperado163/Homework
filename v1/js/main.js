function scrollToSection() {
    const width = window.innerWidth;

    if (width <= 376) {
        document.getElementById('mini-games').scrollIntoView({ behavior: 'smooth' });
    } else {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    }
}

const marquee = document.getElementById('marquee');
marquee.innerHTML += marquee.innerHTML;
