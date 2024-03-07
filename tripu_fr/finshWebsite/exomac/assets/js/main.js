(function ($) {
  "use strict";

  /*--
        Commons Variables
    -----------------------------------*/
  var $window = $(window),
    $body = $("body");

  /*--
        Custom script to call Background
        Image & Color from html data attribute
    -----------------------------------*/
  $("[data-bg-image]").each(function () {
    var $this = $(this),
      $image = $this.data("bg-image");
    $this.css("background-image", "url(" + $image + ")");
  });
  $("[data-bg-color]").each(function () {
    var $this = $(this),
      $color = $this.data("bg-color");
    $this.css("background-color", $color);
  });

  /*---------------------------- 
        Sidebar Search Active
    -----------------------------*/
  function sidebarSearch() {
    var searchTrigger = $(".header-search-toggle"),
      endTriggersearch = $("button.search-close"),
      container = $(".main-search-active");

    searchTrigger.on("click", function () {
      container.addClass("inside");
    });

    endTriggersearch.on("click", function () {
      container.removeClass("inside");
    });
  }
  sidebarSearch();

  /*------------------------------
        Parallax Motion Animation 
    -------------------------------*/
  $(".scene").each(function () {
    new Parallax($(this)[0]);
  });

  /*--
        Header Sticky
    -----------------------------------*/
  $window.on("scroll", function () {
    if ($window.scrollTop() > 350) {
      $(".sticky-header").addClass("is-sticky");
    } else {
      $(".sticky-header").removeClass("is-sticky");
    }
  });

  /*--
        Off Canvas Function
    -----------------------------------*/
  $(".header-mobile-menu-toggle, .mobile-menu-close").on(
    "click",
    ".toggle",
    function () {
      $body.toggleClass("mobile-menu-open");
    }
  );
  $(".site-mobile-menu").on("click", ".menu-toggle", function (e) {
    e.preventDefault();
    var $this = $(this);
    if ($this.siblings(".sub-menu:visible, .mega-menu:visible").length) {
      $this
        .siblings(".sub-menu, .mega-menu")
        .slideUp()
        .parent()
        .removeClass("open")
        .find(".sub-menu, .mega-menu")
        .slideUp()
        .parent()
        .removeClass("open");
    } else {
      $this
        .siblings(".sub-menu, .mega-menu")
        .slideDown()
        .parent()
        .addClass("open")
        .siblings()
        .find(".sub-menu, .mega-menu")
        .slideUp()
        .parent()
        .removeClass("open");
    }
  });

  $(".header-search-toggle").on("click", function (e) {
    e.preventDefault();
    $(this)
      .siblings(".header-search-form, .header-search-form-2")
      .slideToggle()
      .parent()
      .toggleClass("open");
  });

  $(".header-fs-search-toggle").on("click", function () {
    $("#fullscreen-search").addClass("open");
  });
  $(".fullscreen-search-close").on("click", ".toggle", function () {
    $("#fullscreen-search").removeClass("open");
  });

  $body.on("click", function (e) {
    if (
      !$(e.target).closest(".header-search").length &&
      $window.width() < 768
    ) {
      $(".header-search-form, .header-search-form-2")
        .slideUp()
        .parent()
        .removeClass("open");
    }
    if (
      !$(e.target).closest(".site-main-mobile-menu-inner").length &&
      !$(e.target).closest(".header-mobile-menu-toggle").length
    ) {
      $body.removeClass("mobile-menu-open");
    }
  });

  /*----- 
        Animate Headline Active
    --------------------------------*/
  $(".headline-active").animatedHeadline({
    animationType: "rotate-3",
  });

  /* ----------------------------
        AOS Scroll Animation 
    -------------------------------*/
  AOS.init({
    offset: 80,
    duration: 1200,
    once: true,
    easing: "ease",
  });

  /* ----------------------------
        Tilt Animation 
    -------------------------------*/
  $(".js-tilt").tilt({
    base: window,
    reset: !0,
    scale: 1.04,
    reverse: !1,
    max: 15,
    perspective: 3e3,
    speed: 4e3,
  });

  /* ----------------------------
        Portfolio Masonry Activation
    -------------------------------*/
  $(window).load(function () {
    $(".ag-masonary-wrapper").imagesLoaded(function () {
      // filter items on button click
      $(".messonry-button").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $(this).siblings(".is-checked").removeClass("is-checked");
        $(this).addClass("is-checked");
        $grid.isotope({
          filter: filterValue,
        });
      });

      // init Isotope
      var $grid = $(".mesonry-list").isotope({
        percentPosition: true,
        transitionDuration: "0.7s",
        layoutMode: "masonry",
        masonry: {
          columnWidth: ".resizer",
        },
      });
    });
  });

  /*----------------------------------------
         SVG Inject With Vivus(After Inject) 
    ------------------------------------------*/
  SVGInject(document.querySelectorAll("img.svgInject"), {
    makeIdsUnique: true,
    afterInject: function (img, svg) {
      new Vivus(svg, {
        duration: 80,
      });
    },
  });
  /* Vivus On Hover */
  $("[data-vivus-hover]").hover(function () {
    var svg = $(this).find("svg")[0];
    new Vivus(svg, {
      duration: 50,
    });
  });

  /*-----------------------
        CounterUp JS 
    -------------------------*/
  $(".counter").counterUp({
    time: 2000,
  });

  /*--------------------------------
        Swiper Slider Activation JS 
    ----------------------------------*/

  // Home 1 Slider
  var introSlider = new Swiper(".intro-slider", {
    loop: true,
    speed: 750,
    spaceBetween: 30,
    slidesPerView: 2,
    effect: "fade",
    navigation: {
      nextEl: ".home-slider-next",
      prevEl: ".home-slider-prev",
    },
    //autoplay: {},
  });

  // Testimonial Slider Two
  var testimonialSlider = new Swiper(".testimonial-slider", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    centeredSlides: true,
    loop: true,
    speed: 1000,
    spaceBetween: 50,
    autoHeight: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      1499: {
        slidesPerView: 3,
      },

      991: {
        slidesPerView: 2,
      },

      767: {
        slidesPerView: 1,
      },

      575: {
        slidesPerView: 1,
      },
    },
  });

  // Brand Carousel Slider
  var brandSlider = new Swiper(".brand-carousel", {
    watchSlidesVisibility: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 6,
    breakpoints: {
      1200: {
        slidesPerView: 6,
      },
      992: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 5,
      },
      576: {
        slidesPerView: 4,
      },
      320: {
        slidesPerView: 2,
      },
    },
  });

  /*--
        Isotpe
    -----------------------------------*/
  var $isotopeGrid = $(".isotope-grid");
  var $isotopeFilter = $(".isotope-filter");
  $isotopeGrid.imagesLoaded(function () {
    $isotopeGrid.isotope({
      itemSelector: ".grid-item",
      masonry: {
        columnWidth: ".grid-sizer",
      },
    });
    AOS.refresh();
  });
  $isotopeFilter.on("click", "button", function () {
    var $this = $(this),
      $filterValue = $this.attr("data-filter"),
      $targetIsotop = $this.parent().data("target");
    $this.addClass("active").siblings().removeClass("active");
    $($targetIsotop).isotope({
      filter: $filterValue,
    });
  });

  /*--
        Magnific Popup
    -----------------------------------*/
  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  // Background Video Active
  var htmlVideo = [
    {
      type: "video/mp4",
      src: "assets/media/video/local-video.mp4",
    },
  ];

  var poster1 = "assets/media/video/local-video.jpg";

  var demo1 = new vidim(".bg-video", {
    src: htmlVideo,
    poster: poster1,
  });

  /*--
        Scroll Up
    -----------------------------------*/
  function scrollToTop() {
    var $scrollUp = $("#scroll-top"),
      $lastScrollTop = 0,
      $window = $(window);

    $window.on("scroll", function () {
      var st = $(this).scrollTop();
      if (st > $lastScrollTop) {
        $scrollUp.removeClass("show");
      } else {
        if ($window.scrollTop() > 200) {
          $scrollUp.addClass("show");
        } else {
          $scrollUp.removeClass("show");
        }
      }
      $lastScrollTop = st;
    });

    $scrollUp.on("click", function (evt) {
      $("html, body").animate({ scrollTop: 0 }, 600);
      evt.preventDefault();
    });
  }
  scrollToTop();

  /*-------------------------
        Ajax Contact Form 
    ---------------------------*/
  $(function () {
    // Get the form.
    var form = $("#contact-form");

    // Get the messages div.
    var formMessages = $(".form-messege");

    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
      // Stop the browser from submitting the form.
      e.preventDefault();

      // Serialize the form data.
      var formData = $(form).serialize();

      // Submit the form using AJAX.
      $.ajax({
        type: "POST",
        url: $(form).attr("action"),
        data: formData,
      })
        .done(function (response) {
          // Make sure that the formMessages div has the 'success' class.
          $(formMessages).removeClass("error");
          $(formMessages).addClass("success");

          // Set the message text.
          $(formMessages).text(response);

          // Clear the form.
          $("#contact-form input,#contact-form textarea").val("");
        })
        .fail(function (data) {
          // Make sure that the formMessages div has the 'error' class.
          $(formMessages).removeClass("success");
          $(formMessages).addClass("error");

          // Set the message text.
          if (data.responseText !== "") {
            $(formMessages).text(data.responseText);
          } else {
            $(formMessages).text(
              "Oops! An error occured and your message could not be sent."
            );
          }
        });
    });
  });

  /*--
        On Load Function
    -----------------------------------*/
  $window.on("load", function () {});

  /*--
        Resize Function
    -----------------------------------*/
  $window.resize(function () {});
})(jQuery);

