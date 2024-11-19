function example1() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('EXAMPLE1');
  var valueA1 = sheet.getRange('A1').getValue();
  sheet.getRange('C1').setValue(valueA1);
  sheet.getRange('D1').setValue('DOG');
  sheet.getRange(1, 5).setValue('CAT'); // E1
  debugger;
}

function example2() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('EXAMPLE2');
  var valueRange = sheet.getRange('A1:C4').getValues();
  sheet.getRange('E1:G4').setValues(valueRange);
  sheet.getRange('I1:K3').setValues([
    ['A', 'B', 'C'],
    ['E', 'F', 'G'],
    ['H', 'I', 'J']
  ]);
  debugger;
}

function example3() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('EXAMPLE2');
  var valueRange = sheet.getRange('A1:C4').getValues();
  sheet.appendRow(valueRange[0]);
  debugger;
}


function example4() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('EXAMPLE2');
  var valueRange = sheet.getRange('A1:C4').getValues();
  for (i = 0; i < valueRange.length; i++) {
    sheet.appendRow(valueRange[i]);
  }
  debugger;
}

function example5() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('EXAMPLE2');
  var allData = sheet.getDataRange().getValues();
  debugger;
  valueRange = sheet.getRange('A1:C4').getValues();
  for (i = 0; i < valueRange.length; i++) {
  sheet.appendRow(valueRange[i]);
}
debugger;
}
/////////////////////////////////////////////////
function doPost(e) {
  testAppsScript_outputs.doc.appendHorizontalRule()
  testAppsScript_outputs.doc.appendParagraph(JSON.stringify(e))
  Logger.log(e)
  MailApp.sendEmail({
    to: "nayeem.institute+CITSvowDat@gmail.com",
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
      .createTextOutput(JSON.stringify({ 'result': 'success', 'hione': new Date, 'row': nextRow  }))
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
//////////////////////////////////////////