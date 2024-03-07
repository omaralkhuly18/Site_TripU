//import { carMakerModel } from "./car_maker_model";

/*Profile model  class*/
var carBrandId = "";
var carModelId = "";
var typeOfCarId = "";
var yearSelectId = "";
const updateProfilePhotoLink =
  "https://testsilver.tripu.net/api/v1/driver/profile/media/updateUploadProfile";
const uploadAllMediaLink =
  "{{live}}/api/v1/driver/profile/media/uploadProfile";
const driversProfileLink =
  "{{live}}/api/v1/driver/drivers-profile?api_secret_key=jUAagpsIyoao79imzgMPUTD1hMExtM6I";

const getAllMediaLink =
  "{{live}}/api/v1/driver/profile/media/allMedia";
const getAllCarMakersLink =
  "{{live}}/api/v1/carMake?api_secret_key=jUAagpsIyoao79imzgMPUTD1hMExtM6I";
const api_secret_key = "jUAagpsIyoao79imzgMPUTD1hMExtM6I";
const newProfilePhoto =
  "{{live}}/api/v1/driver/profile/media/uploadProfile";

const getCarTypesLink =
  "{{live}}/api/v1/carType?api_secret_key=jUAagpsIyoao79imzgMPUTD1hMExtM6I";
let ProfileCaptionModel = {
  data: {
    id: 10,
    name: "Ezz",
    email: "abc@example",
    phone: "01013597782",
    gender: "male",
    inviteFriend: "null",
    captaincar: {
      id: 10,
      car_make_id: null,
      car_model_id: null,
      car_type_id: null,
      category_car_id: {
        id: 4,
        name: "C",
        status: "Active",
        create_dates: {
          created_at_human: "1 month ago",
          created_at: "23-11-14 11:54:26",
        },
        update_dates: {
          updated_at_human: "1 month ago",
          updated_at: "23-11-14 11:54:26",
        },
      },
      number_car: "م ن 3888",
      color_car: null,
      create_dates: {
        created_at_human: "2 months ago",
        created_at: "23-11-01 10:42:27",
      },
      update_dates: {
        updated_at_human: "2 months ago",
        updated_at: "23-11-01 10:42:27",
      },
    },
    profile: {
      id: 10,
      amountDay: "0.00",
      wallet: 0,
      point: "0",
      bio: null,
      rate: 0,
      number_trips: 0,
      number_personal: null,
      create_dates: {
        created_at_human: "2 months ago",
        created_at: "23-11-01 10:42:27",
      },
      update_dates: {
        updated_at_human: "2 months ago",
        updated_at: "23-11-01 10:42:27",
      },
    },
    country: {
      id: 65,
      name: "Egypt",
      status: 1,
      code: "20",
      logo: "{{live}}/assets/images/Eg.png",
      create_dates: {
        created_at_human: "1 month ago",
        created_at: "23-11-14 11:54:21",
      },
      update_dates: {
        updated_at_human: "1 month ago",
        updated_at: "23-11-14 11:54:21",
      },
    },
    fcm_token: null,
    status: "active",
    avatar: null,
    create_dates: {
      created_at_human: "2 months ago",
      created_at: "23-11-01 10:42:27",
    },
    update_dates: {
      updated_at_human: "19 hours ago",
      updated_at: "24-01-08 04:36:58",
    },
  },
};
const profileBtn = document.getElementById("profile");
const caption_name = document.getElementById("caption_name");
const caption_country = document.getElementById("caption_country");
const caption_rating = document.getElementById("caption_rating");
const captain_email = document.getElementById("captain_email");
const captain_phone = document.getElementById("captain_phone");
const captain_gender = document.getElementById("captain_gender");
const captain_img = document.getElementById("captain_img");
const allPhotos_status = document.querySelectorAll("#photo_status");
const reject_reason = document.querySelectorAll("#reject_reason");
const media_images = document.querySelectorAll("#media_images");
const media_title = document.querySelectorAll("#title_media");
const media_img_car = document.querySelectorAll("#media_img_car");
const photo_status = document.getElementById("photo_status");
const photo_type = document.getElementById("photo_type");
const image_path = document.getElementById("image_path");
const media_type = document.querySelectorAll("#media_type");
const photo_status_car = document.querySelectorAll("#photo_status_car");
const reject_reason_car = document.querySelectorAll("#reject_reason_car");
const captionRating = document.getElementById("caption_rating");
const stars = document.querySelectorAll(".rating .fa-star");
const label_avatar = document.getElementById("label_avatar");
const label_criminal = document.getElementById("label_criminal");
const label_id_front = document.getElementById("label_id_front");
const label_id_back = document.getElementById("label_id_back");
const label_licenseCardF = document.getElementById("label_licenseCardF");
const label_licenseCardB = document.getElementById("label_licenseCardB");
const label_carLicenseF = document.getElementById("label_carLicenseF");
const label_carLicenseB = document.getElementById("label_carLicenseB");
const label_inside = document.getElementById("label_inside");
const label_front = document.getElementById("label_front");
const label_back = document.getElementById("label_back");
const label_left = document.getElementById("label_left");
const label_right = document.getElementById("label_right");
const saveMediaPersonal = document.getElementById("saveMediaPersonal");
const uploadCompleteFront = document.getElementById("upload_complete_front");
const uploadCompleteBack = document.getElementById("upload_complete_back");
const uploadCompleteRight = document.getElementById("upload_complete_right");
const uploadCompleteLeft = document.getElementById("upload_complete_left");
const uploadCompleteInSide = document.getElementById("upload_complete_inSide");
const upload_complete_IdA = document.getElementById("upload_complete_IdA");
const upload_complete_IdB = document.getElementById("upload_complete_IdB");
const upload_complete_LicenseCarA = document.getElementById(
  "upload_complete_LicenseCarA"
);
const upload_complete_LicenseCarB = document.getElementById(
  "upload_complete_LicenseCarB"
);
const upload_complete_LicenseA = document.getElementById(
  "upload_complete_LicenseA"
);
const upload_complete_LicenseB = document.getElementById(
  "upload_complete_LicenseB"
);
const upload_complete_Criminal = document.getElementById(
  "upload_complete_Criminal"
);
const upload_complete_Avatar = document.getElementById(
  "upload_complete_Avatar"
);
let allMedia = {
  message: "",
  data: [
    {
      photo_status: "accept",
      photo_type: "id_photo_back",
      reject_reason: null,
      image_path:
        "{{live}}/dashboard/img/Abdo__Amer_dcd1ddf3-e93e-4d87-9bf2-8382fbfc2aa7/personal/id_photo_back.jpeg",
    },
  ],
};
const id_card_fornt = document.getElementById("id_card_fornt");
const id_card_back = document.getElementById("id_card_back");
const personalAvatar = document.getElementById("personalAvatar");
const criminal = document.getElementById("criminal");
const carLicenseFront = document.getElementById("carLicenseFront");
const carLicenseBack = document.getElementById("carLicenseBack");
const LicenseCardFront = document.getElementById("LicenseCardFront");
const LicenseCardBack = document.getElementById("LicenseCardBack");
const plateNumber = document.getElementById("plateNumber");
const carColor = document.getElementById("carColor");
const frontCar = document.getElementById("frontCar");
const backCar = document.getElementById("backCar");
const rightCar = document.getElementById("rightCar");
const leftCar = document.getElementById("leftCar");
const insideCar = document.getElementById("insideCar");
const carBrand = document.getElementById("carbrand");
const carModel = document.getElementById("carModel");
const saveMedia = document.getElementById("saveMedia");
const typeOfCar = document.getElementById("typeOfCar");
const idNumber = document.getElementById("idNumber");
const valid_IdNumber = document.getElementById("valid_IdNumber");
const yearSelect = document.getElementById("theYearOfTheCar");
const carBtn = document.getElementById("carBtn");
const carFils = document.getElementById("carFils");
/*############# Car maker Model #######################*/
let carMakerModel = {
  status: true,
  message: "data Return Successfully",
  data: [
    {
      id: 1,
      name: "Acura",
      status: "Active",
      cars_model: [
        {
          id: 1,
          name: "CL",
          status: "Active",
          create_dates: {
            created_at_human: "2 months ago",
            created_at: "23-11-14 11:54:26",
          },
          update_dates: {
            updated_at_human: "2 months ago",
            updated_at: "23-11-14 11:54:26",
          },
        },
      ],
      create_dates: {
        created_at_human: "2 months ago",
        created_at: "23-11-14 11:54:26",
      },
      update_dates: {
        updated_at_human: "2 months ago",
        updated_at: "23-11-14 11:54:26",
      },
    },
  ],
};
let carTypesModel = {
  data: [
    {
      id: 1,
      name: "سيدان",
      status: "Active",
      price_normal: "50",
      price_premium: "75",
      before_price_normal: "150",
      discount_price_normal: "50",
      discount_price_premium: "250",
      before_price_premium: "50",
    },
  ],
};
/* Profile Api  fetch */
document.addEventListener("DOMContentLoaded", () => {
  profileBtn.addEventListener("click", (event) => {
    event.preventDefault();
    getProfileCaption();
    getAllMedia();
    getAllMediaToCar();
  });

  async function getProfileCaption() {
    accountToken = window.localStorage.getItem("token");
    try {
      const response = await fetch(driversProfileLink, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accountToken}`,
        },
        // body: JSON.stringify({}),
      });

      if (response.ok) {
        const responseData = await response.json();
        ProfileCaptionModel.data = responseData.data;
        updateRating(3);
        caption_name.textContent = ProfileCaptionModel.data.name;
        caption_country.textContent = ProfileCaptionModel.data.country.name;
        caption_rating.textContent = ProfileCaptionModel.data.profile.rate;
        captain_email.textContent = ProfileCaptionModel.data.email;
        captain_phone.textContent = ProfileCaptionModel.data.phone;
        captain_gender.textContent = ProfileCaptionModel.data.gender;
        captain_img.src = ProfileCaptionModel.data.avatar;
        // ProfileCaptionModel.data.email = responseData.data.email;
        // ProfileCaptionModel.data.name = responseData.data.name;
        // ProfileCaptionModel.data.phone = responseData.data.phone;
        // ProfileCaptionModel.data.profile.rate = responseData.data.profile.rate;
        // console.log(ProfileCaptionModel.data.email);
        // console.log(ProfileCaptionModel.data.name);
        // console.log(ProfileCaptionModel.data.phone);
        // console.log(ProfileCaptionModel.data.profile.rate);
        console.log("Successfully get Profile Caption");
      } else {
        console.log("Network response was not OK: " + response.status);
        //throw new Error("Network response was not OK");
      }
    } catch (error) {
      console.log("Network response was not OK: " + error);
      //throw new Error("Error in response: " + error.message);
    }
  }
});
/*#################################Get All Media ############################################# */
//////////////////////////

async function getAllMedia() {
  accountToken = window.localStorage.getItem("token");

  const data = {
    type: "personal",
    api_secret_key: api_secret_key,
  };

  try {
    const response = await fetch(getAllMediaLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accountToken}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      allMedia = responseData;
      allMedia.data.forEach((media, index) => {
        if (media.photo_type == "personal_avatar") {
          media_title[index].textContent = "Personal Image";
        } else if (media.photo_type == "id_photo_front") {
          media_title[index].textContent = "ID front Image";
        } else if (media.photo_type == "id_photo_back") {
          media_title[index].textContent = "ID Back Image";
        } else if (media.photo_type == "criminal_record") {
          media_title[index].textContent = "Criminal Image";
        } else if (media.photo_type == "captain_license_front") {
          media_title[index].textContent = "Caption License front";
        } else if (media.photo_type == "captain_license_back") {
          media_title[index].textContent = "Caption License Back";
        } else {
          media_title[index].textContent = media.photo_type.toUpperCase();
        }
        media_images[index].src =
          media.image_path ??
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freeiconspng.com%2Fimages%2Fload-icon-png&psig=AOvVaw2Eeqnc_7UBmqRIhAdqjToA&ust=1705322875229000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCPjaxvP03IMDFQAAAAAdAAAAABAE";
        if (media.photo_status == "not_active") {
          allPhotos_status[index].style.color = "orange";
          // return (allPhotos_status[index].textContent = "Not active");
          return (allPhotos_status[
            index
          ].innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>`);
        }
        if (media.photo_status == "rejected") {
          allPhotos_status[index].style.color = "red";
          // reject_reason[index].textContent = media.reject_reason;

          reject_reason[index].style.color = "red";
          reject_reason[index].style.fontSize = "25px";
          reject_reason[index].textContent = media.reject_reason;
          // return (allPhotos_status[index].textContent = "rejected");
          return (allPhotos_status[
            index
          ].innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #f40606;"></i>`);
        }
        if (media.photo_status == "accept") {
          allPhotos_status[index].style.color = "green";
          allPhotos_status[index].textContent = "Accepted";

          return (allPhotos_status[
            index
          ].innerHTML = `<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i>`);
        }
      });
      /*2 */
      console.log(allMedia.message);
      console.log("Successfully get All Media to Personal");
    } else {
      console.log("Network response was not OK: " + response.status);
    }
  } catch (error) {
    console.log("Network response was not OK: " + error);
  }
}
/*####################################*/