// menu_toggel

// function menuToggle() {
//   // const toggleMenu = document.querySelector(".profile_menu");
//   // toggleMenu.classList.toggle("active");
//   const toggleMenu = document.querySelector(".profile_menu");
//   const toggleNotification = document.querySelector(".notification-box");
//   const toggleMenuLang = document.querySelector(".profile_menu_Language");

//   // إزالة الصفة "active" من العناصر الأخرى
//   toggleNotification.classList.remove("active");
//   toggleMenuLang.classList.remove("active");

//   // تبديل حالة العنصر الحالي
//   toggleMenu.classList.toggle("active");
// }
// function menuToggleNotification() {
//   // const toggleNotification = document.querySelector(".notification-box");
//   // toggleNotification.classList.toggle("active");
//   const toggleMenu = document.querySelector(".profile_menu");
//   const toggleNotification = document.querySelector(".notification-box");
//   const toggleMenuLang = document.querySelector(".profile_menu_Language");

//   // إزالة الصفة "active" من العناصر الأخرى
//   toggleNotification.classList.remove("active");
//   toggleMenuLang.classList.remove("active");

//   // تبديل حالة العنصر الحالي
//   toggleMenu.classList.toggle("active");
// }
// function menuToggleLanguage() {
//   // const toggleMenuLang = document.querySelector(".profile_menu_Language");
//   // toggleMenuLang.classList.toggle("active");
//   const toggleMenu = document.querySelector(".profile_menu");
//   const toggleNotification = document.querySelector(".notification-box");
//   const toggleMenuLang = document.querySelector(".profile_menu_Language");

