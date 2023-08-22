// script.js (Optional)
document.addEventListener("DOMContentLoaded", function () {
  const opensigninupmodelbutton = document.getElementById("signinupmodelbutton");
  const opengooglemaplocationmodelbutton = document.getElementById("googlemaplocationmodelbutton");
  const signinupmodelbox = document.getElementById("signinupmodelbox");
  const googlemaplocationmodelbox = document.getElementById("googlemaplocationmodelbox");
  const closeButtons = document.querySelectorAll(".closemodel");
  const signinTabbutton = document.getElementById("signinTabbutton");
  const signupTabbutton = document.getElementById("signupTabbutton");
  const signinform = document.getElementById("signinform");
  const signupform = document.getElementById("signupform");
  const opensocialmediabutton = document.getElementById("socialmediabutton");
  const opengetfreequotebutton = document.getElementById("getfreequotebutton");
  const socialmediabox = document.getElementById("socialmediabox");
  const getfreequotebox = document.getElementById("getfreequotebox");

  opensigninupmodelbutton.addEventListener("click", function () {
      signinupmodelbox.style.display = "block";
  });

  opengooglemaplocationmodelbutton.addEventListener("click", function () {
      googlemaplocationmodelbox.style.display = "block";
  });

  signinTabbutton.addEventListener("click", function () {
    signinTabbutton.classList.add("active");
    signupTabbutton.classList.remove("active");
    signinform.classList.add("active");
    signupform.classList.remove("active");
  });

  signupTabbutton.addEventListener("click", function () {
      signupTabbutton.classList.add("active");
      signinTabbutton.classList.remove("active");
      signupform.classList.add("active");
      signinform.classList.remove("active");
  });
  
  opensocialmediabutton.addEventListener("click", function () {
    socialmediabox.style.display = "block";
  });

  opengetfreequotebutton.addEventListener("click", function () {
    getfreequotebox.style.display = "block";
  });


  closeButtons.forEach(function (button) {
      button.addEventListener("click", function () {
          signinupmodelbox.style.display = "none";
          googlemaplocationmodelbox.style.display = "none";
          socialmediabox.style.display = "none";
          getfreequotebox.style.display = "none";
      });
  });
});


// wizard design 
$(document).ready(function () {
  $('.nav-tabs > li a[title]').tooltip();
  
  //Wizard
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

      var target = $(e.target);
  
      if (target.parent().hasClass('disabled')) {
          return false;
      }
  });

  $(".next-step").click(function (e) {

      var active = $('.wizard .nav-tabs li.active');
      active.next().removeClass('disabled');
      nextTab(active);

  });
  $(".prev-step").click(function (e) {

      var active = $('.wizard .nav-tabs li.active');
      prevTab(active);

  });
});

function nextTab(elem) {
  $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
  $(elem).prev().find('a[data-toggle="tab"]').click();
}


$('.nav-tabs').on('click', 'li', function() {
  $('.nav-tabs li.active').removeClass('active');
  $(this).addClass('active');
});




