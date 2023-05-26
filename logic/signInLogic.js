const signInInputArea = document.getElementById("signIn");
const alreadySignedIn = document.getElementById("singedIn");
const signInInputs = {
    username: document.getElementById("username"),
    email: document.getElementById("email"),
    btn: document.getElementById("signInBtn")
};

if (localStorage.getItem("userCompAdress")) {
    alreadySignedIn.style.display = "block";
    signInInputArea.style.display = "none";
    let email = localStorage.getItem("userCompAdress");
    let emailNode = document.createTextNode(email);
    alreadySignedIn.appendChild(emailNode);
} else {
    alreadySignedIn.style.display = "none";
    signInInputArea.style.display = "block";
}

signInInputs.btn.addEventListener("click", () => {
    let userCompAdress = signInInputs.username.value + "@ustudiomrcoder.com";
    localStorage.setItem("userCompAdress", userCompAdress);
    let emailNode = document.createTextNode(userCompAdress);
    signInInputArea.appendChild(emailNode);
});
