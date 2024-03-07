function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// function menuToggle() {
//   const toggleMenu = document.querySelector("#Client");
//   toggleMenu.classList.toggle("active");
// }

$(function () {
  "use strict";

  $(".registerId h2 span").click(function () {
    $(this).addClass("selected").siblings().removeClass("selected");

    $(".registerId  form").hide();
    $("." + $(this).data("class")).fadeIn(100);

    console.log($(this).data("class"));
  });
});
// ==========================validator=======================
$("#LoginClient").validate({
  rules: {
    email: {
      required: true,
      minlength: 3,
    },
    messages: {
      required: "Required input",
      minlength: jQuery.validator.format(
        "Please, at least 3 characters are necessary"
      ),
    },
  },

  submitHandler: function (form) {
    form.submit();
  },
});
$("#LoginCaption").validate({
  rules: {
    email: {
      required: true,
      minlength: 3,
    },
    messages: {
      required: "Required input",
      minlength: jQuery.validator.format(
        "Please, at least 3 characters are necessary"
      ),
    },
  },

  submitHandler: function (form) {
    form.submit();
  },
});

$("#RegisterClient").validate({
  rules: {
    password: {
      required: true,
      minlength: 8,
    },
    email: {
      required: true,
      minlength: 3,
    },
    messages: {
      password: {
        required: "password field is Required",
        minlength: jQuery.validator.format(
          "Please, at least 8 characters are necessary"
        ),
      },

      email: {
        required: "email field is Required",
        minlength: jQuery.validator.format(
          "Please, at least 3 characters are necessary"
        ),
      },
    },
  },

  submitHandler: function (form) {
    form.submit();
  },
});
$("#RegisterCaption").validate({
  rules: {
    password: {
      required: true,
      minlength: 8,
    },
    email: {
      required: true,
      minlength: 3,
    },
    messages: {
      password: {
        required: "password field is Required",
        minlength: jQuery.validator.format(
          "Please, at least 8 characters are necessary"
        ),
      },

      email: {
        required: "email field is Required",
        minlength: jQuery.validator.format(
          "Please, at least 3 characters are necessary"
        ),
      },
    },
  },

  submitHandler: function (form) {
    form.submit();
  },
});
/*########################## */
// // Access the video element
// const video = document.getElementById("video");

// // Access the canvas element
// const canvas = document.getElementById("canvas");
// const context = canvas.getContext("2d");

// // Access the capture button
// const captureBtn = document.getElementById("capture-btn");

// // Get user media (video) and display it in the video element
// navigator.mediaDevices
//   .getUserMedia({ video: true })
//   .then((stream) => {
//     video.srcObject = stream;
//   })
//   .catch((error) => {
//     console.error("Error accessing the webcam:", error);
//   });

// // Capture button click event
// captureBtn.addEventListener("click", () => {
//   // Draw the current video frame on the canvas
//   context.drawImage(video, 0, 0, canvas.width, canvas.height);

//   // Convert the canvas image to base64 data URL
//   const imageData = canvas.toDataURL("image/jpeg");

//   // Store the image data in localStorage
//   localStorage.setItem("capturedImage", imageData);

//   // Display a confirmation message
//   alert("Image captured and stored in localStorage!");
// });

// // Access the video element
// const video = document.getElementById("video");
// const openCamera = document.getElementById("open_camera");
// // Access the canvas element
// const canvas = document.getElementById("canvas");
// const context = canvas.getContext("2d");

// // Access the capture button
// const captureBtn = document.getElementById("capture-btn");

// // Get user media (video) and display it in the video element when the button is clicked
// openCamera.addEventListener("click", () => {
//   navigator.mediaDevices
//     .getUserMedia({ video: true })
//     .then((stream) => {
//       video.srcObject = stream;
//     })
//     .catch((error) => {
//       console.error("Error accessing the webcam:", error);
//     });
// });

// // Capture button click event
// captureBtn.addEventListener("click", () => {
//   // Draw the current video frame on the canvas
//   context.drawImage(video, 0, 0, canvas.width, canvas.height);

