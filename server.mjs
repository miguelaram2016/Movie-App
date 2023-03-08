import { createServer } from 'http';
import express from 'express';
import ejs from 'ejs';
import path from 'path';
import { fileURLToPath } from 'url';
const PORT = 1738;
import { google } from "googleapis";

const app = express();
app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const publicPath = path.join(__dirname, '/');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

/*
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(filePath);
});
createServer((req, res) => {
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  //res.write('Hello World! and all who inhabit it!');
  res.end();
}).listen(PORT); 
//}).listen(process.env.PORT);



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
*/


app.post('/submit-form', async (req, res) => {
  // Collect data from form
  const name = req.body.name;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  console.log(`Received form submission: ${name}, ${email}, ${phoneNumber},`);

  // Create authorization object
  const auth = new google.auth.GoogleAuth({
    keyFile:"credentials/EMF-contact-credentials.json",
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

app.listen(PORT, () => {
  console.log('Server listening on port', PORT);
});
