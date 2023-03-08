
const express = require('express');
const app = express();
app.use(express.static(__dirname));


const {google} = require("googleapis");
const port = 1738;

app.set("view engine", "ejs");

app.use(express.urlencoded({extended:true}));


app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.post('/submit-form', async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  console.log(`Received form submission: ${name}, ${email}, ${phoneNumber},`);
    
  const auth = new google.auth.GoogleAuth({
    keyFile:"EMF-contact-credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1Hy6tKQJmx82-2E0tVAiALanIikW89PI50eW02ius2eA";

  // Get metadata about spreadsheet
  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  // Read rows from spreadsheet
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Sheet1!A:A",
  });

  // Write row(s) to spreadsheet
  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Sheet1!A:C",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [
        [name, email, phoneNumber],
      ]
    }
  });
  
  res.send('Form submitted successfully!');
});

app.listen(port, (req, res) => {
  console.log(`Server listening at http://localhost:${port}`);
});