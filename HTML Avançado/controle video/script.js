
let video = document.getElementById("video1");

function retroceder() {
    video.currentTime -= 5;
    
}

function avancar() {
    video.currentTime += 5;

}

function baixar() {

}

function aumentar() {

}

function play() {
    video.play();

}

function stop() {
    video.pause();
    video.currentTime = 0;

}

function btns() {
    let btns = document.getElementsByClassName("control")[0]
    btns.style.display = "block";
    
}

function btnsOut() {
    let btns = document.getElementsByClassName("control")[0]
    btns.style.display = "none";
    
}