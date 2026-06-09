document.addEventListener('visibilitychange', function() {
  const mediaElements = document.querySelectorAll('video, audio');
  
  if (document.hidden) {
    mediaElements.forEach(element => element.muted = true);
  } else {
    mediaElements.forEach(element => element.muted = false);
  }
});

  const targetDiv = document.getElementById('musicbound');

targetDiv.addEventListener('click', function() {
    targetDiv.remove();
    document.body.style.animationName = "pulse"

      const audio = document.getElementById("music");
  audio.loop = true;
  audio.play();
});

