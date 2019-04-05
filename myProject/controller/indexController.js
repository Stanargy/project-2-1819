const request = require('request')
let data = "";
let dataBattery = "";
 const reg = /\\t|\\n|\\r|\\|"/g


// This is returned to route!
exports.index = (req, res) =>{
    // render html + data

    res.render('index.ejs', {
        apiData: data
    }),
    console.log('entered index');
   // console.log(data)
}

exports.battery = (req, res) =>{
    res.render('battery.ejs', {
        apiData: dataBattery
    }),
    console.log('entered battery')
}



exports.detail = (req, res) =>{
    // render html + data
    res.render('detail.ejs', {data: req.params.id})
    console.log('entered detail of ' + req.params.id)
}
//


API();
API2();





function API(){
    request('https://www.cmd-amsterdam.nl/wp-json/wp/v2/pages/7', { json: true }, (err, res, body) => {
        if (err) { return console.log('Error during Data Retrievement: '+ err); }
       else {
        //console.log(body)
           data = data.concat(body.content.rendered)
           
         
            data = data.replace(reg, "")
               
            return data
        }
    })
};
    
function API2(){
    request('https://www.cmd-amsterdam.nl/wp-json/wp/v2/pages/7357', { json: true }, (err, res, body) => {
        if (err) { return console.log('Error during Data Retrievement: '+ err); }
       else {
        //console.log(body)
           dataBattery = dataBattery.concat(body.content.rendered)
           
          
            dataBattery = dataBattery.replace(reg, "")
               
            return dataBattery
        }
        // else {console.log(body[0].content); console.log('end of content')} ;
    })};
    



    //  //render file + data
    //  res.render('index.ejs', {
    //     mydata: slicedData
    // });

// exports.about = (req, res) => {
//     res.render('about');
// // }    fetch('https://www.cmd-amsterdam.nl/wp-json/wp/v2/pages/7')
//         .then((res) =>{
//             console.log(res.json());
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
//     }