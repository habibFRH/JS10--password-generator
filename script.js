const GenerateButton = document.getElementById("generateButton");
const CopyButton = document.getElementById("copyButton");
const show = document.querySelector(".show");
const passwordInput = document.getElementById("password");

GenerateButton.onclick = function generatePassword() {
    const char = "1234567890)=°+1azertyuiop^$qsdfghjklmù*wxcvbn,;:!";
    const pwdlength = 16;
    let password = "";
    for (let i = 0; i < pwdlength; i++) {
        let generatepwd = Math.floor(Math.random() * char.length);
        password += char.substring(generatepwd, generatepwd + 1);
    }
    passwordInput.value = password;
};

CopyButton.onclick = function copyPassword() {
    const passwordvalue = passwordInput.value;
    if (passwordvalue.trim() === "") {
        alert("Password is Empty. Generate a password!");
    } else {
        const tempInput = document.createElement("input");
        tempInput.value = passwordvalue;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);

        show.textContent = "Your new password is: " + passwordvalue;
        show.classList.add("active");
        setTimeout(() => {
            show.classList.remove("active");
        }, 2000);
        passwordInput.value = "";
    }
};
