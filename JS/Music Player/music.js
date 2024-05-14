// var x = document.getElementById('audio1')

// // function to play audio
// function play_audio(){
//     x.play()
//     // to add controls over there
//     x.setAttribute("controls","true")
//     // to set autoplay
//     x.setAttribute("autoplay","true")    
// }

// //funcion to stop audio
// function stop_audio(){
//     x.pause()
// }



var songs= [
    {
        img: "https://www.rafaelalucas.com/dailyui/9/covers/jain.jpg",
        artistName: "Jain",
        songName: "Makeba",
        song: "https://www.rafaelalucas.com/dailyui/9/songs/song1.mp3",
        color: "#f5c63d"
    },
    {
        img: "https://www.rafaelalucas.com/dailyui/9/covers/ohland.jpg",
        artistName: "Oh Land",
        songName: "Postpone the Bad",
        song: "https://www.rafaelalucas.com/dailyui/9/songs/song2.mp3",
        color: "#afc5c3"
    },
    {
        img: "https://www.rafaelalucas.com/dailyui/9/covers/angele.jpg",
        artistName: "Angele",
        songName: "La Loi de Murphy",
        song: "https://www.rafaelalucas.com/dailyui/9/songs/song3.mp3",
        color: "#74c2dd"
    },
    {
        img: "https://www.rafaelalucas.com/dailyui/9/covers/broods.jpg",
        artistName: "Broods",
        songName: "Bridges",
        song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        color: "#a3b8b0"
    }


]


var a = document.getElementById('demo1')

for(let i=0; i<songs.length; i++){
    // console.log(i)
    // for(var j in songs[i]){
        // console.log(j)
        // console.log(songs[i][j])
        // var img_style = document.getElementById('sng_img')
        var container = document.createElement('div');
        container.classList.add('song-container');
        
            var img_style = document.createElement('img')
            img_style.classList.add('sng_img')
            img_style.src = songs[i].img
            img_style.alt = songs[i].songName
            
            img_style.addEventListener('click', function(){
                    document.getElementById('audio2').src = songs[i].song
                    document.getElementById('audio2').play()
                    document.getElementById('audio2').setAttribute("controls","true")


            })

            container.appendChild(img_style)


        var head = document.createElement('h2')
        head.classList.add('head_style')
        head.innerHTML = songs[i].songName
        container.appendChild(head)
    // }

    a.appendChild(container)
    
    a.appendChild(document.createElement('br'))
}

