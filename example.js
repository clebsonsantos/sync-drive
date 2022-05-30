import * as fs from 'fs'
import * as path from 'path'
import GoogleDriveService from './google_drive.js';


const credentials = './CredentialsServiceAccount.json';
const folderId = 'your_folder_id'

async function run(){
  const upload = new GoogleDriveService(credentials, folderId)
  
  const file = fs.createReadStream(path.resolve('./files/wall-paper.png'))
  const mimeType = 'image/png'

  const response = await upload.createFileUpload("spaces-wall-paper", file, mimeType)
  console.log(response)

}

run()