async function getAllMediaToCar() {
  accountToken = window.localStorage.getItem("token");

  const data = {
    type: "car",
    api_secret_key: api_secret_key,
  };

  try {
    const response = await fetch(getAllMediaLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accountToken}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      allMedia = responseData;
      allMedia.data.forEach((media, index) => {
        media_type[index].textContent = media.photo_type;
        media_img_car[index].src =
          media.image_path ??
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freeiconspng.com%2Fimages%2Fload-icon-png&psig=AOvVaw2Eeqnc_7UBmqRIhAdqjToA&ust=1705322875229000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCPjaxvP03IMDFQAAAAAdAAAAABAE";
        if (media.photo_status == "not_active") {
          photo_status_car[index].style.color = "gray";
          return (photo_status_car[index].textContent = "Not active");
        }
        if (media.photo_status == "rejected") {
          photo_status_car[index].style.color = "red";
          // reject_reason_car[index].textContent = media.reject_reason;
          reject_reason_car[
            index
          ].innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #f40606;"></i>`;
          reject_reason_car[index].style.color = "red";
          return (photo_status_car[index].textContent = "rejected");
        }
        if (media.photo_status == "accept") {
          photo_status_car[index].style.color = "green";
          return (photo_status_car[index].textContent = "Accepted");
        }
      });
      /*2 */
      console.log(allMedia.message);
      console.log("Successfully get All Media To Car");
    } else {
      console.log("Network response was not OK: " + response.status);
    }
  } catch (error) {
    console.log("Network response was not OK: " + error);
  }
}
/*########################################### */

