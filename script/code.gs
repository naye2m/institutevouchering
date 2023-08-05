var testAppsScript_outputs = {
  doc: DocumentApp.openById("1bD5vMNq2TFJ2ssvzFBq66P-YXUCSf4oY03bTvnm3Xjc").getBody()
}
const sheetName = 'Sheet1'
var eTmp = {}

Logger.log(DriveApp.getFolderById('1EdkFyxMT0yOR2mFLQ_GkBUVA2y_BGcG_').getUrl())

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
  e = { "parameter": { "test": "WyJOQVlFTSIsIkRIQUtBIiwic2ZhQGlsLmNvbSIsIjIwMjMtMDctMzBUMTI6MTk6MzMuNDcyWiIsW1sxLCJmamEiLCJtIiwxMzAwLDUsIjF5ZWFyIiw2NTAwXSxbMiwiYiIsIm4iLDE1MDAsNiwiMXllYXIiLDkwMDBdLFszLCJjIiwibyIsMTAwMCwyLCIxeWVhciIsMjAwMF0sWzQsImQiLCJwIiwxMjAwLDMsIjF5ZWFyIiwzNjAwXSxbNSwiZjBqYSIsIm0iLDEzMDAsNSwiMXllYXIiLDY1MDBdLFs2LCJiMCIsIm4iLDE1MDAsNiwiMXllYXIiLDkwMDBdLFs3LCJjMCIsIm8iLDEwMDAsMiwiMXllYXIiLDIwMDBdLFs4LCJkMCIsInAiLDEyMDAsMywiMXllYXIiLDM2MDBdXSw4LCJDdXN0b21lciIsbnVsbCwxMTAwLDQxMTAwLDQyMjAwLCIrMDE2NDU1NDU0NjUiLFt0cnVlLCJ2MSIsIjA0MDEzMDA3MjMiXV0=" }, "queryString": "", "contextPath": "", "contentLength": 675, "parameters": { "test": ["WyJOQVlFTSIsIkRIQUtBIiwic2ZhQGlsLmNvbSIsIjIwMjMtMDctMzBUMTI6MTk6MzMuNDcyWiIsW1sxLCJmamEiLCJtIiwxMzAwLDUsIjF5ZWFyIiw2NTAwXSxbMiwiYiIsIm4iLDE1MDAsNiwiMXllYXIiLDkwMDBdLFszLCJjIiwibyIsMTAwMCwyLCIxeWVhciIsMjAwMF0sWzQsImQiLCJwIiwxMjAwLDMsIjF5ZWFyIiwzNjAwXSxbNSwiZjBqYSIsIm0iLDEzMDAsNSwiMXllYXIiLDY1MDBdLFs2LCJiMCIsIm4iLDE1MDAsNiwiMXllYXIiLDkwMDBdLFs3LCJjMCIsIm8iLDEwMDAsMiwiMXllYXIiLDIwMDBdLFs4LCJkMCIsInAiLDEyMDAsMywiMXllYXIiLDM2MDBdXSw4LCJDdXN0b21lciIsbnVsbCwxMTAwLDQxMTAwLDQyMjAwLCIrMDE2NDU1NDU0NjUiLFt0cnVlLCJ2MSIsIjA0MDEzMDA3MjMiXV0="] } }
  var n1bool = false
  testAppsScript_outputs.doc.appendHorizontalRule()
  testAppsScript_outputs.doc.appendParagraph(JSON.stringify(e))
  // Logger.log(e)//1 
  // let nn = 0;
  var eTmp = {
    ...e
  }
  // testAppsScript_outputs.doc.appendHorizontalRule()
  // testAppsScript_outputs.doc.appendParagraph(JSON.stringify(e))
  // Logger.log(eTmp.parameter["test"])//2
  // Logger.log(eTmp.json = JSON.parse(Utilities.newBlob(Utilities.base64Decode(eTmp.parameter["test"])).getDataAsString()))//3
  eTmp.json = JSON.parse(Utilities.newBlob(Utilities.base64Decode(eTmp.parameter["test"])).getDataAsString())
  eTmp.json.test = eTmp.parameter["test"]
  //?? new added t1
  let keyList = ["name", "address", "emailAdd", "time", "items", "itemCount", "buyingFor", "invoiceNumber", "_discountAmount", "grandTotal", "subtotal", "phone", "options"]
  let [namesORkeys, valueArr, tmpObj] = [keyList, eTmp.json, {}];
  for (let i = 0; i < namesORkeys.length; i++) {
    tmpObj[namesORkeys[i]] = valueArr[i];
  }
  eTmp.json = { ...tmpObj };
  eTmp.folder = DriveApp.getFolderById('11kmj5sBHRJ6A5KurUlE7CmwVQOVLLA-A')
  eTmp.folder2 = DriveApp.getFolderById('1YligxFKUjZufjJjLQhtqLNSD6yZtdNPg')//customer voucher root
  eTmp.testfolder = DriveApp.getFolderById('1YYHDHgn7eiLmob-yFEBmDVBYZ8DwQH1F')//test folder under customervowcher
  eTmp.JSONsfolder = DriveApp.getFolderById('1EdkFyxMT0yOR2mFLQ_GkBUVA2y_BGcG_')//JSONs folder under customervowcher
  eTmp.doc = DocumentApp.openById('1EN4o5nb-nLjGw31hzSdhhV9CI_30akRQcd9PrWHpDJE')
  eTmp.sheet = SpreadsheetApp.openById('1poxqbupKQotVWwvjsoxhGBZg49jhztHTfsp9JABT3bQ')
  //?? new t1 end/////
  //   const newRow = headers.map(function (header) {
  //   return header === 'Date' ? new Date() : e.parameter[header]
  // })
  const lock = LockService.getScriptLock()
  lock.tryLock(10000)
  // nn = 1
  try {
    const doc = SpreadsheetApp.openById('1Jc627Uk1dxyFnFfiMxRSQIhcJ-2_reGcRiwS0R76vW4')
    // const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    // Logger.log(scriptProp.getProperty('key'))
    const sheet = doc.getSheetByName(sheetName)
    // Logger.log()
    // throw new Error({'hehe':'haha'})
    // const fsheet = aTest.sheet
    // const sheet = fsheet.getSheetByName('sheet1')
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    const nextRow = sheet.getLastRow() + 1
    let tmpJson = eTmp.JSONsfolder.createFile(`${nextRow - 1} No rows json file.json`, `{"jsonFetchetfromWeb":${JSON.stringify(eTmp.json)}}`)
    // nn++
    eTmp.json['JSONurl'] = tmpJson.getDownloadUrl()
    eTmp.json['JSONid'] = tmpJson.getId()
    const newRow = headers.map(function (header) {
      return header === 'Date' ? new Date() : header === "items" ? eTmp.json.items.join("\)\(") : eTmp.json[header]
    })
    // todo afile Url that will get the next page
    // Logger.log(eTmp.json.items)//4
    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])
    // Logger.log(eTmp.JSONsfolder)//t1 test
    // Logger.log(eTmp.json.JSONurl)
    // Logger.log(eTmp.json.JSONid)
    // Logger.log(tmpJson.getId())
    // nn = 3
    // Logger.log(JSON.stringify({ 'result': 'success', 'mailRemains': MailApp.getRemainingDailyQuota(), 'row': nextRow, 'resDat': [, nextRow - 1] }))
    ////t1\// st////
    // eTmp.json.emailAdd = "citizenit.bd+customergmail.com"
    eTmp.json.emailAdd = eTmp.json.emailAdd.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ? eTmp.json.emailAdd : "citizenit.bd+customer@gmail.com"
    Logger.log(eTmp.json.emailAdd)
    // var tmpMailList = ['nayeem.citizenit+bb@gmail.com', 'nayeem.citizenit+aa@gmail.com', eTmp.json.emailAdd]
    var tmpMailList = [ 'nayeem.citizenit+aa@gmail.com', eTmp.json.emailAdd]
    // todo (dev) mail list should be modified by front end
    ///t1 end//////////////////////////////////////////

    // nn= "succsess";
    Logger.log({ 'result': 'success', 'mailRemains': MailApp.getRemainingDailyQuota() - tmpMailList.length, 'row': nextRow, 'resDat': [eTmp.json.JSONid, nextRow - 1] })
    n1bool = true
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'mailRemains': MailApp.getRemainingDailyQuota()- tmpMailList.length, 'row': nextRow, 'resDat': [eTmp.json.JSONid, nextRow - 1] }))
      .setMimeType(ContentService.MimeType.JSON)
  } catch (err) {
    n1bool = false
    Logger.log({ 'result': 'error', 'error': err.massage, 'errorName': err })
    MailApp.sendEmail({
      to: "nayeem.citizenit+CITSvowDatErr@gmail.com",
      subject: "CITSvowDat err",
      htmlBody: `<p>${JSON.stringify(e)} </p>
      <p>${JSON.stringify({ 'result': 'error', 'error': err, 'errmas': err.massage })} </p>`,
    })
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': err }))
      .setMimeType(ContentService.MimeType.JSON)
  } finally {
    lock.releaseLock()
    if (!n1bool) {
      return
    } else if(MailApp.getRemainingDailyQuota() >= tmpMailList.length) {
      let nameInL = eTmp.json.name.toLowerCase()
      for (let i = 0; i < tmpMailList.length; i++) {
        // Logger.log(tmpMailList[i])
        //////////////////////////////////
        MailApp.sendEmail({
          to: tmpMailList[i],//use separate sendMail
          subject: `Mr. ${nameInL[0].toUpperCase() + nameInL.substring(1)} sir please recive your voucher - Citizen IT voucher`,
          htmlBody: `<h1>Your order has confirmed!🥳🎉</h1>
            <p>This is your online voucher validation</p>
            <a id="anc" href="https://naye2m.github.io/citizenitonlinevoucher/?id=${eTmp.json.JSONid}&me=em">Get voucher</a>
            <table>
                <tbody>
                    <tr>
                        <td>Total price:</td>
                        <td>${eTmp.json["subtotal"]}</td>
                    </tr>
                    <tr>
                        <td>Total discount:</td>
                        <td>${eTmp.json["_discountAmount"]}</td>
                    </tr>
                    <tr>
                        <td>Grand total:</td>
                        <td>${eTmp.json["grandTotal"]}</td>
                    </tr>
                </tbody>
            </table>
        </Div>`
        })
      }
    }
  }
}