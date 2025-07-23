function scrollToSection() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

const marquee = document.getElementById('marquee');
marquee.innerHTML += marquee.innerHTML;
