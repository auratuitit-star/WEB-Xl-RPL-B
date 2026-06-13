document.getElementById("loginForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const username = document.getElementById("username").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();

    console.log("Username input:", username);
    console.log("Password input:", password);
    console.log("Data users:", users);

    const user = users[username];

    console.log("Data user ditemukan:", user);

    if (user) {

        console.log("Password users.js:", user.password);
        console.log("Password cocok:", user.password === password);

        if (user.password === password) {

            localStorage.setItem(
                "userLogin",
                JSON.stringify(user)
            );

            alert("Login berhasil!");

            window.location.href = "dashboard.html";

        } else {

            alert("Password salah!");

        }

    } else {

        alert("Username tidak ditemukan!");

    }

});