//   // إزالة الصفة "active" من العناصر الأخرى
//   toggleNotification.classList.remove("active");
//   toggleMenuLang.classList.remove("active");

//   // تبديل حالة العنصر الحالي
//   toggleMenu.classList.toggle("active");
// }

// function menuToggle() {
//   const toggleMenu = document.querySelector(".profile_menu");
//   const toggleNotification = document.querySelector(".notification-box");
//   const toggleMenuLang = document.querySelector(".profile_menu_Language");

//   // إزالة الصفة "active" من العناصر الأخرى
//   toggleNotification.classList.remove("active");
//   toggleMenuLang.classList.remove("active");

//   // تبديل حالة العنصر الحالي
//   toggleMenu.classList.toggle("active");
// }

function menuToggle() {
  const toggleMenu = document.querySelector(".profile_menu");
  const toggleNotification = document.querySelector(
    ".profile_menu_notification"
  );
  const toggleMenuLang = document.querySelector(".profile_menu_Language");
  // تبديل حالة العنصر الحالي
  // إغلاق النوافذ الأخرى
  toggleNotification.classList.remove("active");
  toggleMenuLang.classList.remove("active");
  toggleMenu.classList.toggle("active");
}

function menuToggleNotification() {
  //const toggleMenu = document.querySelector(".profile_menu");
  const toggleNotification = document.querySelector(
    ".profile_menu_notification"
  );
  const toggleMenuLang = document.querySelector(".profile_menu_Language");

  // إغلاق النوافذ الأخرى
  // toggleMenu.classList.remove("active");
  toggleMenuLang.classList.remove("active");
  document.body.addEventListener("click", function (e) {
    if (toggleNotification.className === "active") {
      console.log("active");
    } else {
      console.log("not active");
    }
  });
  // تبديل حالة العنصر الحالي
  toggleNotification.classList.toggle("active");
}
//const tapNotification = document.querySelector(".profile_menu_notification");
document.body.addEventListener("click", function (e) {
  // if (e.target.className === "profile_menu_notification active") {
  //   tapNotification.classList.remove("active");
  //   console.log("yes this is a notification");
  // } else {
  //   console.log("no this is not a notification");
  // }
  // if (!e.target.className === ".profile_menu_notification") {
  //   tapNotification.classList.toggle("active");
  // }
});

function menuToggleLanguage() {
  //const toggleMenu = document.querySelector(".profile_menu");
  const toggleNotification = document.querySelector(
    ".profile_menu_notification"
  );
  const toggleMenuLang = document.querySelector(".profile_menu_Language");

  // إغلاق النوافذ الأخرى
  //toggleMenu.classList.remove("active");
  toggleNotification.classList.remove("active");

  // تبديل حالة العنصر الحالي
  toggleMenuLang.classList.toggle("active");
}
// function menuToggle(menuName) {
//   const menus = document.querySelectorAll(".menu");
//   console.log(menus);
//   // Loop through all menus
//   menus.forEach((menu) => {
//     if (menu.id === menuName) {
//       // Toggle the current menu
//       menu.classList.toggle("active");
//     } else {
//       // Close other menus
//       menu.classList.remove("active");
//     }
//   });
// }
//////
var d = new Date();
page.currentYear = d.getFullYear();

function showHide() {
  // const toggleNotification = document.querySelector(".notification-box");
  // if (toggleNotification.style.display == "none") {
  //   toggleNotification.style.display = "block";
  // } else toggleNotification.style.display = "none";
}
/*=========== pagination ================ */
function getPageList(totalPages, page, maxLength) {
  function range(start, end) {
    return Array.from(Array(end - start + 1), (_, i) => i + start);
  }

  var slideWidth = maxLength < 9 ? 1 : 2;
  var leftWidth = (maxLength - slideWidth * 2 - 3) >> 1;
  var rightWidth = (maxLength - slideWidth * 2 - 3) >> 1;

  if (totalPages <= maxLength) {
    return range(1, totalPages);
  }

  if (page <= maxLength - slideWidth - 1 - rightWidth) {
    return range(1, maxLength - slideWidth - 1).concat(
      0,
      range(totalPages - slideWidth + 1, totalPages)
    );
  }

  if (page >= totalPages - slideWidth - 1 - rightWidth) {
    return range(1, slideWidth).concat(
      0,
      range(totalPages - slideWidth - 1 - rightWidth - leftWidth, totalPages)
    );
  }

  return range(1, slideWidth).concat(
    0,
    range(page - leftWidth, page + rightWidth),
    0,
    range(totalPages - slideWidth + 1, totalPages)
  );
}

