let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let track_header = document.querySelector('#track_header');
let track_bottom = document.querySelector('#track_bottom');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   {
     name: "summertime",
     path: "music/summertime.mp3",
     img: "images/image1.gif",
     img2: "images/header.gif",
     img3: "images/bottom.gif",

   },
   {
     name: "slow summer",
     path: "music/slowsummer.mp3",
     img: "images/image2.gif",
     img2: "images/header2.gif",
     img3: "images/bottom2.gif",

   },
   {
     name: "she likes spring, i prefer winter",
     path: "music/slchld.mp3",
     img: "images/image3.gif",
     img2: "images/header3.gif",
     img3: "images/bottom3.gif",

   },
   {
     name: "talking to the moon",
     path: "music/talkingtothemoon.mp3",
     img: "images/image4.gif",
     img2: "images/header4.gif",
     img3: "images/bottom4.gif",

   },
   {
     name: "poloroid love",
     path: "music/poloroidlove.mp3",
     img: "images/image5.gif",
     img2: "images/header5.gif",
     img3: "images/bottom5.gif",

   }
];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    track_header.src = All_song[index_no].img2;
    track_bottom.src = All_song[index_no].img3;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);



// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

// pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}

// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}




function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }

