
 const username = "Bro Code";
 const welcomeMsg = document.getElementById("welcome-msg");

 welcomeMsg.textContent += username === "" ? `Guest` : username;