//   // Convert the canvas image to base64 data URL
//   const imageData = canvas.toDataURL("image/jpeg");

//   // Store the image data in localStorage
//   localStorage.setItem("capturedImage", imageData);

//   // Display a confirmation message
//   alert("Image captured and stored in localStorage!");
// });

// // Show a default image if the user does not click the button
// window.addEventListener("load", () => {
//   if (!localStorage.getItem("capturedImage")) {
//     const defaultImage = new Image();
//     defaultImage.src = "finshWebsite/exomac/assets/images/project/camera.jpg";
//     defaultImage.onload = () => {
//       context.drawImage(defaultImage, 0, 0, canvas.width, canvas.height);
//     };
//   }
// });
// Access the video element
// const camera = document.getElementById("camera");
// const video = document.getElementById("video");
// const openCamera = document.getElementById("open_camera");
// const closeCamera = document.getElementById("close_camera"); // Add a close camera button
// closeCamera.style.display = "none";
// // Access the canvas element
// const canvas = document.getElementById("canvas");
// const context = canvas.getContext("2d");

// // Access the capture button
// const captureBtn = document.getElementById("capture-btn");
// captureBtn.style.display = "none";
// // Get user media (video) and display it in the video element when the button is clicked
// openCamera.addEventListener("click", () => {

//   navigator.mediaDevices
//     .getUserMedia({ video: true })
//     .then((stream) => {
//       video.srcObject = stream;
//       openCamera.style.display = "none"; // Hide the open camera button
//       closeCamera.style.display = "block"; // Show the close camera button
//       captureBtn.style.display = "block";
//     })
//     .catch((error) => {
//       console.error("Error accessing the webcam:", error);
//     });
// });

// // Capture button click event
// captureBtn.addEventListener("click", () => {
//   // Draw the current video frame on the canvas
//   context.drawImage(video, 0, 0, canvas.width, canvas.height);

//   // Convert the canvas image to base64 data URL
//   const imageData = canvas.toDataURL("image/jpeg");

//   // Store the image data in localStorage
//   localStorage.setItem("capturedImage", imageData);

//   // Display a confirmation message
//   alert("Image captured and stored in localStorage!");

//   // Close the camera
//   closeCamera.click();
// });

// // Close camera button click event
// closeCamera.addEventListener("click", () => {
//   // Stop the video stream
//   const stream = video.srcObject;
//   const tracks = stream.getTracks();
//   tracks.forEach((track) => {
//     track.stop();
//   });

//   // Clear the video source and canvas
//   video.srcObject = null;
//   context.clearRect(0, 0, canvas.width, canvas.height);

//   // Show the open camera button
//   openCamera.style.display = "block";
//   closeCamera.style.display = "none"; // Hide the close camera button
//   captureBtn.style.display = "none"; // Hide the close camera button

//   // Display the captured image from localStorage
//   const capturedImage = new Image();
//   capturedImage.src = localStorage.getItem("capturedImage");
//   capturedImage.onload = () => {
//     context.drawImage(capturedImage, 0, 0, canvas.width, canvas.height);
//   };
// });

// // Show a default image if the user does not click the button
// window.addEventListener("load", () => {
//   if (!localStorage.getItem("capturedImage")) {
//     const defaultImage = new Image();
//     defaultImage.src = "finshWebsite/exomac/assets/images/project/camera.jpg";
//     camera.src = "finshWebsite/exomac/assets/images/project/camera.jpg";
//     defaultImage.onload = () => {
//       context.drawImage(defaultImage, 0, 0, canvas.width, canvas.height);
//     };
//   } else {
//     camera.src = localStorage.getItem("capturedImage");
//     closeCamera.click(); // Automatically close the camera if an image is already captured
//   }
// });

const camera = document.getElementById("camera");
const video = document.getElementById("video");
const openCamera = document.getElementById("open_camera");
const closeCamera = document.getElementById("close_camera"); // Add a close camera button
closeCamera.style.display = "none";
// Access the canvas element
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Access the capture button
const captureBtn = document.getElementById("capture-btn");
captureBtn.style.display = "none";

