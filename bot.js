const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

let init = 0;

const botSay = (data) => {
  return [
    `Hallo👋, Selamat datang di Malik Bot. Siapa nama kamu?`,
    `Hallo ${data?.namaa}, Berapa usia kamu?`,
    `Ohhh ${data?.usia} tahun, Hobby kamu apa ya?`,
    `Woooww 😲 sama dong, aku juga Hobby ${data?.hobby}, btw kamu punya pacar ga?`,
    `ohhhh ${data?.pacar}, yaudah deh kalo gitu. Udahan dulu yah.. terimakasih🙏`,
  ];
};

pertanyaan.innerHTML = botSay()[0];

let usersData = [];

function botStart() {
  init++;
  if (init === 1) {
    botDelay({ namaa: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobby: jawaban.value });
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  console.log({ usersData: usersData });
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
  }, 1500);
  usersData.push(jawaban.value);
  jawaban.value = "";
}
function finishing() {
  pertanyaan.innerHTML = `Thankyou ya ${usersData[0]} sudah main ke BOT saya!😆,
  kali kali kita main ${usersData[2]} bareng ya!`;
  jawaban.value = "Siap, terimakasih juga!";
}

function botEnd() {
  window.location.reload();
}
