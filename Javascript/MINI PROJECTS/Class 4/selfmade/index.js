  const userTab = document.querySelector("[data-userWeather]");
  const searchTab = document.querySelector("[searchWeather]");
  const userContainer = document.querySelector(".weather-container");

  const grantAccessContainer = document.querySelector(".grant-location-container");
  const searchForm = document.querySelector("[data-searchForm]");
  const loadingScreen = document.querySelector(".loading-container");
  const userInfoContainer = document.querySelector(".user-info-container");
  
  // INITIALLY VARIABLES NEED ?

  let currentTab = userTab;
  const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
  currentTab.classList.add("current-tab");

  //EK KAAM OR PENDING HAI

  function switchTab(clickedTab){
    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab = classList.add("current-tab");
    
        if(!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active"); 
        }
        else{
            //ELSE ME PEHLE SEARCH WALE TAB PR THA, AB YOUR WEATHER TAB VISIBLE KRNA HAI.
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active ")
        }
    
    }
  }
   

  userTab.addEventListener("click", () =>{
    // PASS CLICKED TAB AS INPUT PARAMETER
    switchTab(userTab);
  });

  searchTab.addEventListener("click", () =>{
    // PASS CLICKED TAB AS INPUT PARAMETER
    switchTab(searchTab);
  });