// Get user media (video) and display it in the video element when the button is clicked
openCamera.addEventListener("click", () => {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
      openCamera.style.display = "none"; // Hide the open camera button
      closeCamera.style.display = "block"; // Show the close camera button
      captureBtn.style.display = "none";
    })
    .catch((error) => {
      console.error("Error accessing the webcam:", error);
    });

  // Automatically capture an image after 9 seconds
  setTimeout(() => {
    captureBtn.click();
  }, 9000);
});

// Capture button click event
captureBtn.addEventListener("click", () => {
  // Draw the current video frame on the canvas
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Convert the canvas image to base64 data URL
  const imageData = canvas.toDataURL("image/jpeg");

  // Store the image data in localStorage
  localStorage.setItem("capturedImage", imageData);

  // Display a confirmation message
  alert("Image captured and stored in localStorage!");

  // Close the camera
  closeCamera.click();
  // change image
  camera.src = localStorage.getItem("capturedImage");
});

// Close camera button click event
closeCamera.addEventListener("click", () => {
  // Stop the video stream
  const stream = video.srcObject;
  const tracks = stream.getTracks();
  tracks.forEach((track) => {
    track.stop();
  });

  // Clear the video source and canvas
  video.srcObject = null;
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Show the open camera button
  openCamera.style.display = "block";
  closeCamera.style.display = "none"; // Hide the close camera button
  captureBtn.style.display = "none"; // Hide the capture button

  // Display the captured image from localStorage
  const capturedImage = new Image();
  capturedImage.src = localStorage.getItem("capturedImage");
  capturedImage.onload = () => {
    context.drawImage(capturedImage, 0, 0, canvas.width, canvas.height);
  };
});

// Show the captured image from localStorage
window.addEventListener("load", () => {
  if (localStorage.getItem("capturedImage")) {
    camera.src = localStorage.getItem("capturedImage");
    closeCamera.click(); // Automatically close the camera if an image is already captured
  } else {
    camera.src = "finshWebsite/exomac/assets/images/project/camera.jpg";
  }
});

/*make counter down from 9 to 1 */
// يبدأ العداد من الرقم 9
let count = 9;

// تحديث العداد كل ثانية باستخدام setInterval
const countdown = setInterval(() => {
  // عرض العدد الحالي
  document.getElementById("countdown").innerHTML = count;

  // إذا وصل العداد إلى 1، يتم توقيف العداد
  if (count === 1) {
    clearInterval(countdown);
  }

  // تحديث العداد للعدد التالي
  count--;
}, 1000); // كل ثانية (1000 مللي ثانية)

// function onSubmit(token) {
//   document.getElementById("demo-form").submit();
// }
// function onClick(e) {
//   e.preventDefault();
//   grecaptcha.enterprise.ready(async () => {
//     const token = await grecaptcha.enterprise.execute(
//       "6LdTS0UpAAAAAPuGL8thlCyG3OlciF_9YtXy2wga",
//       { action: "LOGIN" }
//     );
//   });
// }

// function enableSubmit() {
//   document.getElementById("submitButton").removeAttribute("disabled");
// }
//
const registerClientForm = document.getElementById("RegisterClient");
const recaptcha_error = document.querySelector(".g-recaptcha-error");

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function (e) {
  var response = grecaptcha.getResponse();
  if (response.length === 0) {
    e.preventDefault();

    // If reCAPTCHA is not checked
    recaptcha_error.innerHTML = "This Failed Required";
  } else {
    recaptcha_error.innerHTML = "";
  }
});





function validateRecaptcha() {
  var response = grecaptcha.getResponse();
  if (response.length === 0) {
    // If reCAPTCHA is not checked
    recaptcha_error.innerHTML = "This Failed Required";
    window.location.href = "authentication_en.html";
    // alert('Please check the reCAPTCHA checkbox');
    return false; // Prevent form submission
  } else {
    recaptcha_error.innerHTML = "";
    // If reCAPTCHA is checked
    // Perform additional form validation if needed
    return true; // Allow form submission
  }
}
