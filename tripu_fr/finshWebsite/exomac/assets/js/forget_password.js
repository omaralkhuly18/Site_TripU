document.addEventListener("DOMContentLoaded", () => {
  const baseUrl = "https://silver.tripu.net/api/v1/driver";

  const AppData = {
    baseUrl: baseUrl,
    login_phone: `${baseUrl}/login_phone`,
    register: `${baseUrl}/register`,
    login: `${baseUrl}/login`,
    restPassword: `${baseUrl}/restPassword`,
    access_token: "9BKZASpQqbi5LieDS2NqAgi6CKL9IWIM",
  };

  const phoneForgotten = document.getElementById("phone_forgot");
  const passwordForgotten = document.getElementById("password_forgot");
  const sendForgotten = document.getElementById("send_forgot");

  sendForgotten.addEventListener("click", (event) => {
    event.preventDefault();
    forgetPassword();
  });

  async function forgetPassword() {
    console.log(phoneForgotten.value);
    console.log(passwordForgotten.value);

    const dataMap = {
      phone: phoneForgotten.value,
      password: passwordForgotten.value,
      api_secret_key: AppData.access_token,
    };

    try {
      const response = await fetch(AppData.restPassword, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataMap),
      });

      if (response.ok) {
        const responseData = await response.json();

        console.log(responseData.message);
        console.log(responseData.status);
        console.log("Successfully Forgotten");
      } else {
        console.log("Network response was not OK: " + response.status);
        // throw new Error("Network response was not OK");
      }
    } catch (error) {
      console.log("Network response was not OK: " + error);
      // throw new Error("Error in response: " + error.message);
    }
  }
});
