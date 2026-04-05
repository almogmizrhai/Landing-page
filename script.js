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

// Form submit
function submitForm(formId, successId) {
    const form = document.getElementById(formId)
    const inputs = form.querySelectorAll('input, select')
    let valid = true
    inputs.forEach(i => { if (!i.value) valid = false; })
        if (!valid) { alert('אנא מלא/י את כל השדות'); return }
    form.querySelectorAll('input, select').forEach(i => i.style.opacity = '0.5')
    form.querySelector('button').style.opacity = '0.5'
    document.getElementById(successId).style.display = 'block'
}

