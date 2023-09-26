// Function to replace the Robux icon with the Tix icon
function replaceRobuxIcon() {
    const robuxIcon = document.getElementById('nav-robux'); // Select the element by its id
  
    if (robuxIcon) {
      // Create a new Tix icon image element
      const tixIcon = new Image();
      tixIcon.src = 'https://i.postimg.cc/Fs0ZBH17/tix-icon.png'; // Use the hotlink URL
      
      // Replace the Robux icon with the Tix icon image
      robuxIcon.parentNode.replaceChild(tixIcon, robuxIcon);
    }
  }
  
  // Run the function when the page is fully loaded
  window.addEventListener('load', replaceRobuxIcon);
  