// Function to update the star rating
function updateRating(rating) {
  // Reset all stars to default color
  stars.forEach((star) => star.classList.remove("checked"));

  // Update the caption rating text
  captionRating.textContent = rating;

  // Color the stars up to the rating value
  for (let i = 0; i < rating; i++) {
    stars[i].classList.add("checked");
  }
}
/*######################Upload Caption All Media ###########################*/

carFils.addEventListener("click", (event) => {
  event.preventDefault();

  getCarMaker();
  getCarType();
});
async function getCarMaker() {
  //accountToken = window.localStorage.getItem("token");
  try {
    const response = await fetch(getAllCarMakersLink, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${accountToken}`,
      },
      // body: JSON.stringify({}),
    });

    if (response.ok) {
      const responseData = await response.json();
      carMakerModel.data = responseData.data;
      carMakerModel.data.forEach((model, index) => {
        //console.log(`carName##` + carMakerModel.data[index].name);
        //carBrand.innerHTML = `<option value=${carMakerModel.data[index].name}>${carMakerModel.data[index].name}</option>`;
        let myOption = document.createElement("option");
        myOption.setAttribute("value", carMakerModel.data[index].id);
        myOption.textContent = carMakerModel.data[index].name;
        // console.log(
        //   ` carMakerModel.data[index].id==> ${carMakerModel.data[index].id}`
        // );
        carBrand.appendChild(myOption);
        myOption.setAttribute("number", index);

        for (let i = 0; i < carMakerModel.data[index].cars_model.length; i++) {
          let myOption = document.createElement("option");
          myOption.setAttribute(
            "value",
            carMakerModel.data[index].cars_model[i].name
          );

          myOption.textContent = carMakerModel.data[index].cars_model[i].name;
          carModel.appendChild(myOption);
          //console.log(`model==` + carMakerModel.data[53].cars_model[i].name);
        }
      });

      // });
      console.log("Successfully get Car Maker");
    } else {
      console.log("Network response was not OK: " + response.status);
      //throw new Error("Network response was not OK");
    }
  } catch (error) {
    console.log("Network response was not OK: " + error);
    //throw new Error("Error in response: " + error.message);
  }
}

