$(document).ready(function () {
   $('#accountForm').on('submit', function (e) {
       e.preventDefault();

       let name = $('#name').val().trim();
       let email = $('#email').val().trim();
       let phone = $('#phone').val().trim();
       let age = parseInt($('#age').val());
       let gender = $('#gender').val().trim();
       let address = $('#address').val().trim();

  
       if (name.length < 3 || name.length > 50) {
           alert('Name must be between 3 and 50 characters.');
           return;
       }
       if (email === '') {
           alert('Email is required.');
           return;
       }
       if (phone.length < 10 || phone.length > 14 || isNaN(phone)) {
           alert('Phone number must be between 10 and 14 digits.');
           return;
       }
       if (age < 18 || age > 120) {
           alert('Age must be between 18 and 120.');
           return;
       }
       if (gender.length < 4 || gender.length > 15) {
           alert('Gender must be between 4 and 15 characters.');
           return;
       }
       if (address.length > 50) {
           alert('Address cannot exceed 50 characters.');
           return;
       }

     
       $('#result').text('Form submitted successfully!');
       console.log({
           Name: name,
           Email: email,
           Phone: phone,
           Age: age,
           Gender: gender,
           Address: address
       });
   });
});
