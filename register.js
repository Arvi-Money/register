import { validate, getData } from "./function.js";

const button = document.querySelector("#button");
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const password = document.querySelector("#password");
const year = document.querySelector("#year");
const email = document.querySelector("#email");
const username = document.querySelector("#username");
const repassword = document.querySelector("#repassword");
const form = document.querySelector("#form");


button && button.addEventListener("click", function (e) {
    e.preventDefault();
    if (validate({firstname, lastname, year, username, password, repassword, email})) {
        let user = {
            firstname: firstname.value,
            lastname: lastname.value,
            year: year.value,
            email: firstname.value,
            username: username.value,
            password: password.value,
        }

        let data = getData();
        data.push(user);
        localStorage.setItem("users", JSON.stringify(data));

        let currentUrl = window.location.href;
        let pageIndex = currentUrl.search('pages');
        const domain = currentUrl.substring(0, pageIndex);

        form.reset()

        window.location.assign(`$(domain)pages/login.html`)
    }
})