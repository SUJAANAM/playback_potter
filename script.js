

// const videoBtn = document.querySelector("#videoBtn");
// const videoInput = document.querySelector("#videoInput");
// const videoPlayer = document.querySelector("#main");
// const totalTimeElem = document.querySelector("#totalTime");
// const currentTimeElem = document.querySelector("#currentTime");
// const slider = document.querySelector("#slider");
// const menu1 = document.querySelector("#menu1");
// const menuItems1 = document.querySelector("#menu-items-1");
// const menu2 = document.querySelector("#menu2");
// const menuItems2 = document.querySelector("#menu-items-2");


// menu1.addEventListener("mouseover", () => {
//     menuItems1.style.display = 'block'
// });
// menu1.addEventListener("mouseout", () => {
//     menuItems1.style.display = 'none'
// });
// menu2.addEventListener("mouseover", () => {
//     menuItems2.style.display = 'block'
// });
// menu2.addEventListener("mouseout", () => {
//     menuItems2.style.display = 'none'
// });

// let video = ""
// let duration;
// let timerObj;
// let currentPlayTime = 0;
// let isPlaying = false;

// const handleInput = () => {
//     // console.log("Input is clicked");
//     // you have make it click
//     videoInput.click();
// }
// const acceptInputHandler = (obj) => {
//     let selectedVideo;
//     // console.log(obj);
//     if (obj.type == "drop") {
//         selectedVideo = obj.dataTransfer.files[0]

//     } else {
//         selectedVideo = obj.target.files[0];

//     }
//     //  src -> base64 
//     const link = URL.createObjectURL(selectedVideo);
//     // console.log(link);

//     const videoElement = document.createElement("video");
//     videoElement.src = link;
//     videoElement.setAttribute("class", "video");
//     // check if there are any video already present
//     if (videoPlayer.children.length > 0) {

//         // if present -> remove it 
//         videoPlayer.removeChild(videoPlayer.children[0]);
//     }
//     // now after the above check -> add the videoElement
//     videoPlayer.appendChild(videoElement);
//     video = videoElement
//     isPlaying = true;
//     setPlayPause();
//     videoElement.play();
//     videoElement.volume = 0.3;
//     videoElement.addEventListener("loadedmetadata", function () {
//         // it gives in decimal value -> convert that into seconds
//         duration = Math.round(videoElement.duration);
//         // convert seconds into hrs:mins:secs
//         let time = timeFormat(duration);
//         totalTimeElem.innerText = time;
//         slider.setAttribute("max", duration);
//         startTimer();

//     })
// }

// videoBtn.addEventListener("click", handleInput);
// // when file is selected
// videoInput.addEventListener("change", acceptInputHandler);

// // menuItem.addEventListener("click", (e)=>{
// //     console.log("Hello")
// //     menu.style.display = "block"
// // })
// /*******************volume and speed*******************/
// // select the element
// const speedUp = document.querySelector("#speedUp");
// const speedDown = document.querySelector("#speedDown");
// const volumeUp = document.querySelector("#volumeUp");
// const volumeDown = document.querySelector("#volumeDown");
// const toast = document.querySelector(".toast");

// const speedUpHandler = () => {
//     // * where is the video-> 
//     const videoElement = document.querySelector("video");
//     if (videoElement == null) {
//         return;
//     }
//     // i want that playback speed should be at max 300%
//     if (videoElement.playbackRate > 3) {
//         return;
//     }
//     // video -> speed increase
//     const increaseSpeed = videoElement.playbackRate + 0.5;
//     videoElement.playbackRate = increaseSpeed;

//     showToast(increaseSpeed + "X");

//     // which property you will use to increase it's speed 
//     // * how much you want to increase
// }
// const speedDownhandler = () => {
//     const videoElement = document.querySelector("video");
//     if (videoElement == null) {
//         return;
//     }
//     if (videoElement.playbackRate > 0) {
//         // video -> speed decrease
//         const decreasedSpeed = videoElement.playbackRate - 0.5;
//         videoElement.playbackRate = decreasedSpeed;
//         console.log("decreased speed", decreasedSpeed)
//         showToast(decreasedSpeed + "X");
//     }
// }

