document.getElementById("loginForm")

.addEventListener(

    "submit",

    function(e){

        e.preventDefault();

        const username =
            document.getElementById(
                "username"
            ).value
            .trim()
            .toLowerCase();

        const password =
            document.getElementById(
                "password"
            ).value
            .trim();

        const user =
            users[username];

        if(

            user &&

            user.password === password

        ){

            localStorage.setItem(

                "userLogin",

                JSON.stringify(user)

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
