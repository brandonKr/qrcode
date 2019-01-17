var QRCode = require('qrcode');
module.exports = function(app){
    app.get('/:qrcode',function(req,res){
        
        let inputStr = req.params.qrcode;        
        QRCode.toDataURL(inputStr,{ version: 4 }, function (err, url) {
          let data = url.replace(/.*,/,'')
          qrImage = data
          console.log(url);
            
            res.render('qrCreate',{
            title: "Create QrCode",
            length: 14,
            qrimage: qrImage,
            inputStr: inputStr
            })
        })
        
        
    });
    
    app.get('/',function(req,res){
        res.render('index',{
            title: "TEST PAGE",
            length: 14
        })
    });
}