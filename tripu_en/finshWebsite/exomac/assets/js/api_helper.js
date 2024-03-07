const baseUrl = "https://frontend.tripu.net/public/api/v1/user/register";

const AppData = {
  baseUrl: baseUrl,
  login_phone: `${baseUrl}/login_phone`,
  register: `${baseUrl}/register`,
  login: `${baseUrl}/login`,
  restPassword: `${baseUrl}/restPassword`,
  logout: `${baseUrl}/logout`,
  changePassword: `${baseUrl}/change-password`,
  access_token: "jUAagpsIyoao79imzgMPUTD1hMExtM6I",
  token: "",
};
const IsSignIn = document.getElementById("IsSignIn");
const profileName = document.getElementById("profileName");
/*#################LoginCaption ###########################*/
document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("Login");
  const emailCaption = document.getElementById("emailCaption");
  const passwordCaption = document.getElementById("passwordCaption");
  if (loginButton != null) {
    loginButton.addEventListener("click", (event) => {
      event.preventDefault();
      loginCaptions();
    });
  }
  async function loginCaptions() {
    const email = emailCaption.value;
    const password = passwordCaption.value;

    const data = {
      email: email,
      password: password,
      api_secret_key: AppData.access_token,
    };

    try {
      const response = await fetch(AppData.login, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        window.localStorage.setItem("token", responseData.access_token);
        window.localStorage.setItem("driverName", responseData.user.name);
        IsSignIn.style.display = "none";
        profileName.style.display = "block";
        console.log(responseData.user.name);
        console.log(responseData.user.email);
        console.log("Successfully logged in");
      } else {
        console.log("Network response was not OK: " + response.status);
      }
    } catch (error) {
      console.log("Network response was not OK: " + error);
    }
  }
});

/*#################Register Caption ###########################*/
// // register Area
document.addEventListener("DOMContentLoaded", () => {
  const name_caption = document.getElementById("name_caption");
  const email_caption = document.getElementById("email_caption");
  const phone_caption = document.getElementById("phone_caption");
  //const gender_caption = document.getElementById("gender_caption");
  const country_caption = document.getElementById("country_caption");
  const password_caption = document.getElementById("password_caption");
  const register = document.getElementById("register");
  let gender = "";
  if (register != null) {
    register.addEventListener("click", (event) => {
      event.preventDefault();

      Register();
    });
  }


  async function Register() {
    const data_register = {
      name: name_caption.value,
      phone: phone_caption.value,
      email: email_caption.value,
      password: password_caption.value,
      gender: gender,
      country_id: (country_caption.value = "65"),
      api_secret_key: AppData.access_token,
    };

    try {
      const response = await fetch(AppData.register, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data_register),
      });
      if (response.ok) {
        const responseData = await response.json();
        AppData.token = responseData.access_token;
        window.localStorage.setItem("driverName", responseData.user.name);
        console.log(responseData.user.name);
        console.log("Successfully registered");
      } else {
        console.log("Network response was not OK: " + response.status);
      }
    } catch (error) {
      console.log("Network response was not OK: " + error);
    }
  }

  function getGenderSelected() {
    gender = document.getElementById("gender").value;
    console.log(gender);
  }
});

/*#################Reset Password Caption ###########################*/

document.addEventListener("DOMContentLoaded", () => {
  const upDatePass = document.getElementById("upDatePass");
  const setPass = document.getElementById("setPass");
  if (setPass != null) {
    setPass.addEventListener("click", (event) => {
      event.preventDefault();
      ResetPassword();
    });
  }


  async function ResetPassword() {
    accountToken = window.localStorage.getItem("token");

    const data_reset = {
      password: upDatePass.value,
      api_secret_key: AppData.access_token,
    };

    try {
      const response = await fetch(AppData.changePassword, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accountToken}`,
        },
        body: JSON.stringify(data_reset),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Successfully Updated Password");
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
/*#################LogOut Caption ###########################*/

document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logout");

  logoutBtn.addEventListener("click", (event) => {
    event.preventDefault();
    logout();
  });

  async function logout() {
    accountToken = window.localStorage.getItem("token");

    const data_logout = {
      api_secret_key: AppData.access_token,
    };

    try {
      const response = await fetch(AppData.logout, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accountToken}`,
        },
        body: JSON.stringify(data_logout),
      });

      if (response.ok) {
        const responseData = await response.json();
        IsSignIn.style.display = "block";
        profileName.textContent = "Profile";
        profileName.style.display = "none";
        window.localStorage.clear();

        console.log("Successfully logged out");
      } else {
        console.log("Network response was not OK: " + response.status);
      }
    } catch (error) {
      console.log("Network response was not OK: " + error);
    }
  }
});


document.addEventListener("DOMContentLoaded", () => { });

profileName.textContent =
  window.localStorage.getItem("driverName") ?? "Profile";

if (window.localStorage.getItem("driverName") == null) {
  IsSignIn.style.display = "block";
  profileName.style.display = "none";
} else {
  IsSignIn.style.display = "none";
  profileName.style.display = "block";
  // location.reload();
}