// const volumeUpHandler = () => {
//     // select the video
//     const videoElement = document.querySelector("video");
//     if (videoElement == null) {
//         return;
//     }
//     // property to play with volume 
//     if (videoElement.volume >= 0.99) {
//         return;
//     }
//     const increasedVolume = videoElement.volume + 0.1
//     videoElement.volume = increasedVolume;
//     // console.log("increseas volume", increasedVolume);
//     const percentage = (increasedVolume * 100) + "%";
//     showToast(percentage);
// }



// function showToast(message) {
//     // toast show
//     toast.textContent = message;
//     toast.style.display = "block";
//     setTimeout(() => {
//         toast.style.display = "none"
//     }, 1000);
// }


// // identify on which event your logic should trigger
// speedUp.addEventListener("click", speedUpHandler);
// speedDown.addEventListener("click", speedDownhandler)
// volumeUp.addEventListener("click", volumeUpHandler);
// volumeDown.addEventListener("click", volumeDownHandler);


// /***********controls****************************************/
// const handleFullScreen = () => {
//     videoPlayer.requestFullscreen();
// }

// const fullScreenElem = document.querySelector("#fullScreen");
// fullScreenElem.addEventListener("click", handleFullScreen)
// // adding seek behavior in slider
// slider.addEventListener("change", function (e) {
//     let value = e.target.value;
//     video.currentTime = value;
// })

// /***********forward and backward button*************/
// function forward() {
//     currentPlayTime = Math.round(video.currentTime) + 5;
//     video.currentTime = currentPlayTime;
//     slider.setAttribute("value", currentPlayTime);
//     showToast("Forward by 5 sec");
//     let time = timeFormat(currentPlayTime);
//     currentTimeElem.innerText = time;
// }

// function backward() {
//     currentPlayTime = Math.round(video.currentTime) - 5;
//     video.currentTime = currentPlayTime;
//     slider.setAttribute("value", currentPlayTime);
//     showToast("Backward by 5 sec");
//     let time = timeFormat(currentPlayTime);
//     currentTimeElem.innerText = time;
// }


// const forwardBtn = document.querySelector("#forwardBtn");
// const backwardBtn = document.querySelector("#backBtn");
// forwardBtn.addEventListener("click", forward);
// backwardBtn.addEventListener("click", backward);
// /****************play pause********************/
// const playPauseContainer = document.querySelector("#playPause");
// function setPlayPause() {
//     if (isPlaying === true) {
//         playPauseContainer.innerHTML = `<i class="fas fa-pause state"></i>`;
//         video.play();
//     }
//     else {
//         playPauseContainer.innerHTML = `<i class="fas fa-play state"></i>`;
//         video.pause();
//     }
// }

// playPauseContainer.addEventListener("click", function (e) {
//     if (video) {
//         isPlaying = !isPlaying;
//         setPlayPause();
//     }
// })

// /******stop btn********/
// const stopBtn = document.querySelector("#stopBtn");
// const stopHandler = () => {
//     if (video) {
//         // remove the video from ui 
//         video.remove();
//         // reset all the varibales
//         isPlaying = false;
//         currentPlayTime = 0;
//         slider.value = 0;
//         video = "";
//         duration = "";
//         totalTimeElem.innerText = '--/--';
//         currentTimeElem.innerText = '00:00';
//         slider.setAttribute("value", 0);
//         stopTimer();
//         setPlayPause();
//     }
// }

// stopBtn.addEventListener("click", stopHandler)

// /***************utility function to convert secs into hrs :mns : seconds*****************/
// function timeFormat(timeCount) {
//     let time = '';
//     const sec = parseInt(timeCount, 10);
//     let hours = Math.floor(sec / 3600);
//     let minutes = Math.floor((sec - (hours * 3600)) / 60);
//     let seconds = sec - (hours * 3600) - (minutes * 60);
//     if (hours < 10)
//         hours = "0" + hours;
//     if (minutes < 10)
//         minutes = "0" + minutes;
//     if (seconds < 10)
//         seconds = "0" + seconds
//     time = `${hours}:${minutes}:${seconds}`;
//     return time;
// }

