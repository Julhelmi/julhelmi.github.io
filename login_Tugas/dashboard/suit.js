// // const playerArea = document.querySelector('.playerArea');
// // const gmbr = playerArea.getElementsByTagName('img');
// // const gajah = document.getElementsByClassName('gajah');
// let playerGajah = document.querySelector('.gajah');
// let playerOrang = document.querySelector('.orang');
// let playerSemut = document.querySelector('.semut');
// function notif() {
//   alert('yes');
// }

// function compArea() {
//   alert('ok');
//   let comp = Math.round(Math.random() * 12);
//   if (comp <= 4) return 'gajah';
//   if (comp > 4 && comp <= 8) return 'semut';
//   else return 'orang';
// }
// console.log(compArea());

// function player() {
//   if (playerGajah.onclick) {
//     player == 'gajah';
//   } else if (playerOrang.onclick) {
//     player == 'orang';
//   } else if (playerSemut.onclick) {
//     player == 'semut';
//   }
// }

// // function player() {
// //   for (let i = 0; i <= 5; i++) {
// //     let cl = gmbr.getAttribute('class');
// //     console.log(cl);
// //     // gmbr.get
// //   }
// // }
// // function player() {
// //   if (playerGajah) {
// //     player == 'gajah';
// //   }
// // }

// function aturan(player, comp) {
//   if (player == comp) alert('SERI!!!');
//   if (player) {
//     if (comp == 'semut') {
//       alert('lose');
//     } else if (comp == 'orang') {
//       alert('win');
//     }
//   }
// }

// playerGajah.onclick = aturan;
// playerOrang.onclick = aturan;
// playerSemut.onclick = aturan;

let hasil = document.querySelector('.hasil');

function computerPick() {
  let comp = Math.round(Math.random() * 12);
  if (comp <= 4) {
    comp = 'Gajah';
    let gambarComp = (document.getElementById('computerArea').innerHTML =
      '<img src="gajah.png" class="gambarComp">');
    // console.log(comp);
  } else if (comp > 4 && comp <= 8) {
    comp = 'Semut';
    let gambarComp = (document.getElementById('computerArea').innerHTML =
      '<img src="semut.png" class="gambarComp">');
    // let gambarComp = querySelector('.gambarComp');
    // gambarComp.innerHTML = '<img src="semut.png" class="gambarComp">';
    // console.log(comp);
  } else {
    comp = 'Orang';
    let gambarComp = (document.getElementById('computerArea').innerHTML =
      '<img src="orang.png" class="gambarComp">');
    // console.log(comp);
  }
  return comp;
}
let gajah = document.querySelector('.gajah');

function playerPick() {
  // gajah.addEventListener('click', function () {
  //   rules;
  //   return 'Gajah';
  // });
  // return 'Gajah';
  for (p = 1; p <= 3; p++) {
    if (p == 1) {
      return 'Gajah';
    } else if (p == 2) {
      return 'Semut';
    } else {
      return 'Orang';
    }
  }
}

function rules() {
  if (playerPick() == computerPick()) {
    hasil.innerHTML = 'SERI!!!';
    // console.log(computer);
  } else {
    if (playerPick() == 'Gajah') {
      if (computerPick() == 'Semut') {
        hasil.innerHTML = 'LOSE!!!';
        // console.log(computerPick());
      } else if (computerPick() == 'Orang') {
        hasil.innerHTML = 'WINNER!!!';
        // console.log(computerPick());
      }
    } else if (playerPick() == 'Semut') {
      if (computerPick() == 'Gajah') {
        hasil.innerHTML = 'WINNER!!!';
        // console.log(computerPick());
      } else if (computerPick() == 'Orang') {
        hasil.innerHTML = 'LOSE!!!';
        // console.log(computerPick());
      }
    } else if (playerPick() == 'Orang') {
      if (computerPick() == 'Gajah') {
        hasil.innerHTML = 'LOSE!!!!';
        // console.log(computerPick());
      } else if (computerPick() == 'Semut') {
        hasil.innerHTML = 'WINNER!!!';
        // console.log(computerPick());
      }
    }
  }
}

// playerPick();
// computerPick();
gajah.onclick = rules;
