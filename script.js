/* write your script here */
let database = [

    {
      name:"Oakland High",
      address:"1023 MacArthur",
      mascot:"Wildcat",
      yearbook :" Oaken Bucket",
      year :"1869"
    },
    {
      name:"Oakland Tech",
      address:"4351 Broadway, Oakland, CA 94611",
      mascot:"Bobo the Bulldog",
      yearbook :"The Scribe Annual",
      year :"1914"
    },
    {
      name:"Fremont High School ",
      address:"4610 Foothill Blvd, Oakland, CA 94601",
      mascot:"Tiger",
      yearbook :" Flame",
      year :"1905"
    },
    {
      name:"Castlemont High School",
      address:"12250 Skyline Boulevard Oakland, CA 94619",
      mascot:"Knights",
      yearbook :" Falcon",
      year :"1929"
    },
    {
      name:"Skyline High School",
      address:"12250 Skyline Blvd, Oakland, CA 94619",
      mascot:"Titan",
      yearbook :" The Origin",
      year :"1959"
    }

];

 searchBar= document.getElementById('search-bar');

 searchButton= document.getElementById('search-button');

 autoSuggestions= document.getElementById('auto-suggestions');

 display = document.getElementById('display');

searchBar.addEventListener('keypress', checkKey);

searchButton.addEventListener('click', processInput);

searchBar.addEventListener('input',getAutoSuggestions);

function checkKey(e) {

  var key = e.which || e.keyCode;

  if(key == 13) {
  //  console.log(“You pressed enter!”);
  processInput();
  }
}

  function processInput(){
    let cleanedInput = searchBar.value.toLowerCase().trim();

    autoSuggestions.innerHTML = "";

    autoSuggestions.style.display = 'none';

    searchBar.value= "";

    let databaseRecord = getRecord(cleanedInput);
    console.log('cleanedInput');

    if(databaseRecord!=null){

      displayRecord(databaseRecord);

    }else{

      alert('No Results');

    }
  }

  function getRecord(cleanedInput){
    for (let i =0; i< database.length; i++){

      let cleanedRecordName= database[i].name.toLowerCase().trim();

      if (cleanedInput==cleanedRecordName){

        return database[i];
      }
    }
    return null;
  }

  function displayRecord(databaseRecord) {

    let recordName = document.createElement("h2");

    let recordAddress = document.createElement("h2");

    let recordMascot = document.createElement("h2");

    let recordYearbook = document.createElement("h2");

    let recordYear = document.createElement("h2");

    recordName.innerHTML = databaseRecord.name;

    recordAddress.innerHTML = databaseRecord.address;

    recordMascot.innerHTML = databaseRecord.mascot;

    recordYearbook.innerHTML = databaseRecord.yearbook;

    recordYear.innerHTML = databaseRecord.year;


    display.appendChild(recordName);

    display.appendChild(recordAddress);

    display.appendChild(recordMascot);

    display.appendChild(recordYearbook);

    display.appendChild(recordYear);
  }

  function getAutoSuggestions(){

    let cleanedInput = searchBar.value.toLowerCase().trim();

    autoSuggestions.innerHTML= "";

   for (var i = 0; i < database.length; i++) {
      database[i];
    }
  }
