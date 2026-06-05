function doGet() {

  const folderId = "YOUR_FOLDER_ID";

  const folder = DriveApp.getFolderById(folderId);

  const files = folder.getFiles();

  const images = [];

  while(files.hasNext()){

    const file = files.next();

    images.push({
      name: file.getName(),
      url: `https://drive.google.com/thumbnail?id=${file.getId()}&sz=w2000`,
      download: `https://drive.google.com/uc?export=download&id=${file.getId()}`
    });

  }

  return ContentService
    .createTextOutput(JSON.stringify(images))
    .setMimeType(ContentService.MimeType.JSON);

}
