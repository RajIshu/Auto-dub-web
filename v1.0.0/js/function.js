// $.get("/Video/[vtt]Intro to Object Oriented Programming - Crash Course.vtt", function(data) {
     
//      // Read all captions into an array
//      var items = data.split('\n\r');
     
//      console.log(items);
    
//      //Loop through all captions
//      $.each(items, function( index, value ) {
      
//       var item = items[index].split('\n');
//       console.log(item);    

//       });

         
// });

// const player = document.querySelector('.player')
// const lyrics = document.querySelector('.lyrics')
// const lines = lyrics.textContent.trim().split('\n')

// lyrics.removeAttribute('style')
// lyrics.innerText = ''

// let syncData = []

// lines.map((line, index) => {
//     const [time, text] = line.trim().split('|')
//     syncData.push({'start': time.trim(), 'text': text.trim()})
// })

// player.addEventListener('timeupdate', () => {
//     syncData.forEach((item) => {
//         console.log(item)
//         if (player.currentTime >= item.start) lyrics.innerText = item.text
//     })
// })

// function highlightFor(id,color,seconds){
//     var element = document.getElementById(id)
//     var origcolor = element.style.backgroundColor
//     element.style.backgroundColor = color;
//     var t = setTimeout(function(){
//        element.style.backgroundColor = origcolor;
//     },(seconds*1000));
// }

// highlightFor('object','yellow',3);

var vid = document.getElementById("myVideo");
vid.currentTime = 5;

function highlight(programming) {
    let inputText = document.getElementById("object");
    let innerHTML = inputText.innerHTML;
    let index = innerHTML.indexOf(programming);
    // console.log(innerHTML.programming.length);
    if (index >= 0) { 
     innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+programming.length) + "</span>" + innerHTML.substring(index + programming.length);
     inputText.innerHTML = innerHTML;
    }
}
