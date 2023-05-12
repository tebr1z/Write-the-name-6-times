






// function yazdirFor() {
//     let ad = "Ali";
//     let mesaj = "";
//     for (let i = 0; i < 5; i++) {
//       mesaj = mesaj + ad  ;
//     }
    // document.getElementById("yazdir").textContent = mesaj;
//   }


// const btn = document.getElementById('btn')

// btn.onclick = function(){
//     let off = document.getElementById('for').value
//     let mesaj = "";
//     for (let i = 0; i < 5; i++) {
//         mesaj + mesaj + off +  '<br>';
//     }
//     document.getElementById('yazdir').innerHTML = mesaj
// }
  
 
// const btn = document.getElementById('btn')

// btn.onclick = function(){
//     let off = document.getElementById('for').value
//     let yazdir = ''
//     for (let i = 0; i < 5; i++) {
//         yazdir +=  off  + "<br>";
//     }
//     document.getElementById('yazdir').innerHTML = yazdir
    
// }

const btn = document.getElementById('btn');
const input = document.getElementById('for');

btn.onclick = function(){
    let off = input.value;
    let yazdir = '';
    for (let i = 0; i < 6; i++) {
        yazdir +=  off  + '<br>';
    }
    document.getElementById('yazdir').innerHTML = yazdir;
    input.value = '';
    input.focus();
}
