$(document).ready(function() {

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

    $(".newsletter-form").submit(function(e) {
        e.preventDefault();
        let status = $('.info');
        var fname = $('.newsletter-fname').val();
        var email = $('.newsletter-email').val();

        if (validateEmail(email)) {
            if (fname !== "") {
                dataLayer.push({
                    'event': 'newsletter_signup',
                    'first_name': fname,
                    'email': email
                  });
                  $('.newsletter-fname').val("");
                  $('.newsletter-email').val("");
                  status.text("Signup complete");
                  status.css("color", "green");
            }else {
                status.text(" Please input a name :(");
            status.css("color", "red");
            }
          } else {
            status.text(" Please input a valid email :(");
            status.css("color", "red");
          }
    });

    $("#gform").submit(function(e) {
        e.preventDefault();
        let status = $(".form-status");
        var honeypot = $('#gform input[name=honeypot]').val();
        var email = $('#gform input[name=email]').val();
        var formData = $('#gform').serialize();

        if (validateEmail(email)) {
            if (honeypot == "") {
                $.ajax({
                    type: 'POST',
                    url: 'https://script.google.com/macros/s/AKfycbxEYKh0IGILUXfzmwbfmM28Dja935LpR_hgbYLc/exec',
                    data: formData,
                    dataType: 'json'
                }).done(function(data) {
                    console.log(data);
                    status.text("Message has been sent. I will reply you shortly");
                    status.css("color", "green");
                })
            }else {
            status.text(" Please input a name :(");
            status.css("color", "red");
            }
          } else {
            status.text(" Please input a valid email :(");
            status.css("color", "red");
          }
    });

    

    

});

$( window ).on( "load", function() {
    
 });