$(function () {
  var numberOfItem = $(".accordion .item").length;
  var limitPerPage = 3;
  var totalPages = Math.ceil(numberOfItem / limitPerPage);
  var paginationSize = 5;
  var currentPage;

  function showPage(whichPage) {
    if (whichPage < 1 || whichPage > totalPages) return false;

    currentPage = whichPage;

    $(".accordion .item")
      .hide()
      .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
      .show();

    $(".pagination li").slice(1, -1).remove();

    getPageList(totalPages, currentPage, paginationSize).forEach((item) => {
      $("<li>")
        .addClass("page-item")
        .addClass(item ? "current-page" : "dots")
        .toggleClass("active", item === currentPage)
        .append(
          $("<a>")
            .addClass("page-link")
            .attr({ href: "javascript:void(0)" })
            .text(item || "...")
        )
        .insertBefore(".next-page");
    });

    // $(".Previous-page").toggleClass("disable", page === 1);
    // $(".next-page").toggleClass("disable", page === totalPages);
    $(".previous-page").toggleClass("disable", currentPage === 1);
    $(".next-page").toggleClass("disable", currentPage === totalPages);

    return true;
  }

  $(".pagination").append(
    $("<li>")
      .addClass("page-item")
      .addClass("previous-page")
      .append(
        $("<a>")
          .addClass("page-link")
          .attr({ href: "javascript:void(0)" })
          .text("Prev")
      ),
    $("<li>")
      .addClass("page-item")
      .addClass("next-page")
      .append(
        $("<a>")
          .addClass("page-link")
          .attr({ href: "javascript:void(0)" })
          .text("Next")
      )
  );

  $(".accordion").show();
  showPage(1);

  $(document).on(
    "click",
    ".pagination li.current-page:not(.active)",
    function () {
      return showPage(+$(this).text());
    }
  );

  $(".next-page").on("click", function () {
    return showPage(currentPage + 1);
  });
  $(".previous-page").on("click", function () {
    return showPage(currentPage - 1);
  });
});

// ===swiper autoPlay===

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 100,
  centeredSlides: false,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
});

//to make Search;

const search = () => {
  const searchBox = document.getElementById("myInput").value.toUpperCase();
  const storeItem = document.getElementById("accordionExample");
  const notification = document.querySelectorAll(".item");
  const name = document.getElementsByTagName("span");
  for (var i = 0; i < name.length; i++) {
    let match = notification[i].getElementsByTagName("span")[0];
    if (match) {
      let textValue = match.textContent || match.innerHTML;
      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        notification[i].style.display = "";
      } else {
        notification[i].style.display = "none";
      }
    }
  }
};
const searchFaqs = () => {
  const searchBox = document.getElementById("myInput").value.toUpperCase();
  const storeItem = document.getElementById("accordionExample");
  const notification = document.querySelectorAll(".item");
  const name = document.getElementsByTagName("span");
  for (var i = 0; i < name.length; i++) {
    let match = notification[i].getElementsByTagName("span")[0];
    if (match) {
      let textValue = match.textContent || match.innerHTML;
      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        notification[i].style.display = "";
      } else {
        notification[i].style.display = "none";
      }
    }
  }
};
//

function x() {
  // var e = document.getElementById("table_size");
  // var val = e.options[e.selectedIndex].value;
  // $("#table_size").val();

  // window.location.reload();
  //let value = document.querySelector(".accordion");
  // value.innerText = selection.options[Selection.selectedIndex].text;
  let selection = document.getElementById("table_size");

  selection.addEventListener("change", () => {
    var val = selection.options[selection.selectedIndex].text;
    console.log(val);
  });
}

/*==============pagination FAQs=========*/
// function getPageList(totalPages, page, maxLength) {
//   function range(start, end) {
//     return Array.from(Array(end - start + 1), (_, i) => i + start);
//   }

//   var slideWidth = maxLength < 9 ? 1 : 2;
//   var leftWidth = (maxLength - slideWidth * 2 - 3) >> 1;
//   var rightWidth = (maxLength - slideWidth * 2 - 3) >> 1;

//   if (totalPages <= maxLength) {
//     return range(1, totalPages);
//   }

//   if (page <= maxLength - slideWidth - 1 - rightWidth) {
//     return range(1, maxLength - slideWidth - 1).concat(
//       0,
//       range(totalPages - slideWidth + 1, totalPages)
//     );
//   }

//   if (page >= totalPages - slideWidth - 1 - rightWidth) {
//     return range(1, slideWidth).concat(
//       0,
//       range(totalPages - slideWidth - 1 - rightWidth - leftWidth, totalPages)
//     );
//   }

//   return range(1, slideWidth).concat(
//     0,
//     range(page - leftWidth, page + rightWidth),
//     0,
//     range(totalPages - slideWidth + 1, totalPages)
//   );
// }

// $(function () {
//   var numberOfItem = $(".accordionFAQs .item").length;
//   var limitPerPage = 15;
//   var totalPages = Math.ceil(numberOfItem / limitPerPage);
//   var paginationSize = 3;
//   var currentPage;

//   function showPage(whichPage) {
//     if (whichPage < 1 || whichPage > totalPages) return true;

//     currentPage = whichPage;

//     $(".accordionFAQs .item")
//       .hide()
//       .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
//       .show();

//     $(".pagination li").slice(1, -1).remove();

//     getPageList(totalPages, currentPage, paginationSize).forEach((item) => {
//       $("<li>")
//         .addClass("page-item")
//         .addClass(item ? "current-page" : "dots")
//         .toggleClass("active", item === currentPage)
//         .append(
//           $("<a>")
//             .addClass("page-link")
//             .attr({ href: "javascript:void(0)" })
//         )
//         .insertBefore(".next-page");
//     });

