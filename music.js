let song_name = ["Hands.mp3","Narayana.mp3"]
let back_btn = document.querySelector('#back');
let play_btn = document.querySelector('#play');
let next_btn = document.querySelector('#next');
let range_btn = document.querySelector('#range');
let play_img = document.querySelector('#play_img');
let voll = document.querySelector('#vol');
let repp = document.querySelector('#rep_img');
let song_title = document.querySelector('#Title')
let duration = 0;
let range = 0;
let repeat = true
let currentTime = 0;
var current_song = 0;
var lengt = song_name.length;


let song = new Audio()
window.onload = play

function play() {
  let isplaying = false;
  song.src = song_name[current_song];
  song_title.textContent =song_name[current_song];
play_btn.addEventListener('click', ()=>{
  if (!isplaying) {

    song.play();
    isplaying = true;
    duration = song.duration;
    range_btn.max = duration;
   play_img.src = "img/pause.png"
  }else{
    song.pause()
    play_img.src  = "img/play.png"
    isplaying = false;

  }
  range_btn.addEventListener('change', ()=>{
    song.currentTime = range_btn.value;
  })
  song.addEventListener('timeupdate', ()=>{
    range_btn.value = song.currentTime;
  })

  song.addEventListener('ended',()=>{
    song.currentTime = 0;
    song.pause();
    play_img.src = "img/play.png";
    isplaying = false;
  })
})
}
function next() {
    play_img.src = "img/play.png"
    current_song +=1;
    if (current_song > lengt - 1){
    current_song = 0;
  }

  play()
}
function back() {
    play_img.src = "img/play.png"
    current_song -=1;
    if (current_song < 0){
    current_song = 0;
  }

  play()

}
voll.oninput = (e) =>{
  console.log(e);
  const volume = e.target.value;
  song.volume = volume
}

function rep(){

  if(repeat){
    song.loop = true
    repp.src = "img/repeat1.png"
    repeat = false

  }else{
    repp.src = "img/repeat.png"
    song.loop = false
    repeat = true
  }

}
