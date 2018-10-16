


function checkName() {
  $(":input#name").focusout(function() {
    var nameValue = $(":input#name").val();
    if(nameValue) {
      $(":input#name").removeClass("notfilled");
      $(":input#name").addClass("filled");
    }
    else {
      $(":input#name").addClass("notfilled invalid");
      $(":input#name").attr("placeholder", "Please enter your name");
      setTimeout(function() {
        $(":input#name").removeClass("notfilled");
        }, 1000);
      setTimeout(function() {
        $(":input#name").removeClass("invalid");
        }, 5000);
    };
  });
};



function checkEmail() {
  $(":input#email").focusout(function() {
    var emailValue = $(":input#email").val();
    if(emailValue) {
      $(":input#email").removeClass("notfilled");
      $(":input#email").addClass("filled");
    }
    else {
      $(":input#email").addClass("notfilled invalid");
      $(":input#email").attr("placeholder", "Please enter an email address");
      setTimeout(function() {
        $(":input#email").removeClass("notfilled");
        }, 1000);
      setTimeout(function() {
        $(":input#email").removeClass("invalid");
        }, 5000);
    };
  });
};



function checkSubject() {
  $(":input#subject").focusout(function() {
    var subjectValue = $(":input#subject").val();
    if(subjectValue) {
      $(":input#subject").removeClass("notfilled");
      $(":input#subject").addClass("filled");
    }
    else {
      $(":input#subject").addClass("notfilled invalid");
      $(":input#subject").attr("placeholder", "Please enter a subject");
      setTimeout(function() {
        $(":input#subject").removeClass("notfilled");
        }, 1000);
      setTimeout(function() {
        $(":input#subject").removeClass("invalid");
        }, 5000);
    };
  });
};


function checkMessage() {
  $(":input#message").focusout(function() {
    var messageValue = $(":input#message").val();
    if(messageValue) {
      $(":input#message").removeClass("notfilled");
      $(":input#message").addClass("filled");
    }
    else {
      $(":input#message").addClass("notfilled invalid");
      $(":input#message").attr("placeholder", "Please enter a message");
      setTimeout(function() {
        $(":input#message").removeClass("notfilled");
        }, 1000);
      setTimeout(function() {
        $(":input#message").removeClass("invalid");
        }, 5000);
    };
  });
};


function ajaxify() {
  $.ajax({
    url : "scripts/mail.php",
    type: "POST",
    data : $("form").serialize(),
    success: function() {
      console.log("hello world")
    }
  });
}


function submitHandler() {
  $("form").submit(function(e) {
    e.preventDefault();
    var formFields = $("*:input");
      if(formFields.hasClass("filled")) {
        $(".wrong").removeClass("checked");
        $(".wrong").addClass("check");
        $(".correct").removeClass("check");
        $(".correct").addClass("sent checked");
        ajaxify();
        $("form").trigger("reset");
        setTimeout(function() {
        $(".wrong").removeClass("checked");
        $(".wrong").addClass("check");
        $(".correct").removeClass("sent checked");
        $(".correct").addClass("check");          
        }, 100);

      }
      else {
        $(".correct").addClass("check");
        $(".correct").removeClass("checked");
        $(".wrong").removeClass("check");
        $(".wrong").addClass("recheck checked");
      }

  });
};








$(document).ready(function() {
  checkName();
  checkEmail();
  checkSubject();
  checkMessage();
  submitHandler();
});