var testAppsScript_outputs = {
  doc: DocumentApp.openById("1bD5vMNq2TFJ2ssvzFBq66P-YXUCSf4oY03bTvnm3Xjc").getBody()
}
const sheetName = 'Sheet1'

const scriptProp = PropertiesService.getScriptProperties()
function testHere(param) {

  //  // Logger.log(SpreadsheetApp.getActiveSpreadsheet().getId())
  // Create an HTML file with the content "Hello, world!"
  DriveApp.createFile('New HTML File', '<b>Hello, world!</b>', MimeType.HTML);
  //  let newfile = DriveApp.createFile('newJSON.json', '{name: NaN}');
  // let newFolder = DriveApp.createFolder('GStest');
  let newFolder = DriveApp.getFolderById("15kh_y_vSKgxUJBwT4Uihw1YKe-2yw4r9")
  let newfile = DriveApp.getFileById('1b4yE0251JtI9ggsqMcjWTaUsJ4rRDLp9');
  var file = newfile;
  MailApp.sendEmail({
    to: "nayeem.citizenit@gmail.com",
    subject: "Logos",
    htmlBody: `inline Google Logo<img src=''> images! <br> 
      inline YouTube Logo <img src=''>`,
  });
  
  // Logger.log(DocumentApp.create("testAppsScript_outputs").getId())

  Logger.log(newfile.getId(), SpreadsheetApp.getActiveSpreadsheet().getId())
  Logger.log(newFolder.getId())

}
function testOnSheet(param) {
  let afile = DriveApp.getFileById('1b4yE0251JtI9ggsqMcjWTaUsJ4rRDLp9');
  afile.setContent(param)
}
function intialSetup() {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()

  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost(e) {
  testAppsScript_outputs.doc.appendHorizontalRule()
  testAppsScript_outputs.doc.appendParagraph(JSON.stringify(e))
  Logger.log(e)
  MailApp.sendEmail({
    to: "nayeem.citizenit+CITSvowDat@gmail.com",
    subject: "CITSvowDat",
    htmlBody: `inline Google Logo<img src=''> images! <br> 
      inline YouTube Logo <img src=''>
      <p>${JSON.stringify(e)} `,
  })
  const lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    const doc = SpreadsheetApp.openById('1Jc627Uk1dxyFnFfiMxRSQIhcJ-2_reGcRiwS0R76vW4')
    // const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    // Logger.log(scriptProp.getProperty('key'))
    const sheet = doc.getSheetByName(sheetName)
    // Logger.log()
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    const nextRow = sheet.getLastRow() + 1
    
    const newRow = headers.map(function (header) {
      return header === 'Date' ? new Date() : e.parameter[header]
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'hione': 5, 'row': nextRow  }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e.message }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
    // return 'returned ok'
  }
}