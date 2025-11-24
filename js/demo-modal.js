// ===== DEMO MODAL SCRIPT =====
const modalOverlay = document.getElementById('modalOverlay');
const demoForm = document.getElementById('demoForm');
const successMessage = document.getElementById('successMessage');
const openDemoBtn = document.getElementById('openDemoBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const closeSuccessBtn = document.getElementById('closeSuccessBtn');

// Open demo modal
function openDemoModal(event) {
    if (event) event.preventDefault();
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close demo modal
function closeDemoModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Reset form after closing
    setTimeout(() => {
        demoForm.style.display = 'block';
        successMessage.classList.remove('active');
        demoForm.reset();
    }, 300);
}

// Event listeners voor buttons
if (openDemoBtn) {
    openDemoBtn.addEventListener('click', openDemoModal);
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeDemoModal);
}

if (closeSuccessBtn) {
    closeSuccessBtn.addEventListener('click', closeDemoModal);
}

// Close modal when clicking on overlay (not on modal itself)
modalOverlay.addEventListener('click', function(event) {
    if (event.target === modalOverlay) {
        closeDemoModal();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeDemoModal();
    }
});

// Form submission
demoForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(demoForm);
    const organisatie = formData.get('organisatie');
    const naam = formData.get('naam');
    const email = formData.get('email');
    const telefoon = formData.get('telefoon');

    // Validate required fields
    let isValid = true;
    const requiredFields = demoForm.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('error');
            isValid = false;
        } else {
            field.classList.remove('error');
        }
    });

    if (!isValid) {
        alert('Vul alle verplichte velden in.');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email').classList.add('error');
        alert('Vul een geldig e-mailadres in.');
        return;
    }

    // Verstuur data naar backend
    fetch('/send-demo-request.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            organisatie,
            naam,
            email,
            telefoon: telefoon || 'Niet opgegeven'
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Hide form, show success message
            demoForm.style.display = 'none';
            successMessage.classList.add('active');

            // Fill in confirmation details
            document.getElementById('confirmNaam').textContent = naam;
            document.getElementById('confirmEmail').textContent = email;
            
            // Add phone if provided
            if (telefoon) {
                document.getElementById('confirmTelefoonText').textContent = ' of ' + telefoon;
            } else {
                document.getElementById('confirmTelefoonText').textContent = '';
            }
        } else {
            alert('Er is een fout opgetreden: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Er is iets misgegaan bij het verzenden. Probeer het later opnieuw of neem direct contact op via info@infomaatje.org');
    });
});

// Remove error styling on input
const formInputs = demoForm.querySelectorAll('input');
formInputs.forEach(input => {
    input.addEventListener('input', function() {
        this.classList.remove('error');
    });
});