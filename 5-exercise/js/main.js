/** 
 * Skapa en knapp "Fetch data".
 * Som hämtar data från http://codexplained.se/lorem_comma_text.php
 * 
 * Datan är en Lorum Ipsum text, där varje ord är separerad med ett kommatecken
 * Se till att datan hämtas och att varje ord läggs in i en egen listItem <li>
 * 
 * Använd er av den inbyggda sträng-funktionen .split()
 */

let fetchBtn = document.getElementById('fetchBtn');
let list = document.getElementById('list');



fetchBtn.addEventListener('click', function () {
    let url = 'http://codexplained.se/lorem_comma_text.php';


    fetch(url)

        .then(response => response.text())


        .then(data => { list.innerHTML += `<li> ${splitUrl(data)} </li>` })
        .catch((error) => { console.log(error); })


})

// function you can use:
function splitUrl(str) {
let words = str.split(',');

    for(let i in words){
        words[i] = `<i> ${words[i]} </i><br>`;
    }
    // for (var i = 0; i < words.length - 1; i++) {
    //     words[i] = `<i> ${words[i]} </i><br>`;
    // }
   
    return words.join('\n');
}
