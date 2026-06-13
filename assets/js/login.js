document.getElementById("loginForm")

.addEventListener(

    "submit",

    function(e){

        e.preventDefault();

        const username =
            document.getElementById(
                "username"
            ).value
            .trim();

        const password =
            document.getElementById(
                "password"
            ).value
            .trim();

        const user = Object.values(users)

        .find(

            u =>

            u.username === username &&

            u.password === password

        );

        if(user){

            localStorage.setItem(

                "userLogin",

                JSON.stringify(data)

            );

            window.location.href =
                "dashboard.html";

        }

        else{

            alert(

                "Username atau password salah!"

            );

        }

    }

);
