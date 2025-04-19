// scripts.js

// 1. Alert when a post is created
function postCreated() {
    alert("Your post has been submitted!");
  }
  function toggleDarkMode() {
    document.body.classList.toggle("bg-gray-900");
    document.body.classList.toggle("text-white");
  }
  function showCurrentTime() {
    const now = new Date();
    alert(`Current time is: ${now.toLocaleTimeString()}`);
  }
    
  
  // 2. Toggle visibility of shortcuts
  function toggleShortcuts() {
    const shortcuts = document.getElementById("shortcuts");
    shortcuts.classList.toggle("hidden");
  }
  
  // 3. Greet user on load
  function greetUser() {
    console.log("Welcome to Facebook Clone!");
  }
  
  // 4. Show alert on Add Friend click
  function addFriend() {
    alert("Friend request sent!");
  }
  
  // 5. Search alert
  function searchFacebook() {
    const input = document.getElementById("searchBox").value;
    alert(`Searching for: ${input}`);
  }
  
  // 6. Change post box border color on focus
  function highlightPostBox() {
    document.getElementById("postBox").style.borderColor = "blue";
  }
  
  // 7. Reset post input after posting
  function resetPost() {
    document.getElementById("postBox").value = "";
  }
  
  // 8. Show help dialog
  function showHelp() {
    alert("Help page is under construction.");
  }
  
  // 9. Show notifications alert
  function showNotifications() {
    alert("You have 3 new notifications!");
  }
  
  // 10. Change background color
  function changeBackground() {
    document.body.classList.toggle("bg-green-100");
  }
  