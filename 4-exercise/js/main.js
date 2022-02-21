/** 
 * Kopiera in din lösning från övning 3
 * Följande skall justeras
 * 
 * Anropet sker nu istället till följande URL: http://codexplained.se/lorem_text_slow.php?numberOfWords=
 * Det gör samma saker, men anropet är betydligt långsammare via den nya URL:en
 * Medan anropet görs, skall en loading.gif bild visas, för att visa att anropet håller på att laddas/utföras.
 * Så fort datan har hämtats, ta bort gif-bilden och visa resultet i en ny rad i tabellen.
 * 
 *
 */
let input = document.getElementById('input');
let fetchBtn = document.getElementById('fetchBtn');
let tableBody = document.querySelector('#table tbody');
let image = document.getElementById('image');


fetchBtn.addEventListener('click', function () {
    let url = 'http://codexplained.se/lorem_text_slow.php?numberOfWords=' + input.value;

    image.src = "img/loading.gif";

    fetch(url)
        .then(response => response.text())
        .then(data => {
            
            tableBody.innerHTML += `
            <tr> 						
                <td> ${input.value}</td>				
                <td> ${data} </td>
            </tr>
        `
        image.src = ' ';
        })
        .catch((error) => { console.log(error); })
       
    
})
