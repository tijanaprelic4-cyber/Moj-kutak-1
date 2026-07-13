function prikazi(id) {
    document.querySelectorAll(".stranica").forEach(function(stranica) {
        stranica.classList.remove("aktivna");
    });

    const stranica = document.getElementById(id);

    if (stranica) {
        stranica.classList.add("aktivna");
    }
}

function sacuvajDnevnik() {
    const tekst = document.getElementById("tekstDnevnika").value;
    localStorage.setItem("dnevnik", tekst);
    alert("📖 Dnevnik je sačuvan.");
}

function sacuvajIshranu() {
    const podaci = {
        dorucak: document.getElementById("dorucak").value,
        rucak: document.getElementById("rucak").value,
        vecera: document.getElementById("vecera").value
    };

    localStorage.setItem("ishrana", JSON.stringify(podaci));
    alert("🍽 Ishrana je sačuvana.");
}

function sacuvajZdravlje() {
    const podaci = {
        voda: document.getElementById("voda").value,
        koraci: document.getElementById("koraci").value
    };

    localStorage.setItem("zdravlje", JSON.stringify(podaci));
    alert("💚 Zdravlje je sačuvano.");
}

window.onload = function () {

    const datum = document.getElementById("datum");

    if (datum) {
        datum.textContent = new Date().toLocaleDateString("sr-RS", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });
    }

    prikazi("pocetna");
};

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker.register("./sw.js");
    });
}