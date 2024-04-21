console.log("Welcome to my site")

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitoms = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songName: "To Saamne Aayen", filePath: "song/0.mp3", coverPath: "image/cover1.jpg"},
    {songName: "Bas Tughe Pyaar Ho", filePath: "song/2.mp3", coverPath: "image/cover2.jpg"},
    {songName: "jhaanjar - B Praak", filePath: "song/3.mp3", coverPath: "image/cover3.jpg"},
    {songName: "Jhoome Jo Pathaan", filePath: "song/4.mp3", coverPath: "image/cover4.jpg"},
    {songName: "Kya Hota", filePath: "song/5.mp3", coverPath: "image/cover5.jpg"},
    {songName: "Shut Up Tulsi Kumar", filePath: "song/6.mp3", coverPath: "image/cover6.jpg"},
    {songName: "Sun Zara", filePath: "song/7.mp3", coverPath: "image/cover7.jpg"},
    {songName: "Tu Saame Aajane se", filePath: "song/8.mp3", coverPath: "image/cover8.jpg"},
    {songName: "Bas Tujhse Pyaar Ho", filePath: "song/9.mp3", coverPath: "image/cover9.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/10.mp3", coverPath: "image/cover10.jpg"},
]
songitoms.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
// audioElement.play();
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) =>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) =>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `song/${songIndex}.mp3`;
        mastersongname.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})