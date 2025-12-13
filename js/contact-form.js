document.getElementById('leadCaptureForm').addEventListener('submit', function(e) {
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const privacyConsent = document.getElementById('privacyConsent').checked;
  const termsConsent = document.getElementById('termsConsent').checked;

  if (!fullName || !email || !phone) {
    e.preventDefault();
    alert('Please fill in all required fields (Full Name, Email, and Phone are required).');
    return;
  }

  if (!privacyConsent || !termsConsent) {
    e.preventDefault();
    alert('Please agree to the privacy policy and terms of service to proceed.');
    return;
  }

  e.preventDefault();
  alert(`Thank you, ${fullName}! Your information has been submitted. A Legal Shield attorney will contact you shortly at ${email} or ${phone}.`);
  this.reset();
});