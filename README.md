<h1 align=center>
<img src="https://fontmeme.com/permalink/220428/0a94a15c4f40e254e77ccb25a0d1d524.png"/>
</h1>

### **Application designed to manage files and folders as a google drive service**

```bash
  npm install
```
`Generate json file to access google services`
Access: 
  - `https://console.cloud.google.com`
  - `https://developers.google.com/drive/api`
  - `https://developers.google.com/drive/api/quickstart/nodejs`


`Enter your credentials and edit the main.js file. then run the command below`
```bash
  npm start   
```

`Example of use`
```javascript
  const Drive = require("./google_drive.js")

  const CREDENTIALS = './CredentialsServiceAccount.json'
  const SCOPES = ['https://www.googleapis.com/auth/drive.file']

  const services = new Drive(CREDENTIALS, SCOPES)

//upload of file
  await services.createFileUpload(filename, file, mimeType, folderId)
//delete file by id
  await services.deleteFile(fileId)
//list files
  await services.listFiles()
//create folder
  await services.createFolder(folderName)
```

```
Note: You need to allow the user created in Service_Acconunt to be able to read and write within a certain folder in Drive. 
This repository does not allow you to access the files contained in the root of the Drive, only within a folder with valid permissions.
```
<br/>
<br/>
<p align=center><b>Clebson Santos, 2022</b></p>