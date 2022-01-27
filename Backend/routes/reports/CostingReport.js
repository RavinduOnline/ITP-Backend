const express = require("express");
const router = express.Router();
const cors = require("cors");

router.use(cors());

const fs = require("fs");
const PDFDocument = require("../reports_tables/costing-reports"); //import pdfkid

router.post("/costingReport", async function (req, res, next) {
    //load cuurent time
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var date = currentDate.getDate();
    var month = currentDate.getMonth(); //Be careful! January is 0 not 1
    var year = currentDate.getFullYear();
    var datestamp =
    "DATE:- " +
        year +
        "-" +
        (month + 1) +
        "-" +
        date;
        

    var timestamp =
    "TIME:- " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds;


    const costRequest = req.body.costing;
    console.log(costRequest)



    // Create The PDF document


    //var myDoc = new PDFDocument();
    var myDoc = new PDFDocument({ bufferPages: true });
    //myDoc.pipe(fs.createWriteStream(`${__dirname}example.pdf`));

    let buffers = [];
    myDoc.on("data", buffers.push.bind(buffers));
    myDoc.on("end", () => {
        let pdfData = Buffer.concat(buffers);

        res.writeHead(200, {
            "Content-Length": Buffer.byteLength(pdfData),
            "Content-Type": "application/pdf",
            "Content-disposition": `attachment;filename=cartlist_${datestamp}.pdf`,
        })
            .end(pdfData);
        


    });


    


    myDoc
        .fillColor("#444444") //letters
        .fontSize(20) 
        .text("Costing Report", 110, 57)
        .fontSize(10)
        .text("DELIGHT8", 200, 50, { align: "right" })
        .text("Kurunagala", 200, 65, { align: "right" })
        .text("Sri Lanka", 200, 80, { align: "right" })
        .text(datestamp,200,95,{align: "right"})
        .text(timestamp,200,110,{align: "right"})
        .moveDown();

        

    // Create the table - https://www.andronio.me/2017/09/02/pdfkit-tables/
    const table = {
        headers: [ "Cost Name","Year & Month", "Type", "Cost"],
        rows: [],
    };

    for (const costingItem of costRequest) {
        table.rows.push([
            costingItem.name,
            costingItem.yearAndmonth,
            costingItem.type,
            "Rs."+ costingItem.cost_LKR
        ]);
    }
    

    var total = 0
    for (const costingItem of costRequest) {
        
            
        total +=    costingItem.cost_LKR
        
    }
    console.log(total)


    myDoc.fontSize(12).fillColor("#0000FF")
    myDoc.text(`Total = Rs. ${total.toFixed(2)}`, 45, 120, { align: "left" }); 

    // Draw the table
    myDoc.fontSize(12).fillColor("#000")
    myDoc.moveDown().table(table, 15, 155, { width: 590 });


    

    


    myDoc.end();

    
});

module.exports = router;