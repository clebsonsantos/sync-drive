import * as fs from 'fs'
import * as path from 'path'
import GoogleDriveService from './google_drive.js';

const CREDENTIALS = './CredentialsServiceAccount.json';

const SCOPES = ['https://www.googleapis.com/auth/drive.file'];

const file = fs.createReadStream(path.resolve('./files/wall-paper.png'))
const FOLDER = 'your_folder_id'
const mimeType = 'image/png'

async function run(){
  const upload = new GoogleDriveService(CREDENTIALS, SCOPES, FOLDER)
  
  const response = await upload.createFileUpload("spaces-wall-paper", file, mimeType)
  console.log(response)

}

run()