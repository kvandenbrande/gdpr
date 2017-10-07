$(function () {
  $('#DownloadButton').click(update);
});

var template = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<!--Document created by: Kevin Van den Brande, Voka-Kamer van Koophandel Antwerpen-Waasland -->',
  '<<?Procesnaam?>>',
  '<META>',
  '<Entity><?Entity?></Entity>',
  '<Date><?Date?></Date>',
  '<Contact><?Contact?></Contact>',
  '</META>',
  '<PRIVACY>',
  '<Notie><?Notie?></Notie>',
  '<Akkoord><?Akkoord?></Akkoord>',
  '<Inzagerecht><?Inzagerecht?></Inzagerecht>',
  '<Verbeterrecht><?Verbeterrecht?></Verbeterrecht>',
  '<Verwijderrecht><?Verwijderrecht?></Verwijderrecht>',
  '</PRIVACY>',
  '<MOTIVATION>',
  '<Info><?Info?></Info>',
  '<Motivation><?Motivation?></Motivation>',
  '<Timeframe><?Timeframe?></Timeframe>',
  '<KeyUsers><?KeyUsers?></KeyUsers>',
  '<Remarks><?MotRemarks?></Remarks>',
  '</MOTIVATION>',
  '<ACCESS>',
  '<Owner><?Owner?></Owner>',
  '<AccessControl><?AccessControl?></AccessControl>',
  '<Remarks><?AccRemarks?></Remarks>',
  '<<?ExportContact?>>',
  '<ExportReason><?ExportReason?></ExportReason>',
  '<ExportContract><?ExportContract?></ExportContract>',
  '<Remarks><?ExportRemarks?></Remarks>',
  '</<?ExportContact?>>',
  '<<?ExternalContact?>>',
  '<ExternalReason><?ExternalReason?></ExternalReason>',
  '<ExternalContract><?ExternalContract?></ExternalContract>',
  '<Remarks><?ExternalRemarks?></Remarks>',
  '</<?ExternalContact?>>',
  '</ACCESS>',
  '<TECHNICAL>',
  '<Storage><?Storage?></Storage>',
  '<Encryption><?Encryption?></Encryption>',
  '<Backupstorage><?Backupstorage?></Backupstorage>',
  '<Backupencryption><?Backupencryption?></Backupencryption>',
  '<Backuptime><?Backuptime?></Backuptime>',
  '<Remarks><?TecRemarks?></Remarks>',
  '</TECHNICAL>',
  '<DOCUMENTATIE>',
  '<Procedure><?Procedure?></Procedure>',
  '<Policy><?Policy?></Policy>',
  '<Remarks><?DocRemarks?></Remarks>',
  '</DOCUMENTATIE>',
  '</<?Procesnaam?>>'
].join('\r\n');

function setdate(){
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var date = year.toString() + '-' + month.toString() + '-' + day.toString();
  return date;
};
function settime(){
  var currentDate = new Date();
  var minutes = currentDate.getMinutes();
  var hours = currentDate.getHours();
  var time = '_' + hours.toString() + '-' + minutes.toString();
  return time;
};

function filename() {
  var file = setdate() + settime() +'.xml';
  return file;
};

function update() {
  var variables = {
    'Date': setdate(),
    'Contact': $('#Contact').val(),
    'KeyUsers': $('#KeyUsers').val(),
    'Owner': $('#Owner').val(),
    'Storage': $('#Storage').val(),
    'Encryption': $('#Encryption').val(),
    'Backupstorage': $('#Backupstorage').val(),
    'Backupencryption': $('#Backupencryption').val(),
    'Backuptime': $('#Backuptime').val(),
    'Entity': $('#Entity').val(),
    'MotRemarks': $('#MotRemarks').val(),
    'DocRemarks': $('#DocRemarks').val(),
    'TecRemarks': $('#TecRemarks').val(),
    'AccRemarks': $('#AccRemarks').val(),
    'Procesnaam': $('#Procesnaam').val(),
    'External': $('#External').val(),
    'Export': $('#Export').val(),
    'Notie': $('#Notie').val(),
    'Akkoord': $('#Akkoord').val(),
    'Inzagerecht': $('#Inzagerecht').val(),
    'Verbeterrecht': $('#Verbeterrecht').val(),
    'Verwijderrecht': $('#Verwijderrecht').val(),
    'Policy': $('#Policy').val(),
    'Procedure': $('#Procedure').val(),
    'Info': $('#Info').val(),
    'Motivation': $('#Motivation').val(),
    'Timeframe': $('#Timeframe').val(),
    'AccessControl': $('#AccessControl').val(),
    'ExternalContact': $('#ExternalContact').val(),
    'ExternalContract': $('#ExternalContract').val(),
    'ExternalReason': $('#ExternalReason').val(),
    'ExternalRemarks': $('#ExternalRemarks').val(),
    'ExportContact': $('#ExportContact').val(),
    'ExportContract': $('#ExportContract').val(),
    'ExportReason': $('#ExportReason').val(),
    'ExportRemarks': $('#ExportRemarks').val()
  };

  var newXml = template.replace(/<\?(\w+)\?>/g,
    function(match, name) {
      return variables[name];
    });


  $('#ResultXml').val(newXml);
  $('#DownloadLink')
    .attr('href', 'data:text/xml;base64,' + btoa(newXml))
    .attr('download', filename());
  $('#generated').show();
}

if (!window.btoa) {
  // Source: http://www.koders.com/javascript/fid78168FE1380F7420FB7B7CD8BAEAE58929523C17.aspx
  btoa = function (input) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    var result = '';
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    do {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      result += chars.charAt(enc1) + chars.charAt(enc2) + chars.charAt(enc3) + chars.charAt(enc4);
    } while (i < input.length);

    return result;
  };
}