//     // $(".Previous-page").toggleClass("disable", page === 1);
//     // $(".next-page").toggleClass("disable", page === totalPages);
//     $(".previous-page").toggleClass("disable", currentPage === 1);
//     $(".next-page").toggleClass("disable", currentPage === totalPages);

//     return true;
//   }

//   // $(".pagination").append(
//   //   $("<li>")
//   //     .addClass("page-item")
//   //     .addClass("previous-page")
//   //     .append(
//   //       $("<a>")
//   //         .addClass("page-link")
//   //         .attr({ href: "javascript:void(0)" })
//   //         .text("Prev")
//   //     ),
//   //   $("<li>")
//   //     .addClass("page-item")
//   //     .addClass("next-page")
//   //     .append(
//   //       $("<a>")
//   //         .addClass("page-link")
//   //         .attr({ href: "javascript:void(0)" })
//   //         .text("Next")
//   //     )
//   // );

//   $(".accordionFAQs").show();
//   showPage(1);

//   $(document).on(
//     "click",
//     ".pagination li.current-page:not(.active)",
//     function () {
//       return showPage(+$(this).text());
//     }
//   );

//   $(".next-page").on("click", function () {
//     return showPage(currentPage + 1);
//   });
//   $(".previous-page").on("click", function () {
//     return showPage(currentPage - 1);
//   });
// });
$(function () {
  var numberOfItem = $(".accordionFAQs .item").length;
  var limitPerPage = 15;
  var totalPages = Math.ceil(numberOfItem / limitPerPage);
  var paginationSize = 3;
  var currentPage;

  function showPage(whichPage) {
    if (whichPage < 1 || whichPage > totalPages) return false;

    currentPage = whichPage;

    $(".accordionFAQs .item")
      .hide()
      .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
      .show();

    $(".displaynum").slice(1, -1).remove();

    getPageList(totalPages, currentPage, paginationSize).forEach((item) => {
      $("<li>")
        .addClass("page-item")
        .addClass(item ? "current-page" : "dots")
        .toggleClass("active", item === currentPage)
        .append(
          $("<a>")
            .addClass("page-link")
            .attr({ href: "javascript:void(0)" })
            .text(item || "...")
        )
        .insertBefore(".next-page");
    });

    $(".previous-page").toggleClass("disable", currentPage === 1);
    $(".next-page").toggleClass("disable", currentPage === totalPages);

    return true;
  }

  $(".accordionFAQs").show();
  showPage(1);

  $(document).on(
    "click",
    ".pagination .current-page:not(.active)",
    function () {
      return showPage(+$(this).text());
    }
  );

  $(".next-page").on("click", function () {
    return showPage(currentPage + 1);
  });

  $(".previous-page").on("click", function () {
    return showPage(currentPage - 1);
  });
});

function getPageList(totalPages, page, maxLength) {
  if (maxLength < 5) throw "maxLength must be at least 5";

  function range(start, end) {
    return Array.from(Array(end - start + 1), (_, i) => i + start);
  }

  var sideWidth = maxLength < 9 ? 1 : 2;
  var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
  var rightWidth = (maxLength - sideWidth * 2 - 2) >> 1;

  if (totalPages <= maxLength) {
    // no breaks in list
    return range(1, totalPages);
  }

  if (page <= maxLength - sideWidth - 1 - rightWidth) {
    // no break on left of page
    return range(1, maxLength - sideWidth - 1).concat(
      0,
      range(totalPages - sideWidth + 1, totalPages)
    );
  }

  if (page >= totalPages - sideWidth - 1 - rightWidth) {
    // no break on right of page
    return range(1, sideWidth).concat(
      0,
      range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages)
    );
  }

  // Breaks on both sides
  return range(1, sideWidth).concat(
    0,
    range(page - leftWidth, page + rightWidth),
    0,
    range(totalPages - sideWidth + 1, totalPages)
  );
}
/* =====================test_area =============*/
$(document).ready(
  (function () {
    $(".client-single").on("click", function (event) {
      event.preventDefault();

      var active = $(this).hasClass("active");

      var parent = $(this).parents(".testi-wrap");

      if (!active) {
        var activeBlock = parent.find(".client-single.active");

        var currentPos = $(this).attr("data-position");

        var newPos = activeBlock.attr("data-position");

        activeBlock
          .removeClass("active")
          .removeClass(newPos)
          .addClass("inactive")
          .addClass(currentPos);
        activeBlock.attr("data-position", currentPos);

        $(this)
          .addClass("active")
          .removeClass("inactive")
          .removeClass(currentPos)
          .addClass(newPos);
        $(this).attr("data-position", newPos);
      }
    });
  })(jQuery)
);

// var e = document.getElementById("table_size");
// var val = e.options[e.selectedIndex].value;
// $("#table_size").val();
// let selection = document.getElementById("table_size");

