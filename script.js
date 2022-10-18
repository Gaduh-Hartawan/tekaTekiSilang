const btnSubmit = document.querySelector("#submit");
const inputJawab = document.querySelector("#input-jawab");
const selectSoal = document.querySelector("#select-soal");

// Mendatar
const D2 = document.querySelectorAll(".d2");
const D4 = document.querySelectorAll(".d4");
const D5 = document.querySelectorAll(".d5");
const D6 = document.querySelectorAll(".d6");

// Menurun
const M1 = document.querySelectorAll(".m1");
const M2 = document.querySelectorAll(".m2");
const M3 = document.querySelectorAll(".m3");

btnSubmit.addEventListener("click", function () {
  // function split string
  function splitString(soal) {
    for (let i = 0; i < soal.length; i++) {
      soal[i].innerHTML = jawab[i];
      soal[i].style.backgroundColor = "rgb(15, 202, 15)";
    }
  }
  // Pengecekan Soal dan Jawaban
  let jawab = inputJawab.value.toUpperCase();
  let soal = selectSoal.value;

  if (jawab === "") {
    alert("Isi Inputan terlebih dahulu!");
  } else if (soal === "1-menurun" && jawab === "TAKJIL") {
    alert("Jawaban Benar");
    splitString(M1);
    inputJawab.value = "";
  } else if (soal === "2-menurun" && jawab === "TADARUS") {
    alert("Jawaban Benar");
    splitString(M2);
    inputJawab.value = "";
  } else if (soal === "2-mendatar" && jawab === "TARAWIH") {
    alert("Jawaban Benar");
    splitString(D2);
    inputJawab.value = "";
  } else if (soal === "3-menurun" && jawab === "IDULFITRI") {
    alert("Jawaban Benar");
    splitString(M3);
    inputJawab.value = "";
  } else if (soal === "4-mendatar" && jawab === "RAMADAN") {
    alert("Jawaban Benar");
    splitString(D4);
    inputJawab.value = "";
  } else if (soal === "5-mendatar" && jawab === "HAUS") {
    alert("Jawaban Benar");
    splitString(D5);
    inputJawab.value = "";
  } else if (soal === "6-mendatar" && jawab === "NGABUBURIT") {
    alert("Jawaban Benar");
    splitString(D6);
    inputJawab.value = "";
  } else {
    alert("Jawaban Salah");
    inputJawab.value = "";
  }
});
