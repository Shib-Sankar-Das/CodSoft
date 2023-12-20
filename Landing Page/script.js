document.addEventListener('DOMContentLoaded', function () {
    const gifContainer = document.getElementById('gif-container');
    const gif = document.getElementById('gif');
    const gifUrl = 'your-gif-url.gif'; // Replace with the actual URL of your GIF
    const numFrames = 39;
    const speedupDelay = 3000; // 3 seconds delay for speeding up
  
    let currentFrame = 0;
  
    // Preload the GIF to get its natural duration
    const preloadImage = new Image();
    preloadImage.src = gifUrl;
    preloadImage.onload = function () {
      const naturalDuration = preloadImage.duration * 1000; // in milliseconds
      const frameDuration = naturalDuration / numFrames;
  
      // Set the GIF source
      gif.src = gifUrl;
      gif.style.display = 'block';
  
      // Start the infinite loop
      setInterval(function () {
        if (currentFrame === numFrames - 1) {
          // Speed up for the last frame
          setTimeout(function () {
            gif.style.animation = `play ${frameDuration}ms steps(${numFrames - 1}) infinite`;
          }, speedupDelay);
        }
  
        currentFrame = (currentFrame + 1) % numFrames;
      }, frameDuration);
    };
  });
  