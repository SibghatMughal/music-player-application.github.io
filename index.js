const play = document.getElementById("play");
const music = document.querySelector("audio");
const image = document.querySelector("img");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev  = document.getElementById("prev");
const next   = document.getElementById("next");


let isPlaying = false;


const palyMusic = ()=>{
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
    image.classList.add("animate");
}


const pauseMusic = ()=>{
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
    image.classList.remove("animate");
}

// event calls for click
play.addEventListener("click",()=>{
    // if(isPlaying){
    //     pauseMusic();
    // }
    // else{
    //     palyMusic();
    // }

    isPlaying ? pauseMusic() : palyMusic();
})



// changing songs with previous and next buttons
const songs = [{
     name : "mghl_1",
     title:"Bina MahiRemix",
     artist : "Nusrat Feteh Khan"
},

{
    name : "mghl_2",
    title:"Despa seetu",
    artist : "Paa Muneer"
},

{
    name : "mghl_3",
    title:"Excuses",
    artist : "AP Dillon"
},

{
    name : "mghl_4",
    title:"Mashup",
    artist : "Sab ka Mila K"
},

{
    name : "mghl_5",
    title:"Bol Kaffara",
    artist : "Aima Baig"
}

]



const loadSong=(songs)=>{
      title.textContent = songs.title;
      artist.textContent = songs.artist;
      music.src = `music/${songs.name}.mp3`;
      image.src = `images/${songs.name}.jpg`
}


// Loading the songs
// loadSong(songs[2]);
let songIndex = 0;
// next song playing 
const nextSong = ()=>{
    songIndex = (songIndex + 1) % songs.length;
         loadSong(songs[songIndex]);
         palyMusic();
}

const prevSong = ()=>{
    songIndex = (songIndex - 1 + songs.length)%songs.length;
         loadSong(songs[songIndex]);
         palyMusic();
}


next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);



// on Dom content load data will be the 

window.addEventListener("load",function(){
    title.textContent = songs[0].title;
    artist.textContent = songs[0].artist;
    music.src =`music/${songs[0].name}.mp3`;
    image.src = `images/${songs[0].name}.jpg`;
})