// // function that runs the slider and timer  
// function startTimer() {
//     timerObj = setInterval(function () {
//         currentPlayTime = Math.round(video.currentTime);
//         slider.value = currentPlayTime;
//         const time = timeFormat(currentPlayTime);
//         currentTimeElem.innerText = time;
//         if (currentPlayTime == duration) {
//             state = "pause";
//             stopTimer();
//             setPlayPause();
//             video.remove();
//             slider.value = 0;
//             currentTimeElem.innerText = "00:00:00";
//             totalTimeElem.innerText = '--/--/--';
//         }
//     }, 1000);
// }
// function stopTimer() {
//     clearInterval(timerObj);
// }



// /**********************enable drag and drop**********************/
// // Prevent default behavior for dragover and dragleave events
// videoPlayer.addEventListener('dragenter', (e) => {
//     e.preventDefault();
// })

// videoPlayer.addEventListener('dragover', (e) => {
//     e.preventDefault();
// })

// videoPlayer.addEventListener('dragleave', (e) => {
//     e.preventDefault();
// })


// videoPlayer.addEventListener('drop', (e) => {
//     e.preventDefault();
//     acceptInputHandler(e);
// })




// /*********keyboard support***************/
// const body = document.querySelector("body");
// // keyboard inputs
// body.addEventListener("keyup", function (e) {
//     console.log(e.key);
//     if (!video) return;
//     if (e.code == "Space") {
//         isPlaying = !isPlaying
//         setPlayPause();
//     }
//     else if (e.key == "ArrowUp" ) {
//         volumeUpHandler()
//     }
//     else if (e.key == "ArrowDown") {
//         volumeDownHandler();
//     }
//     else if (e.key == "+") {
//         speedUpHandler();
//     }
//     else if (e.key == "-") {
//         speedDownhandler();
//     }
//     else if (e.key == "ArrowRight") {
//         forward();
//     }
//     else if (e.key == "ArrowLeft") {
//         backward();
//     }
// })



const videoBtn = document.querySelector("#videoBtn");
const videoInput = document.querySelector("#videoInput");
const videoPlayer = document.querySelector("#main");
const totalTimeElem = document.querySelector("#totalTime");
const currentTimeElem = document.querySelector("#currentTime");
const slider = document.querySelector("#slider");
const menu1 = document.querySelector("#menu1");
const menuItems1 = document.querySelector("#menu-items-1");
const menu2 = document.querySelector("#menu2");
const menuItems2 = document.querySelector("#menu-items-2");
const speedUp = document.querySelector("#speedUp");
const speedDown = document.querySelector("#speedDown");
const volumeUp = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");
const toast = document.querySelector(".toast");
const playPauseContainer = document.querySelector("#playPause");
const fullScreenElem = document.querySelector("#fullScreen");
const forwardBtn = document.querySelector("#forwardBtn");
const backwardBtn = document.querySelector("#backBtn");
const stopBtn = document.querySelector("#stopBtn");

let video = "";
let duration;
let timerObj;
let isPlaying = false;

// Menu functionality
menu1.addEventListener("mouseover", () => menuItems1.style.display = 'block');
menu1.addEventListener("mouseout", () => menuItems1.style.display = 'none');
menu2.addEventListener("mouseover", () => menuItems2.style.display = 'block');
menu2.addEventListener("mouseout", () => menuItems2.style.display = 'none');

// Input handling
videoBtn.addEventListener("click", () => videoInput.click());
videoInput.addEventListener("change", acceptInputHandler);

function acceptInputHandler(event) {
    const selectedVideo = event.target.files[0];
    if (!selectedVideo) return;

    const link = URL.createObjectURL(selectedVideo);
    const videoElement = document.createElement("video");
    videoElement.src = link;
    videoElement.classList.add("video");

    // Remove existing video
    if (videoPlayer.firstChild) {
        videoPlayer.removeChild(videoPlayer.firstChild);
    }

    videoPlayer.appendChild(videoElement);
    video = videoElement;
    isPlaying = true;
    setPlayPause();
    videoElement.play();
    videoElement.volume = 0.3;

    videoElement.addEventListener("loadedmetadata", () => {
        duration = Math.round(videoElement.duration);
        totalTimeElem.innerText = timeFormat(duration);
        slider.max = duration;
        startTimer();
    });
}

