document.getElementById('submitBtn').addEventListener('click', function () {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const q1 = parseInt(document.getElementById('q1').value);
    const q2 = parseInt(document.getElementById('q2').value);
    const q3 = parseInt(document.getElementById('q3').value);
    const q4 = parseInt(document.getElementById('q4').value);
    const q5 = parseInt(document.getElementById('q5').value);

    if (!validateEmail(email)) {
        alert('Please enter a valid email.');
        return;
    }
    if (!validatePhone(phone)) {
        alert('Please enter a valid phone number.');
        return;
    }
    if (!address) {
        alert('Address is required.');
        return;
    }

    const formData = {
        firstName,
        lastName,
        email,
        phone,
        address,
        ratings: { q1, q2, q3, q4, q5 },
    };

    console.log(formData);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>First Name: ${firstName}</p>
        <p>Last Name: ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>
        <p>Ratings: ${q1}, ${q2}, ${q3}, ${q4}, ${q5}</p>
    `;

    const average = (q1 + q2 + q3 + q4 + q5) / 5;
    const averageClass = average <= 3.4 ? 'red' : average <= 7.1 ? 'orange' : 'green';
    resultDiv.innerHTML += `<p class="average ${averageClass}">${firstName} ${lastName} (${email}): ${average.toFixed(2)}</p>`;
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^\+?[0-9]{7,15}$/;
    return phoneRegex.test(phone);
}