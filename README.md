<h1 align=center>
<img src="https://fontmeme.com/permalink/220529/f15732c0844ec3409990f86fe3568ba8.png"/>
</h1>

### **Application designed to manage files and folders as a google drive service**

`Install`
```bash
  npm install sync-drive
```
`Generate json file to access google services`
Access: 
  - `https://console.cloud.google.com`
  - Create service account
  - keys, add new keys
  - export to json

`Example of use`
```javascript
  // if you prefer you can use `require`
  import * as fs from 'fs'
  import * as path from 'path'
  import GoogleDriveService from 'sync-drive';

  const CREDENTIALS = './CredentialsServiceAccount.json';

  const SCOPES = ['https://www.googleapis.com/auth/drive.file'];

  const file = fs.createReadStream(path.resolve('./files/wall-paper.png'))
  const FOLDER = 'id_of_your_folder'
  const mimeType = 'image/png'

  async function run(){
    const upload = new GoogleDriveService(CREDENTIALS, SCOPES, FOLDER)
    
    const response = await upload.createFileUpload("spaces-wall-paper", file, mimeType)
    console.log(response)

  }

  run()

//TODO: upload of file
// await services.createFileUpload(filename: string, file: string, mimeType: string, folderId: string)
//TODO: delete file by id
// await services.deleteFile(fileId: string)
//TODO: list files
// await services.listFiles()
//TODO: create folder
// await services.createFolder(folderName: string)
```

```
Note: You need to allow the user created in Service_Acconunt to be able to read and write within a certain folder in Drive. 
This repository does not allow you to access the files contained in the root of the Drive, only within a folder with valid permissions.
```
<br/>
<br/>
<p align=center><b>Clebson Santos, 2022</b></p>