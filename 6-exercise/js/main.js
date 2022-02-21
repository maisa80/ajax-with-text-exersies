/** 
 * Skapa 2 knappar, "Previous" och "Next"
 * Dessa knappar anropar samt skickar in ett värde samtidigt, som endast får vara en siffra mellan 0-4
 * Exempel:
 * - Om nuvarande värde är 2, då anropar "Next"-knappen med värde 3
 * - Om nuvarande värde är 1, då anropar "Previous"-knappen med värde 0
 * - Om nuvarande värde är 4 och "Next"-knappen trycks, här får ni välja mellan att inte göra något, eller räkna om från 0.
 * Knapparna anropar och hämtar data från http://codexplained.se/animals.php?animal= Värdet som anges. Se exemplen nedan
 * 
 * 
 * Undersök vad som visas i webbläsaren, med följande URLer:
 * http://codexplained.se/animals.php?animal=4
 * http://codexplained.se/animals.php?animal=0
 *
 * Datan är en sträng som är separerad med tecknet *
 * Hämta datan och placera in de olika delarna i:
 * <h1>
 * <i>
 * <p>
 * <im>
 * 
 * Exempel på hur datan delas upp och läggs in i HTML-elementen:
 * 
 * <h1>Slear</h1>
 * <i>A cross between a bear and a sloth</i>
 * <p>Lorum ipsum .......</p>
 * <img src="http://i.imgur.com/MPE8L7D.jpg"> 
 * 
 */
let previous = document.getElementById('previous');
let next = document.getElementById('next');

let header = document.getElementById('header');
let title = document.getElementById('title');
let text = document.getElementById('text');
let image = document.getElementById('image');
let number = 0;

console.log(number);
fetch('http://codexplained.se/animals.php?animal=' + number)

    .then(response => response.text())
    .then(data => {
        splitUrl(data)
    })
    .catch((error) => { console.log(error); })



next.addEventListener('click', function () {
    number = number + 1;
    console.log(number);
    if (number > 4) number = 0;
    console.log(number);
    fetch('http://codexplained.se/animals.php?animal=' + number)
        .then(response => response.text())
        .then(data => {
            splitUrl(data)
        })
        .catch((error) => { console.log(error); })
})


previous.addEventListener('click', function () {
    number = number - 1;
    console.log(number);
    if (number < 0) number = 4;
    console.log(number);
    fetch('http://codexplained.se/animals.php?animal=' + number)

        .then(response => response.text())
        .then(data => {
            splitUrl(data)
        })
        .catch((error) => { console.log(error); })
})



// function you can use:
function splitUrl(str) {
    let words = str.split('*');

    for (let i in words) {
        console.log(words[i]);
        header.innerHTML = words[0];
        title.innerHTML = words[1];
        text.innerHTML = words[2];
        image.src = words[3];

    }

    return words.join('\n');
}
