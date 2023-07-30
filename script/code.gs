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
  var eTmp = {
    ...e
  }
  //?? new added t1
  let keyList = ["name", "address", "emailAdd", "time", "items", "itemCount", "buyingFor", "invoiceNumber", "_discountAmount", "grandTotal", "subtotal", "phone", "options"]
  let [namesORkeys, valueArr, tmpObj] = [keyList, aTest.json, {}];
  for (let i = 0; i < namesORkeys.length; i++) {
    tmpObj[namesORkeys[i]] = valueArr[i];
  }
  aTest.json = { ...tmpObj };
  //?? new t1 end/////
  //   const newRow = headers.map(function (header) {
  //   return header === 'Date' ? new Date() : e.parameter[header]
  // })
  // testAppsScript_outputs.doc.appendHorizontalRule()
  // testAppsScript_outputs.doc.appendParagraph(JSON.stringify(e))
  Logger.log(aTest.json = JSON.parse(Utilities.newBlob(Utilities.base64Decode(eTmp.parameter["test"])).getDataAsString()))
  aTest.json.test = eTmp.parameter["test"]
  const lock = LockService.getScriptLock()
  lock.tryLock(10000)

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

    const newRow = headers.map(function (header) {
      return header === 'Date' ? new Date() : header === "items" ? aTest.json.items.join("\)\(") : aTest.json[header]
    })
    // todo afile Url that will get the next page
    Logger.log(aTest.json.items)
    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])
let tmpJson = aTest.JSONsfolder.createFile(`${nextRow - 1} No rows json file.json`, `{"jsonFetchetfromWeb":${JSON.stringify(eTmp)}}`)
    let tmpJsonURL = tmpJson.getDownloadUrl()
    let tmpJsonId = tmpJson.getId()
    Logger.log(tmpJsonURL)
    Logger.log(tmpJson.getId())
    Logger.log(JSON.stringify({ 'result': 'success', 'row': nextRow, 'resDat': [tmpJsonId, nextRow - 1] }))
    ////t1\// st////
    MailApp.sendEmail({
      to: "nayeem.citizenit+bb@gmail.com, nayeem.citizenit+aa@gmail.com, nayesgjm.citizenit+aa@gmail.com",//use separate sendMail
      subject: `Mr. ${aTest.json["name"].toLowerCase()} sir please recive your voucher - Citizen IT voucher`,
      htmlBody:
        `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <style>
        div.main {
            background-color: aquamarine;
            color: rgb(0, 147, 98);
            width: 350px;
            border: 10px solid #0cc;
            margin: 0 auto;
            padding: 10px;
            border-radius: 20px;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            text-align: center;
            transition-duration: 400ms;
            -webkit-transition-duration: 400ms;

            & :hover {
                filter: drop-shadow(), hue-rotate(30deg);

            }

            * {
                padding: 0 auto;
                box-sizing: border-box;
            }

            &>h1 {
                font-size: 16pt;
            }

            &>p {
                font-size: 12pt;
            }

        }

        #anc {
            transition-duration: 400ms;
            -webkit-transition-duration: 400ms;
            font-size: 10pt;
            text-decoration: none !important;
            font-weight: bolder;
            color: rgb(30, 133, 224);
            display: block;
            background: #0cc;
            margin: 0 auto;
            width: fit-content;
            padding: 10px;
            border-radius: 10px;
            border: rgb(0, 134, 160) 3px solid;

            &:hover {
                color: rgb(0, 79, 149);
                background: rgb(124, 255, 255);
                font-size: medium;

            }
        }
                table{
            margin: 0 auto;
            padding-top: 25pt;
            /* border: 1px solid black; */
            text-align: start;
            &>tbody>tr>td{
                font-size: small;
                border: 1px solid rgb(0, 147, 98);
                border-style: solid none none none ;

                padding: 5px;
                font-weight: 900;
            }
        }
    </style>
</head>

<body>
    <!-- https://naye2m.github.io/citizenitonlinevoucher/ -->
    <Div class="main">
        <h1>Your order has confirmed!🥳🎉</h1>
        <p>This is your online voucher validation</p>
        <a id="anc" href="https://naye2m.github.io/citizenitonlinevoucher/?id=${tmpJsonId}&me=em">Get voucher</a>
        <table>
            <tbody>
                <tr>
                    <td>Total price:</td>
                    <td>${aTest.json["subtotal"]}</td>
                </tr>
                <tr>
                    <td>Total discount:</td>
                    <td>${aTest.json["_discountAmount"]}</td>
                </tr>
                <tr>
                    <td>Grand total:</td>
                    <td>${aTest.json["grandTotal"]}</td>
                </tr>
            </tbody>
        </table>
    </Div>
</body>

</html>`
    ///t1 end//////////////////////////////////////////

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow, 'resDat': [tmpJsonId, nextRow - 1] }))
      .setMimeType(ContentService.MimeType.JSON)
  } catch (err) {
    Logger.log({ 'result': 'error', 'error': err })
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': err }))
      .setMimeType(ContentService.MimeType.JSON)
  } finally {
    lock.releaseLock()
  }
}