// selection.addEventListener("change", () => {
//   var val = selection.options[selection.selectedIndex].text;
//   // value.innerText = selection.options[Selection.selectedIndex].text;
//   console.log(val);
// });
// filterIndex = val;
// console.log(filterIndex);
function updateData(sectionId) {

  var urlParams = new URLSearchParams(window.location.search);
  var numberValue = urlParams.get("number");
  document.getElementById("myInput").value = numberValue;

  if (numberValue == null || numberValue === "") {
    return 
    alert("Error: Number is empty or null");
    window.location.href = "coupon_failed_en.html";
  }
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
// -----------------------------
function updateDataAr(sectionId) {

  var urlParamsa = new URLSearchParams(window.location.search);
  var numberValues = urlParamsa.get("number");
  document.getElementById("myInput").value = numberValues;

  if (numberValues == null || numberValues === "") {
    return 
    alert(" خطأ: الرقم فارغ أو فارغ ");
    window.location.href = "coupon_failed_ar.html";
  }
  var sections = document.getElementById(sectionId);
  if (sections) {
    sections.scrollIntoView({ behavior: "smooth" });
  }
}
// -----------------------------
function updateDataFr(sectionId) {

  var urlParamsf = new URLSearchParams(window.location.search);
  var numbersValue = urlParamsf.get("number");
  document.getElementById("myInput").value = numbersValue;

  if (numbersValue == null || numbersValue === "") {
    return 
    alert("Erreur:le numéro est vide ou nul");
    window.location.href = "coupon_failed_fr.html";
  }
  var sectionsf = document.getElementById(sectionId);
  if (sectionsf) {
    sectionsf.scrollIntoView({ behavior: "smooth" });
  }
}

onSubmitCobone = function () {
  window.location.href =
    " https://play.google.com/store/apps/details?id=com.tripu.tripu&pli=1?number=" +
    document.getElementById("myInput").value;
};

function redirectToSectionNotification() {
  window.location.href = "technical-support_en.html#test";
}
window.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const tabToOpen = urlParams.get("tab");

  // Open the corresponding tab
  if (tabToOpen) {
    const tabContent = document.getElementById(tabToOpen);
    if (tabContent) {
      tabContent.style.display = "block";
    }
    // } else {
    //   tabContent.style.display = "none";
    // }
  }
});

// pagination to friend request

function getPageList(totalPages, page, maxLength) {
  function range(start, end) {
    return Array.from(Array(end - start + 1), (_, i) => i + start);
  }

  var slideWidth = maxLength < 9 ? 1 : 2;
  var leftWidth = (maxLength - slideWidth * 2 - 3) >> 1;
  var rightWidth = (maxLength - slideWidth * 2 - 3) >> 1;

  if (totalPages <= maxLength) {
    return range(1, totalPages);
  }

  if (page <= maxLength - slideWidth - 1 - rightWidth) {
    return range(1, maxLength - slideWidth - 1).concat(
      0,
      range(totalPages - slideWidth + 1, totalPages)
    );
  }

  if (page >= totalPages - slideWidth - 1 - rightWidth) {
    return range(1, slideWidth).concat(
      0,
      range(totalPages - slideWidth - 1 - rightWidth - leftWidth, totalPages)
    );
  }

  return range(1, slideWidth).concat(
    0,
    range(page - leftWidth, page + rightWidth),
    0,
    range(totalPages - slideWidth + 1, totalPages)
  );
}

$(function () {
  var numberOfItem = $(".frind-box .single-friend").length;
  var limitPerPage = 3;
  var totalPages = Math.ceil(numberOfItem / limitPerPage);
  var paginationSize = 5;
  var currentPage;

  function showPage(whichPage) {
    if (whichPage < 1 || whichPage > totalPages) return false;

    currentPage = whichPage;

    $(".frind-box .single-friend")
      .hide()
      .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
      .show();

    $(".pagination_B li").slice(1, -1).remove();

    getPageList(totalPages, currentPage, paginationSize).forEach((item) => {
      $("<li>")
        .addClass("page-item_B")
        .addClass(item ? "current-page_B" : "dots")
        .toggleClass("active", item === currentPage)
        .append(
          $("<a>")
            .addClass("page-link_B")
            .attr({ href: "javascript:void(0)" })
            .text(item || "...")
        )
        .insertBefore(".next-page_B");
    });

    $(".previous-page_B").toggleClass("disable", currentPage === 1);
    $(".next-page_B").toggleClass("disable", currentPage === totalPages);

    return true;
  }

  function getPageList(totalPages, currentPage, paginationSize) {
    if (totalPages <= paginationSize) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    var delta = Math.floor((paginationSize - 1) / 2);
    var left = currentPage - delta;
    var right = currentPage + delta + 1;

    if (left < 1) {
      left = 1;
      right = left + paginationSize;
    }

    if (right > totalPages) {
      right = totalPages + 1;
      left = right - paginationSize;
    }

    return Array.from({ length: paginationSize }, (_, i) => left + i);
  }

  $(".pagination_B").append(
    $("<li>")
      .addClass("page-item_B")
      .addClass("previous-page_B")
      .append(
        $("<a>")
          .addClass("page-link_B")
          .attr({ href: "javascript:void(0)" })
          .text("Prev")
      ),
    $("<li>")
      .addClass("page-item_B")
      .addClass("next-page_B")
      .append(
        $("<a>")
          .addClass("page-link_B")
          .attr({ href: "javascript:void(0)" })
          .text("Next")
      )
  );

  $(".frind-box").show();
  showPage(1);

  $(document).on(
    "click",
    ".pagination_B li.current-page_B:not(.active)",
    function () {
      return showPage(+$(this).text());
    }
  );

  $(".next-page_B").on("click", function () {
    return showPage(currentPage + 1);
  });
  $(".previous-page_B").on("click", function () {
    return showPage(currentPage - 1);
  });
});

