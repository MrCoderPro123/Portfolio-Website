let darkMode;

if (localStorage.getItem("Dark Mode") === "On") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    darkMode = "On";
} else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    darkMode = "Off";
};

function toggleDarkMode() {
    if (darkMode === "Off") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        darkMode = "On";
        localStorage.setItem("Dark Mode", "On");
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        darkMode = "Off";
        localStorage.setItem("Dark Mode", "Off");
    };
};