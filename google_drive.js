import {google}  from 'googleapis'

class GoogleDriveService {

  constructor(CREDENTIALS, SCOPES){
    this.OAuth2client = new google.auth.GoogleAuth({
      keyFile: CREDENTIALS,
      scopes: SCOPES
    })
    
    this.drive = google.drive({ 
      version: "v3",
      auth: this.OAuth2client
    })

  }


  createFileUpload = async(filename, file, mimeType, folder) => {
    let media = {
      mimeType: mimeType,
      body: file
    }
    const response = await this.drive.files.create({
      requestBody: {
        name: filename,
        parents: [folder]
      },
      media: media,
    })
    if(response.status == 200){
      return response.data
    }
  }

  deleteFile = async(idFile) => {
      await this.drive.files.delete({
        fileId: idFile
      }).then(console.log('file deleted id: ' + idFile))
    
  }

  listFiles = async() => {

    const list = await this.drive.files.list()
    const filesDrive = list.data.files

    return filesDrive
  }

  createFolder = async (nameFolder)=>{
      var requestBody = {
        name: nameFolder,
        mimeType: 'application/vnd.google-apps.folder'
    };
    const response = await this.drive.files.create({
      requestBody    
    })

    if(response.status == 200){
      return response.data
    }

  }
}


export default GoogleDriveService