//validate payment method card number
var card_number_valid = false;
var card_name_valid = false;
var card_Exp_valid = false;
var card_cvv_valid = false;
var card_number = document.getElementById("card_number");
var card_name = document.getElementById("card_name");
var card_exp = document.getElementById("card_exp");
var card_cvv = document.getElementById("card_cvv");
var errorNumber = document.getElementById("card_number_error");
var errorName = document.getElementById("card_name_error");
var errorExp = document.getElementById("card_exp_error");
var errorCvv = document.getElementById("card_cvv_error");

card_name.disabled = true;
card_exp.disabled = true;
card_cvv.disabled = true;

card_number.oninput = function (event) {
  let v = document.getElementById("card_number").value;
  card_number.maxLength = 16;
  if (v.length !== 16) {
    errorNumber.innerHTML = "Card number must be 16 digits";
    card_name.disabled = true;
    card_exp.disabled = true;
    card_cvv.disabled = true;
    return "Card number must be 16 digits";
  }

  if (!/^\d+$/.test(v)) {
    errorNumber.innerHTML = "Card number must only contain digits";
    card_name.disabled = true;
    card_exp.disabled = true;
    card_cvv.disabled = true;
    return "Card number must only contain digits";
  }
  card_name.disabled = false;
  card_exp.disabled = true;
  card_cvv.disabled = true;
  errorNumber.innerHTML = "";
  return "Card number is valid";
};
// validate to card_name
card_name.oninput = function (event) {
  let v = card_name.value;
  card_name.minlength = 3;
  if (v.length < 3) {
    errorName.innerHTML = "Card name must be more than 3 digits";
    // card_name.disabled = true;
    card_exp.disabled = false;
    card_cvv.disabled = true;
    return "Card name must be more than 3 digits";
  }

  card_cvv.disabled = true;
  errorName.innerHTML = "";
  return "Card number is valid";
};

card_exp.addEventListener("input", function (event) {
  let v = card_exp.value;
  var d = new Date();
  var currentYear = d.getFullYear().toString().slice(-2);

  const selectedDate = new Date(v + "-01"); // إضافة يوم مناسب
  const month = selectedDate.getMonth() + 1;
  const year = selectedDate.getFullYear().toString().slice(-2);
  // var year = new Date().getFullYear();
  // var month = new Date().getMonth();
  // console.log(`date is====== ${parseInt(year)} ${parseInt(month)}`);
  v = ("0" + month).slice(-2) + "/" + year;
  // console.log(`value ${v}`);

  if (year < currentYear) {
    card_cvv.disabled = true;
    errorExp.innerHTML = "Your card has expired";
    // console.log(
    //   `Current year is ${currentYear}, but the card expiration year is ${year}`
    // );
  }
  if (year >= currentYear) {
    card_cvv.disabled = false;
    errorExp.innerHTML = "";
  }
  //   this.value = "";
  //   alert("Please enter a valid date in the format (YYYY-MM).");
  // }
});

card_cvv.addEventListener("input", function (event) {
  let v = card_cvv.value;
  card_cvv.maxLength = 3;

  if (v.length < 3) {
    errorCvv.innerHTML = "Card CVV must 3 digits";
    return "Please enter a valid card number";
  }

  if (!/^\d+$/.test(v)) {
    errorCvv.innerHTML = "Card CVV must only contain digits";
    return "Card number must only contain digits";
  }
  errorCvv.innerHTML = "";
});
/*#################################### */
const mainSettingsLink =
  "{{live}}/api/v1/mainSetting?api_secret_key=jUAagpsIyoao79imzgMPUTD1hMExtM6I";

let mainSettingsModel = {
  status: true,
  message: "data Return Successfully",
  data: [
    {
      id: 6,
      facebook:
        "https://www.facebook.com/people/TripU/61554724552976/?mibextid=vk8aRt",
      instagram: ".https://www.instagram.com/tripu534/",
      phone: "01110777579",
      whatsapp: "01110777579",
      email: "info@tripu.net",
      version: 1,
      open_door: "3.5",
      waiting_price: "2",
      country_tax: "10",
      kilo_price: "5",
      price_day_premium: null,
      kilo_price_premium: null,
      ocean: "2",
      company_commission: "5",
      company_tax: "6",
      price_day: null,
      peek_time_fees: [],
      name: {
        en: {
          name: "TripU",
        },
        ar: {
          name: "تريب يو",
        },
        fr: {
          name: "TripU",
        },
      },
      author: {
        en: {
          author: "Yahya Al-Sharifi",
        },
        ar: {
          author: "يحيى شريفى",
        },
        fr: {
          author: "Yahya Al-Sharifi",
        },
      },
      address: {
        en: {
          address: "null",
        },
        ar: {
          address: "",
        },
        fr: {
          address: "null",
        },
      },
      description: {
        en: {
          description: "",
        },
        ar: {
          description: "",
        },
        fr: {
          description: "",
        },
      },
      road_toll: {
        en: {
          road_toll: null,
        },
        ar: {
          road_toll: null,
        },
        fr: {
          road_toll: null,
        },
      },
    },
  ],
};

// console.log(`description===>${description}`);

// document.addEventListener("refreshMetadata", () => {

//   async function getMainSettings() {
//     //accountToken = window.localStorage.getItem("token");
//     try {
//       const response = await fetch(mainSettingsLink, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           //Authorization: `Bearer ${accountToken}`,
//         },
//         // body: JSON.stringify({}),
//       });

