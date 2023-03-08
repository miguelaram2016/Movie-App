
const openButton = document.querySelector(".open-sidebar-button");
const sidebar = document.querySelector('.sidebar');


function openNav() {
  console.log('Button clicked!');
  sidebar.classList.toggle('sidebar--open');
}


function closeNav() {
  console.log('Button clicked!');
  sidebar.classList.remove('sidebar--open'); 
}



/*
const shareButton = document.querySelector('#share-button');
shareButton.addEventListener('click', async () => {

  try {
    await navigator.share({
      title: document.title,
      url: window.location.href
    });
  } catch (error) {
    console.error('Error sharing:', error);
  }
});

navigator.share({
  title: 'El Mar Fitness',
  text: 'Get strong with me',
  url: 'https://elmarfitness.com'
});
*/
/*
function submitData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phone-number").value;
  console.log("Made it here");
  const url = "https://sheets.googleapis.com/v4/spreadsheets/1Hy6tKQJmx82-2E0tVAiALanIikW89PI50eW02ius2eA/values/Sheet1!A2:C?key=cec0a9d69dc0eda38a6c9327673115c7761d36e0";
  const xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert("Data submitted successfully!");
      
    }
    else {
      console.log("Error!");
    }
  };
  const data = JSON.stringify({"name": name, "email": email, "phone-number": phoneNumber});
  xhr.send(data);
}

function writeToGoogleSheet() {
  // The ID of your Google Sheets file (found in the URL)
  const sheetId = '1Hy6tKQJmx82-2E0tVAiALanIikW89PI50eW02ius2eA';

  // The API key for your GCP project
  const apiKey = 'cec0a9d69dc0eda38a6c9327673115c7761d36e0';

  // The range of cells to write to in your sheet
  const range = 'Sheet1!A2:C';

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phone-number").value;

  // The data to write to the sheet
  const data = [[name, email, phoneNumber]];

  // The request parameters
  const params = {
    spreadsheetId: sheetId,
    range: range,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    resource: { values: data },
    key: apiKey
  };

  // Send the data to the Google Sheets API
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://sheets.googleapis.com/v4/spreadsheets/' + sheetId + '/values/' + range + ':append');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Authorization', 'Bearer ' + apiKey);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      console.log(response);
    }
  };
  xhr.send(JSON.stringify(params));
}*/