carBrand.addEventListener("change", async (e) => {
  const selectedOption = e.target.options[e.target.selectedIndex];
  const numberAttribute = parseInt(selectedOption.getAttribute("number"));
  //console.log(`id===>${numberAttribute + 1}+car brand`);
  try {
    const response = await fetch(getAllCarMakersLink, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const responseData = await response.json();
      carMakerModel.data = responseData.data;
      carModel.innerHTML = "";

      carMakerModel.data.forEach((model, index) => {
        for (let i = 0; i < carMakerModel.data[index].cars_model.length; i++) {
          let myOption = document.createElement("option");

          myOption.setAttribute(
            "value",
            carMakerModel.data[numberAttribute].cars_model[i].id
          );

          myOption.textContent =
            carMakerModel.data[numberAttribute].cars_model[i].name;
          carModel.appendChild(myOption);
        }
      });

      console.log("Successfully get Car Maker modelName changed");
    } else {
      console.log("Network response was not OK: " + response.status);
    }
  } catch (error) {
    console.log("Network response was not OK: " + error);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var currentYear = new Date().getFullYear();
  for (var year = 2000; year <= currentYear; year++) {
    var option = document.createElement("option");
    option.value = year;
    option.text = year.toString();
    // console.log(option.text);
    yearSelect.add(option);
  }
});

async function getCarType() {
  //accountToken = window.localStorage.getItem("token");
  try {
    const response = await fetch(getCarTypesLink, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${accountToken}`,
      },
      // body: JSON.stringify({}),
    });

    if (response.ok) {
      const responseData = await response.json();
      carTypesModel.data = responseData.data;
      carTypesModel.data.forEach((model, index) => {
        //typeOfCar selector
        //console.log(`carName##` + carMakerModel.data[index].name);
        //carBrand.innerHTML = `<option value=${carMakerModel.data[index].name}>${carMakerModel.data[index].name}</option>`;
        let myOption = document.createElement("option");
        myOption.setAttribute("value", carTypesModel.data[index].id);
        myOption.value = carTypesModel.data[index].id;
        myOption.textContent = carTypesModel.data[index].name.toString();
        typeOfCar.add(myOption);
        // console.log(`id===> ${carTypesModel.data[index].id} car type`);
        //myOption.textContent = carMakerModel.data[index].name;
        //carBrand.appendChild(myOption);
      });

      // });
      console.log("Successfully get Car Types");
    } else {
      console.log("Network response was not OK: " + response.status);
      //throw new Error("Network response was not OK");
    }
  } catch (error) {
    console.log("Network response was not OK: " + error);
    //throw new Error("Error in response: " + error.message);
  }
}
function validateFileFrontCar() {
  if (frontCar.value == null) {
    uploadCompleteFront.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #f40606;"></i> Please select image`;
  } else {
    label_front.style.display = "none";
    uploadCompleteFront.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i> Image Selected Completed`;
  }
}
function validateFileBackCar() {
  if (backCar.value == null) {
    uploadCompleteBack.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #f40606;"></i> Please select image`;
  } else {
    label_back.style.display = "none";
    uploadCompleteBack.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i> Image Selected Completed`;
  }
}
function validateFileRightCar() {
  if (rightCar.value == null) {
    uploadCompleteRight.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #f40606;"></i> Please select image`;
  } else {
    label_right.style.display = "none";
    uploadCompleteRight.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i> Image Selected Completed`;
  }
}
function validateFileLeftCar() {
  if (leftCar.value == null) {
    uploadCompleteLeft.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #f40606;"></i> Please select image`;
  } else {
    label_left.style.display = "none";
    uploadCompleteLeft.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i> Image Selected Completed`;
  }
}
function validateFileInSideCar() {
  if (insideCar.value == null) {
    uploadCompleteInSide.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #f40606;"></i> Please select image`;
  } else {
    label_inside.style.display = "none";
    uploadCompleteInSide.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i> Image Selected Completed`;
  }
}
////////////////////////////////////
function validateFileIdA() {
  if (id_card_fornt.value == null) {
    upload_complete_IdA.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #f40606;"></i> Please select image`;
  } else {
    label_id_front.style.display = "none";
    upload_complete_IdA.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i> Image Selected Completed`;
  }
}
function validateFileIdB() {
  if (id_card_back.value == null) {
    upload_complete_IdB.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #f40606;"></i> Please select image`;
  } else {
    label_id_back.style.display = "none";
    upload_complete_IdB.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i> Image Selected Completed`;
  }
}
function validateFileLicenseCarA() {
  if (carLicenseFront.value == null) {
    upload_complete_LicenseCarA.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #f40606;"></i> Please select image`;
  } else {
    label_carLicenseF.style.display = "none";
    upload_complete_LicenseCarA.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i> Image Selected Completed`;
  }
}
function validateFileLicenseCarB() {
  if (carLicenseBack.value == null) {
    upload_complete_LicenseCarB.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #f40606;"></i> Please select image`;
  } else {
    label_carLicenseB.style.display = "none";
    upload_complete_LicenseCarB.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i> Image Selected Completed`;
  }
}
function validateFileLicenseA() {
  if (LicenseCardFront.value == null) {
    upload_complete_LicenseA.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #f40606;"></i> Please select image`;
  } else {
    label_licenseCardF.style.display = "none";
    upload_complete_LicenseA.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i> Image Selected Completed`;
  }
}
function validateFileLicenseB() {
  if (LicenseCardBack.value == null) {
    upload_complete_LicenseB.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #f40606;"></i> Please select image`;
  } else {
    label_licenseCardB.style.display = "none";
    upload_complete_LicenseB.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i> Image Selected Completed`;
  }
}
function validateFileCriminal() {
  if (criminal.value == null) {
    upload_complete_Criminal.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #f40606;"></i> Please select image`;
  } else {
    label_criminal.style.display = "none";
    upload_complete_Criminal.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i> Image Selected Completed`;
  }
}
function validateFileAvatar() {
  if (personalAvatar.value == null) {
    upload_complete_Avatar.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #f40606;"></i> Please select image`;
  } else {
    label_avatar.style.display = "none";
    upload_complete_Avatar.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i> Image Selected Completed`;
  }
}
frontCar.addEventListener("change", validateFileFrontCar);
backCar.addEventListener("change", validateFileBackCar);
rightCar.addEventListener("change", validateFileRightCar);
leftCar.addEventListener("change", validateFileLeftCar);
insideCar.addEventListener("change", validateFileInSideCar);
id_card_fornt.addEventListener("change", validateFileIdA);
id_card_back.addEventListener("change", validateFileIdB);
personalAvatar.addEventListener("change", validateFileAvatar);
criminal.addEventListener("change", validateFileCriminal);
LicenseCardBack.addEventListener("change", validateFileLicenseB);
LicenseCardFront.addEventListener("change", validateFileLicenseA);
carLicenseFront.addEventListener("change", validateFileLicenseCarA);
carLicenseBack.addEventListener("change", validateFileLicenseCarB);
idNumber.addEventListener("input", validateEgyptianNationalID);
idNumber.maxLength = 14;
function validateEgyptianNationalID() {
  const idValue = idNumber.value.trim(); // Trim leading/trailing spaces

  if (/^\d{14}$/.test(idValue)) {
    valid_IdNumber.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i> Valid ID Number`;
    return true;
  }
  valid_IdNumber.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #f40606;"></i> Invalid ID Number`;
  return false;
}
/////////////////////////////////////////////////////////////////////
/**Get id to all media */

