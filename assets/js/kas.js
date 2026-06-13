window.onload = function(){

    const user = JSON.parse(
        localStorage.getItem("currentUser")
    );

    if(!user){

        window.location.href =
            "login.html";

        return;
    }

    const formKas =
        document.getElementById("formKas");

    if(
        user.role !== "ketua" &&
        user.role !== "bendahara"
    ){

        formKas.style.display =
            "none";
    }

    let dataKas = JSON.parse(
        localStorage.getItem("dataKas")
    ) || [];

    tampilkanKas();

    document.getElementById("tambahKas")
    .addEventListener("click",function(){

        const nama =
            document.getElementById("namaSiswa")
            .value;

        const jumlah =
            parseInt(
                document.getElementById("jumlahKas")
                .value
            );

        if(!nama || !jumlah){

            alert(
                "Isi semua data!"
            );

            return;
        }

        dataKas.push({

            nama,
            jumlah

        });

        localStorage.setItem(

            "dataKas",

            JSON.stringify(dataKas)

        );

        tampilkanKas();

    });

    function tampilkanKas(){

        const list =
            document.getElementById("listKas");

        list.innerHTML = "";

        let total = 0;

        dataKas.forEach(item=>{

            total += item.jumlah;

            list.innerHTML += `
                <li>
                    ${item.nama}
                    -
                    Rp ${item.jumlah.toLocaleString('id-ID')}
                </li>
            `;

        });

        document.getElementById("totalKas")
        .textContent =
            "Rp " +
            total.toLocaleString(
                "id-ID"
            );
    }

};