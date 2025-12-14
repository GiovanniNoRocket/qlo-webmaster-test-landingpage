document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('submit', function(e) {
    if (e.target.id === 'leadCaptureForm') {
      e.preventDefault();

      const fullName = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const privacyConsent = document.getElementById('privacyConsent').checked;
      const termsConsent = document.getElementById('termsConsent').checked;

      if (!fullName || !email || !phone) {
        alert('Please fill in all required fields (Full Name, Email, and Phone are required).');
        return;
      }

      if (!privacyConsent || !termsConsent) {
        alert('Please agree to the privacy policy and terms of service to proceed.');
        return;
      }

      alert(`Thank you, ${fullName}! Your information has been submitted. A Legal Shield attorney will contact you shortly at ${email} or ${phone}.`);
      e.target.reset();
    }
  });
});