//       if (response.ok) {
//         const responseData = await response.json();
//         mainSettingsModel.data = responseData.data;
//         console.log("Successfully get Main Settings");
//       } else {
//         console.log("Network response was not OK: " + response.status);
//       }
//     } catch (error) {
//       console.log("Network response was not OK: " + error);
//     }
//   }
// });
// const refreshMetadataEvent = new Event("refreshMetadata");
// document.dispatchEvent(refreshMetadataEvent);

// #########################Start google map#####################
document.body.onload = function () {
  //getMainSettings();
  initializeMap();
};
function initializeMap() {
  const locations = [
    {
      lat_user: "30.002151",
      long_user: "31.1850012",
      lat_going: "30.0066944",
      long_going: "31.4514702",
      //user_id: "1",
      //captain_id: "1",
    },
  ];
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
  });
  const bounds = new google.maps.LatLngBounds();
  const userLocation = new google.maps.LatLng(
    parseFloat(locations[0].lat_user),
    parseFloat(locations[0].long_user)
  );
  const goingLocation = new google.maps.LatLng(
    parseFloat(locations[0].lat_going),
    parseFloat(locations[0].long_going)
  );
  const userMarker = new google.maps.Marker({
    position: userLocation,
    map: map,
    label: "U",
  });
  bounds.extend(userMarker.position);
  const goingMarker = new google.maps.Marker({
    position: goingLocation,
    map: map,
    label: "G",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
      scaledSize: new google.maps.Size(30, 40),
    },
  });
  bounds.extend(goingMarker.position);
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);

  const request = {
    origin: userLocation,
    destination: goingLocation,
    travelMode: google.maps.TravelMode.DRIVING,
  };
  directionsService.route(request, function (result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsRenderer.setDirections(result);
    }
  });

  const geocoder = new google.maps.Geocoder();
  geocodeLatLng(geocoder, userLocation, "fromAddress");
  geocodeLatLng(geocoder, goingLocation, "toAddress");

  /*const userInfoWindow = new google.maps.InfoWindow({
  content: `User ID: ${locations[0].user_id}`,
});*/
  userMarker.addListener("click", function () {
    userInfoWindow.open(map, userMarker);
  });

  /*const goingInfoWindow = new google.maps.InfoWindow({
  content: `Captain ID: ${locations[0].captain_id}`,
});*/
  goingMarker.addListener("click", function () {
    goingInfoWindow.open(map, goingMarker);
  });

  map.fitBounds(bounds);
}

function geocodeLatLng(geocoder, latLng, elementId) {
  geocoder.geocode({ location: latLng }, function (results, status) {
    if (status === "OK") {
      if (results[1]) {
        document.getElementById(elementId).textContent =
          results[1].formatted_address;
      }
    }
  });
}
// #########################End google map#####################
// let description = document.querySelector('meta[name="description"]');
// let author = document.querySelector('meta[name="author"]');

// // Function to get main settings
// async function getMainSettings() {
//   try {
//     const response = await fetch(mainSettingsLink, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         // Authorization: `Bearer ${accountToken}`,
//       },
//     });

//     if (response.ok) {
//       const responseData = await response.json();
//       mainSettingsModel.data = responseData.data;
//       let title = mainSettingsModel.data[0].author.en;
//       let des = mainSettingsModel.data[0].description.en;
//       if (author) author.innerText = title;
//       if (description) description.innerText = des;
//       console.log("Successfully get Main Settings");
//     } else {
//       console.log("Network response was not OK: " + response.status);
//     }
//   } catch (error) {
//     console.log("Error in fetching main settings: " + error);
//   }
// }

// // Event listener for refreshing metadata
// document.addEventListener("refreshMetadata", () => {
//   getMainSettings(); // Call the function to refresh metadata
//   console.log(`description===>${description.content}`);
//   console.log(`description===>${author.content}`);
// });

// // Example: Dispatch the event when you want to refresh metadata
// // This should be triggered based on some user action or a specific event
// const refreshMetadataEvent = new Event("refreshMetadata");
// document.dispatchEvent(refreshMetadataEvent);
let descriptionMeta = document.querySelector('meta[name="description"]');
let authorMeta = document.querySelector('meta[name="author"]');

// Function to get main settings
async function getMainSettings() {
  try {
    const response = await fetch(mainSettingsLink, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${accountToken}`,
      },
    });

    if (response.ok) {
      const responseData = await response.json();
      mainSettingsModel.data = responseData.data;

      // تحديث قيم العناصر meta
      if (descriptionMeta) {
        descriptionMeta.setAttribute('content', mainSettingsModel.data[0].description.en);
      }

      if (authorMeta) {
        authorMeta.setAttribute('content', mainSettingsModel.data[0].author.en);
      }

      console.log("Successfully get Main Settings");
    } else {
      console.log("Network response was not OK: " + response.status);
    }
  } catch (error) {
    console.log("Error in fetching main settings: " + error);
  }
}

// Event listener for refreshing metadata
document.addEventListener("refreshMetadata", () => {
  getMainSettings(); // استدعاء الوظيفة لتحديث البيانات الوصفية
  console.log(`description===>${descriptionMeta.getAttribute('content')}`);
  console.log(`author===>${authorMeta.getAttribute('content')}`);
});

// مثال: إرسال الحدث عندما تريد تحديث البيانات الوصفية
// يجب تنشيط ذلك بناءً على بعض فعل المستخدم أو حدث معين
const refreshMetadataEvent = new Event("refreshMetadata");
document.dispatchEvent(refreshMetadataEvent);
