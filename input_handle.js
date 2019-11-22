// wrong email input handle
email.onblur = function() {
    if (!email.value.includes('@')) { // not email
      email.classList.add('invalid');
      error.innerHTML = 'Please enter a correct email.'
    }
  };

email.onfocus = function() {
    if (this.classList.contains('invalid')) {

      this.classList.remove('invalid');
      error.innerHTML = "";
    }
  };


  

  phonenum.onblur = function() {
    // make sure the user input 10 digits phone number
    var phoneRegex = /^[0-9]{10}$/; 
    var isTrue = phoneRegex.test(phonenum.value);

    if (!isTrue) { // not phone
        phonenum.classList.add('invalid');
        no.innerHTML = 'Please enter a 10 digits phone number.'
      }
    };

// if pass then remove the red box 
  phonenum.onfocus = function() {
    if (this.classList.contains('invalid')) {

      this.classList.remove('invalid');
      no.innerHTML = "";
    }
  };
