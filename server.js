
const express = require('express');      // <---------------- import express js and asign to constant called mongoose
const mongoose = require('mongoose');    //  <----------------import mongoose and asign to constant called mongoose
const bodyParser = require('body-parser'); // <---------------import body-parser, because this information comeup with json format to this sever.js. and this sever.js can't understand json format, so we use body parser to convert json files to javascript objects for understand to this server.
const cors = require('cors');              //  <--------------import cors and asign to constant called cors, this is used for becuase backend run in one port and front end run in another port. so web-browsers take this two diffrernt incoming ports as a thread so they block it. IT called as cors error!. so we import this beacuse solution for that perticular problem :)
require ("dotenv").config();

const app = express();        // <-------------- create app for run server--import express here

//import routes
const postRoutes = require('./routes/FoodItems'); // <-------------- import routes here
const discountRoutes = require('./routes/Discount');
const costingRoutes = require('./routes/costing');
const inventryRoutes = require('./routes/Inventry');
const userAccountRoutes = require('./routes/Customer');
const cartroutes = require('./routes/Cart');
const EmployeesRouter = require("./routes/Employees");
const PaymentsRouter = require("./routes/Payments");

const fooditemsPDF = require('./routes/reports/FoodItemsReport');      // <-----------------------PDF Reports
const inventoryReport = require('./routes/reports/InventoryReport');
const customerPDF = require('./routes/reports/CustomerReport');
const costingPDF  = require('./routes/reports/CostingReport');
const discountsPDF = require('./routes/reports/Discount_Report');
const staffPDF  = require('./routes/reports/StaffReport');
const paymentPDF = require('./routes/reports/PaymentReport');


app.use(bodyParser.json({   // <-------------- App middleware for body-parser
    limit: '50mb'
}));   
app.use(bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 100000,
    extended: true 
  }));

app.use(cors());              // <-------------- App middleware for cors

app.use(express.json({limit: "50mb"}));        // <---------------------image Upload
app.use(express.urlencoded({limit: "50mb"}));

app.use(postRoutes);          // <-------------- route middleware
app.use(discountRoutes);
app.use(costingRoutes);
app.use(inventryRoutes);
app.use(userAccountRoutes);
app.use(EmployeesRouter);
app.use(cartroutes);
app.use(PaymentsRouter);
app.use(fooditemsPDF);
app.use(inventoryReport);
app.use(customerPDF);
app.use(costingPDF);
app.use(discountsPDF);
app.use(staffPDF);
app.use(paymentPDF);


const PORT = process.env.PORT || 8000;          //  <-------port for run our server
const DB_URL = 'mongodb+srv://delight8m:m812345@delight8cluster.ociug.mongodb.net/DelightM8_DB?retryWrites=true&w=majority'  // <--------MONGODB url assign to variable calle DB_URL

mongoose.connect(DB_URL)   // <----------- database connection
.then(() =>{                // <----------- If database connection is succesfull
    console.log('DB Connected!')   
})
.catch((err) => console.log('DB Connection ERROR!',err));            // <----------- If database connection is failed


app.listen( PORT , () => {
    console.log(`App is running on ${PORT }`)
})// create app listener for run in which port our application is running