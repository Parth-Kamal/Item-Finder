document.getElementById('contactOption').addEventListener('change', function() {
    const contactDetailsDiv = document.getElementById('contactDetails');
    contactDetailsDiv.innerHTML = '';  // Clear previous inputs

    const selectedOption = this.value;

    let inputField;
    switch (selectedOption) {
        case 'phone':
            inputField = '<label for="phoneNumber">Phone/WhatsApp Number:</label><input type="tel" id="phoneNumber" name="phoneNumber" required>';
            break;
        case 'email':
            inputField = '<label for="email">Email ID:</label><input type="email" id="email" name="email" required>';
            break;
        case 'socialMedia':
            inputField = '<label for="socialMediaHandle">Social Media Handle (e.g., Instagram, Twitter):</label><input type="text" id="socialMediaHandle" name="socialMediaHandle" required>';
            break;
    }

    contactDetailsDiv.innerHTML = inputField;
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const guardianName = document.getElementById('guardianName').value;
    const parentPhone = document.getElementById('parentPhone').value;
    const contactOption = document.getElementById('contactOption').value;
    let contactDetail;

    switch (contactOption) {
        case 'phone':
            contactDetail = document.getElementById('phoneNumber').value;
            break;
        case 'email':
            contactDetail = document.getElementById('email').value;
            break;
        case 'socialMedia':
            contactDetail = document.getElementById('socialMediaHandle').value;
            break;
    }

    // Create a URL with query parameters containing the user's details
    const qrData = new URLSearchParams({
        name,
        guardianName,
        parentPhone,
        contactOption,
        contactDetail
    });

    // Redirect to the QR page with encoded details
    window.location.href = `qrpage.html?${qrData.toString()}`;
});


