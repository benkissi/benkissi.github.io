$(document).ready(function() {

    var reviewWidgetTitle = $(".kudobuzz_neptune_widget_modal_header_title");
    console.log(reviewWidgetTitle.val());

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

    $(".newsletter-form").submit(function(e) {
        e.preventDefault();

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
    })

    var status = $('.info');

    

});

$( window ).on( "load", function() { 
    $(".kudobuzz_neptune_widget_modal_header_title").load(function() {
        console.log(reviewWidgetTitle.innerHTML);
    })
 });