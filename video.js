window.document.onkeydown = function(key) {
    if (key.keyCode == 27) lightbox_close();
}

let videoBox;  

function videoBoxOpen(num) {
    if (num == 1) {
        videoBox = document.getElementById("video-1");
        document.getElementById('container-video-fishing').style.display = 'block';
        document.getElementById('container-video-bg-fishing').style.display = 'block';
    }
    else if (num == 2) {
        videoBox = document.getElementById("video-2");
        document.getElementById('container-video-hiking').style.display = 'block';
        document.getElementById('container-video-bg-hiking').style.display = 'block';
    }
    else if (num == 3) {
        videoBox = document.getElementById("video-3");
        document.getElementById('container-video-camping').style.display = 'block';
        document.getElementById('container-video-bg-camping').style.display = 'block';
    }
    
    videoBox.play();
}
  
  function videoBoxClose(num) {
    if (num == 1) {
        videoBox = document.getElementById("video-1");
        document.getElementById('container-video-fishing').style.display = 'none';
        document.getElementById('container-video-bg-fishing').style.display = 'none';
    }
    else if (num == 2) {
        videoBox = document.getElementById("video-2");
        document.getElementById('container-video-hiking').style.display = 'none';
        document.getElementById('container-video-bg-hiking').style.display = 'none';
    }
    else if (num == 3) {
        videoBox = document.getElementById("video-3");
        document.getElementById('container-video-camping').style.display = 'none';
        document.getElementById('container-video-bg-camping').style.display = 'none';
    }

    videoBox.pause();
  }