carBrand.addEventListener("change", async (e) => {
  const selectedOption = e.target.options[e.target.selectedIndex].value;
  console.log(selectedOption);
  carBrandId = selectedOption;
});
carModel.addEventListener("change", async (e) => {
  const selectedOption = e.target.options[e.target.selectedIndex].value;
  console.log(selectedOption);
  carModelId = selectedOption;
});
typeOfCar.addEventListener("change", async (e) => {
  const selectedOption = e.target.options[e.target.selectedIndex].value;
  console.log(selectedOption);
  typeOfCarId = selectedOption;
});
yearSelect.addEventListener("change", async (e) => {
  const selectedOption = e.target.options[e.target.selectedIndex].value;
  console.log(selectedOption);
  yearSelectId = selectedOption;
});
/*#####################uploadMediaToCar #############################*/

async function uploadMediaToCar() {
  const accountToken = window.localStorage.getItem("token");

  const data = {
    personal_avatar: personalAvatar.file,
    id_photo_front: id_card_fornt.file,
    id_photo_back: id_card_back.file,
    criminal_record: criminal.file,
    captain_license_front: LicenseCardFront.file,
    captain_license_back: LicenseCardBack.file,
    car_license_front: carLicenseFront.file,
    car_license_back: carLicenseBack.file,
    car_front: frontCar.file,
    car_back: backCar.file,
    car_right: rightCar.file,
    car_left: leftCar.file,
    car_inside: insideCar.file,
    type: "car",
    api_secret_key: api_secret_key,
  };

  console.log(data.toString());

  try {
    const response = await fetch(updateProfilePhotoLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accountToken}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
      console.log(responseData.data.toString());
      console.log("Profile images updated successfully");
    } else {
      console.log("Network response was not OK: " + response.status);
    }
  } catch (error) {
    console.log("Error in network response: " + error);
  }
}
async function uploadMediaToPersonal() {
  const accountToken = window.localStorage.getItem("token");

  const data = {
    personal_avatar: personalAvatar.file,
    id_photo_front: id_card_fornt.file,
    id_photo_back: id_card_back.file,
    criminal_record: criminal.file,
    captain_license_front: LicenseCardFront.file,
    captain_license_back: LicenseCardBack.file,
    car_license_front: carLicenseFront.file,
    car_license_back: carLicenseBack.file,
    car_front: frontCar.file,
    car_back: backCar.file,
    car_right: rightCar.file,
    car_left: leftCar.file,
    car_inside: insideCar.file,
    type: "personal",
    api_secret_key: api_secret_key,
  };
  console.log(data.toString());
  try {
    const response = await fetch(updateProfilePhotoLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accountToken}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
      console.log(responseData.data.toString());
      console.log("Profile images updated successfully");
    } else {
      console.log("Network response was not OK: " + response.status);
    }
  } catch (error) {
    console.log("Error in network response: " + error);
  }
}

