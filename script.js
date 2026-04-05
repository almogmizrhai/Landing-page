// main js

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
    // console.log('form:', form)
    
    // בדיקת שדות
    const inputs = form.querySelectorAll('input, select')
    let valid = true
    inputs.forEach(i => { 
        // console.log('input:', i.value)
        if (!i.value) valid = false 
    })
    if (!valid) { alert('אנא מלא/י את כל השדות'); return }

    // טשטוש שדות
    inputs.forEach(i => i.style.opacity = '0.5')

    // ← מחפש את הכפתור לפי class במקום תג
    const btn = form.querySelector('.btn-submit')
    if (btn) btn.style.opacity = '0.5'

    // הצגת הודעת הצלחה
    const successEl = document.getElementById(successId)
    // console.log('successEl:', successEl)
    if (successEl) successEl.classList.add ('show')
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); })
    }, { threshold: 0.12 })
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))