// Volume and speed controls
const updateVideoVolume = (change) => {
    if (!video) return;
    video.volume = Math.min(Math.max(video.volume + change, 0), 1);
    showToast(`${Math.round(video.volume * 100)}%`);
};

const updatePlaybackRate = (change) => {
    if (!video) return;
    video.playbackRate = Math.min(Math.max(video.playbackRate + change, 0), 3);
    showToast(`${video.playbackRate.toFixed(1)}X`);
};

speedUp.addEventListener("click", () => updatePlaybackRate(0.5));
speedDown.addEventListener("click", () => updatePlaybackRate(-0.5));
volumeUp.addEventListener("click", () => updateVideoVolume(0.1));
volumeDown.addEventListener("click", () => updateVideoVolume(-0.1));

// Show toast function
function showToast(message) {
    toast.textContent = message;
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 1000);
}

// Controls
fullScreenElem.addEventListener("click", () => videoPlayer.requestFullscreen());

slider.addEventListener("input", (e) => {
    if (video) video.currentTime = e.target.value;
});

const forward = () => {
    if (!video) return;
    video.currentTime = Math.min(video.currentTime + 5, duration);
    slider.value = video.currentTime;
    showToast("Forward by 5 sec");
};

const backward = () => {
    if (!video) return;
    video.currentTime = Math.max(video.currentTime - 5, 0);
    slider.value = video.currentTime;
    showToast("Backward by 5 sec");
};

forwardBtn.addEventListener("click", forward);
backwardBtn.addEventListener("click", backward);

// Play/Pause functionality
function setPlayPause() {
    if (isPlaying) {
        playPauseContainer.innerHTML = `<i class="fas fa-pause state"></i>`;
        video.play();
    } else {
        playPauseContainer.innerHTML = `<i class="fas fa-play state"></i>`;
        video.pause();
    }
}

playPauseContainer.addEventListener("click", () => {
    if (video) {
        isPlaying = !isPlaying;
        setPlayPause();
    }
});

// Stop functionality
stopBtn.addEventListener("click", () => {
    if (video) {
        video.remove();
        resetPlayer();
    }
});

function resetPlayer() {
    isPlaying = false;
    slider.value = 0;
    video = "";
    duration = "";
    totalTimeElem.innerText = '--/--';
    currentTimeElem.innerText = '00:00';
    stopTimer();
    setPlayPause();
}

// Time formatting
function timeFormat(seconds) {
    const sec = parseInt(seconds, 10);
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const secs = sec % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Timer functionality
function startTimer() {
    timerObj = setInterval(() => {
        const currentPlayTime = Math.round(video.currentTime);
        slider.value = currentPlayTime;
        currentTimeElem.innerText = timeFormat(currentPlayTime);
        if (currentPlayTime >= duration) {
            resetPlayer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerObj);
}

// Drag and drop functionality
videoPlayer.addEventListener('dragenter', (e) => e.preventDefault());
videoPlayer.addEventListener('dragover', (e) => e.preventDefault());
videoPlayer.addEventListener('dragleave', (e) => e.preventDefault());
videoPlayer.addEventListener('drop', (e) => {
    e.preventDefault();
    const dataTransfer = e.dataTransfer;
    if (dataTransfer.files.length) {
        acceptInputHandler({ target: { files: dataTransfer.files } });
    }
});

// Keyboard controls
document.body.addEventListener("keyup", (e) => {
    if (!video) return;
    switch (e.code) {
        case "Space":
            isPlaying = !isPlaying;
            setPlayPause();
            break;
        case "ArrowUp":
            updateVideoVolume(0.1);
            break;
        case "ArrowDown":
            updateVideoVolume(-0.1);
            break;
        case "+":
            updatePlaybackRate(0.5);
            break;
        case "-":
            updatePlaybackRate(-0.5);
            break;
        case "ArrowRight":
            forward();
            break;
        case "ArrowLeft":
            backward();
            break;
    }
});
