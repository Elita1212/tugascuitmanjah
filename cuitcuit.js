// Fungsi pembantu untuk mencetak hasil ke layar via DOM
    function cetakKeDOM(namaGame, user, komputer, status) {
        const areaHasil = document.getElementById("hasil-game");
        areaHasil.innerHTML = `
            <p><strong>Mode:</strong> ${namaGame}</p>
            <p>Anda memilih: <b>${user}</b> | Komputer memilih: <b>${komputer}</b></p>
            <h4>Hasil: ${status}</h4>
        `;
    }

    // 1. FUNCTION SUIT BATU GUNTING KERTAS
    function suitBatuGuntingKertas() {
        const pilihan = ["batu", "gunting", "kertas"];
        let inputUser = prompt("Masukkan pilihan (batu / gunting / kertas):");
        
        if (!inputUser) return; // Jika user menekan batal
        let user = inputUser.toLowerCase().trim();

        if (!pilihan.includes(user)) {
            alert("Pilihan tidak valid! Ketik batu, gunting, atau kertas.");
            return;
        }

        // Komputer memilih acak
        let komputer = pilihan[Math.floor(Math.random() * 3)];
        let status = "";

        if (user === komputer) {
            status = "SERI!";
        } else if (
            (user === "batu" && komputer === "gunting") ||
            (user === "gunting" && komputer === "kertas") ||
            (user === "kertas" && komputer === "batu")
        ) {
            status = "ANDA MENANG! 🎉";
        } else {
            status = "ANDA KALAH! 😢";
        }

        cetakKeDOM("Batu Gunting Kertas", user, komputer, status);
    }

    // 2. FUNCTION SUIT GAJAH ORANG SEMUT
    function suitGajahOrangSemut() {
        const pilihan = ["gajah", "orang", "semut"];
        let inputUser = prompt("Masukkan pilihan (gajah / orang / semut):");
        
        if (!inputUser) return;
        let user = inputUser.toLowerCase().trim();

        if (!pilihan.includes(user)) {
            alert("Pilihan tidak valid! Ketik gajah, orang, atau semut.");
            return;
        }

        let komputer = pilihan[Math.floor(Math.random() * 3)];
        let status = "";

        if (user === komputer) {
            status = "SERI!";
        } else if (
            (user === "gajah" && komputer === "orang") ||
            (user === "orang" && komputer === "semut") ||
            (user === "semut" && komputer === "gajah")
        ) {
            status = "ANDA MENANG! 🎉";
        } else {
            status = "ANDA KALAH! 😢";
        }

        cetakKeDOM("Gajah Orang Semut", user, komputer, status);
    }

    // 3. FUNCTION SUIT JARI
    function suitJari() {
        let inputUser = prompt("Keluarkan jumlah jari Anda (angka 1 - 5):");
        
        if (!inputUser) return;
        let user = parseInt(inputUser);

        if (isNaN(user) || user < 1 || user > 5) {
            alert("Pilihan tidak valid! Masukkan angka antara 1 sampai 5.");
            return;
        }

        // Komputer acak angka 1 - 5
        let komputer = Math.floor(Math.random() * 5) + 1;
        let status = "";

        if (user === komputer) {
            status = "SERI!";
        } else if (user > komputer) {
            status = "ANDA MENANG! 🎉";
        } else {
            status = "ANDA KALAH! 😢";
        }

        cetakKeDOM("Suit Jari", user + " Jari", komputer + " Jari", status);
    }