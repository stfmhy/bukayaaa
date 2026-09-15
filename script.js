function bukaHadiah() {
  let nama = document.getElementById("nama").value;

  if (nama.trim() === "") {
    alert("Masukkan nama dulu yaa 💗");
    return;
  }

  document.getElementById("namaTampil").textContent = nama;

  document.getElementById("halamanAwal").classList.add("hidden");
  document.getElementById("halamanHadiah").classList.remove("hidden");
}

function bukaKotak() {
  buatBungaDanLove();

  // Mulai musik saat tombol hadiah ditekan
  let musik = document.getElementById("musik");
  musik.play();

  setTimeout(function () {
    document.getElementById("halamanHadiah").classList.add("hidden");

    mulaiMengetik();

    document.getElementById("halamanSurat").classList.remove("hidden");
  }, 1000);
}

function lihatVideo() {
  let nama = document.getElementById("namaTampil").textContent;

  document.getElementById("namaVideo").textContent = nama;

  document.getElementById("halamanSurat").classList.add("hidden");
  document.getElementById("halamanVideo").classList.remove("hidden");

  let audio = document.getElementById("audioHadiah");
  let musik = document.getElementById("musik");

  // Musik website berhenti saat record mulai
  audio.onplay = function () {
    musik.pause();
  };

  // Setelah record selesai
  audio.onended = function () {
    // Foto muncul
    document.getElementById("fotoHadiah").classList.remove("foto-tersembunyi");

    // Bunga + love muncul lagi 🌸💗
    buatBungaDanLove();

    // Musik lanjut dari posisi terakhir 🎵
    musik.play();

    // Tunggu 5 detik lalu ke halaman terakhir
    setTimeout(function () {
      document.getElementById("halamanVideo").classList.add("hidden");
      document.getElementById("halamanAkhir").classList.remove("hidden");
    }, 5000);
  };
}
function buatBungaDanLove() {
  let simbol = ["🌸", "🌷", "🌺", "💗", "💕", "💖", "🌼"];

  for (let i = 0; i < 25; i++) {
    let elemen = document.createElement("div");

    elemen.classList.add("floating");

    elemen.textContent = simbol[Math.floor(Math.random() * simbol.length)];

    elemen.style.left = Math.random() * 100 + "vw";

    elemen.style.animationDuration = 2 + Math.random() * 2 + "s";

    elemen.style.fontSize = 20 + Math.random() * 25 + "px";

    document.body.appendChild(elemen);

    setTimeout(function () {
      elemen.remove();
    }, 4000);
  }
}

function mulaiMengetik() {
  let teks =
    "Hai agni! SELAMAT ULANG TAHUN YAAA 💗\n\n" +
    "Walaupun telat, semoga di usia yang baru ini, " +
    "agni diberikan kebahagiaan, kesehatan, " +
    "dan hal-hal baik yang agni inginkan. ✨\n\n" +
    "Semoga semua harapan dan impian agni " +
    "bisa perlahan menjadi kenyataan. 💗💗💗\n\n" +
    "MAAAFKAN INI KELAMAAN YAAAA, " +
    "MIANE AGNI YEOPOOOOOO. 💗\n\n" +
    "SARANGHAE 💗";

  let tempatTeks = document.getElementById("teksSurat");

  let tombol = document.getElementById("tombolVideo");

  let i = 0;

  tempatTeks.textContent = "";

  tombol.classList.add("tombol-tersembunyi");

  function ketik() {
    if (i < teks.length) {
      tempatTeks.textContent += teks.charAt(i);

      i++;

      setTimeout(ketik, 70);
    } else {
      tombol.classList.remove("tombol-tersembunyi");
    }
  }

  ketik();
}

function mulaiLagi() {
  let peluk = document.createElement("div");

  peluk.textContent = "🤗";
  peluk.classList.add("peluk-animasi");

  document.body.appendChild(peluk);

  setTimeout(function () {
    peluk.remove();
  }, 4000);
}