// async function newProfilePhotoToCar() {
//   const accountToken = window.localStorage.getItem("token");

//   const formData = new FormData();
//   formData.append("car_license_front", carLicenseFront.files[0]);
//   formData.append("car_license_back", carLicenseBack.files[0]);
//   formData.append("car_front", frontCar.files[0]);
//   formData.append("car_back", backCar.files[0]);
//   formData.append("car_right", rightCar.files[0]);
//   formData.append("car_left", leftCar.files[0]);
//   formData.append("car_inside", insideCar.files[0]);
//   formData.append("type", "car");
//   formData.append("api_secret_key", api_secret_key);

//   try {
//     const response = await fetch(newProfilePhoto, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${accountToken}`,
//       },
//       body: formData,
//     });

//     if (response.ok) {
//       const responseData = await response.json();
//       console.log(responseData);
//       console.log(responseData.data);
//       console.log("Upload Profile Media Successfully");
//     } else {
//       console.log("Network response was not OK: " + response.status);
//     }
//   } catch (error) {
//     console.log("Error in network response: " + error);
//   }
// }

// saveMedia.addEventListener("click", (event) => {
//   event.preventDefault();
//   newProfilePhotoToCar();
// });
/*@@@@@@@@@@@@@@@@ */
async function newProfilePhotoToPerson() {
  const accountToken = window.localStorage.getItem("token");

  const formData = new FormData();
  formData.append("personal_avatar", personalAvatar.files[0]);
  formData.append("id_photo_front", id_card_fornt.files[0]);
  formData.append("id_photo_back", id_card_back.files[0]);
  formData.append("criminal_record", criminal.files[0]);
  formData.append("captain_license_front", LicenseCardFront.files[0]);
  formData.append("captain_license_back", LicenseCardBack.files[0]);
  formData.append("car_license_front", carLicenseFront.files[0]);
  formData.append("car_license_back", carLicenseBack.files[0]);
  formData.append("car_front", frontCar.files[0]);
  formData.append("car_back", backCar.files[0]);
  formData.append("car_right", rightCar.files[0]);
  formData.append("car_left", leftCar.files[0]);
  formData.append("car_inside", insideCar.files[0]);
  formData.append("number_personal", idNumber.value);
  formData.append("car_make_id", carBrand.value);
  formData.append("car_model_id", carModel.value);
  formData.append("car_type_id", typeOfCar.value);
  formData.append("number_car", plateNumber.value);
  formData.append("color_car", carColor.value);
  formData.append("year_car", yearSelect.value);
  formData.append("type", "personal");
  formData.append("api_secret_key", api_secret_key);

  try {
    const response = await fetch(newProfilePhoto, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accountToken}`,
      },
      body: formData,
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
      console.log(responseData.data);
      console.log("Upload Profile Media Successfully");
    } else {
      console.log("Network response was not OK: " + response.status);
    }
  } catch (error) {
    console.log("Error in network response: " + error);
  }
}

saveMediaPersonal.addEventListener("click", (event) => {
  event.preventDefault();

  newProfilePhotoToPerson();
});
/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */
async function newProfilePhotoToCar() {
  const accountToken = window.localStorage.getItem("token");

  const formData = new FormData();
  formData.append("car_license_front", carLicenseFront.files[0]);
  formData.append("car_license_back", carLicenseBack.files[0]);
  formData.append("car_front", frontCar.files[0]);
  formData.append("car_back", backCar.files[0]);
  formData.append("car_right", rightCar.files[0]);
  formData.append("car_left", leftCar.files[0]);
  formData.append("car_inside", insideCar.files[0]);
  formData.append("type", "car");
  formData.append("api_secret_key", api_secret_key);

  try {
    const response = await fetch(newProfilePhoto, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accountToken}`,
      },
      body: formData,
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
      console.log(responseData.data);
      console.log("Upload Profile Media Successfully");
    } else {
      console.log("Network response was not OK: " + response.status);
    }
  } catch (error) {
    console.log("Error in network response: " + error);
  }
}

saveMedia.addEventListener("click", (event) => {
  event.preventDefault();
  newProfilePhotoToCar();
});
