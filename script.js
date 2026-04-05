// main j

// active cards
function toggleService(card) {
    const isActive = card.classList.contains('active')

    document.querySelectorAll('.service-card')
            .forEach(c => c.classList.remove('active'))

    if (!isActive) {
        card.classList.add('active')
    }
}

// Carousel
function scrollCarousel(dir) {
    const track = document.getElementById('carousel')
    track.scrollBy({ left: dir * -280, behavior: 'smooth' })
}

