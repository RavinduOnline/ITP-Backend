const router = require('express').Router();
let Payment = require('../models/Payment');

router.route('/payment/get/').get((req, res) => {

    Payment.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/payment/add').post((req, res) => {
    const Cardname = req.body.Cardname;
    const Month = req.body.Month;
    const Year = req.body.Year;
    const Cvv = req.body.Cvv;
    const Cardnumber = req.body.Cardnumber;
    const Type = req.body.Type;

    const newPayment = new Payment({ Cardname, Month, Year, Cvv, Cardnumber, Type, });

    newPayment.save()
        .then(() => res.json('Payment added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/payment/get/:id').get((req, res) => {
    Payment.findById(req.params.id)
        .then(Payment => res.json(Payment))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Payment.findById(req.params.id)
        .then(Payment => {
            Payment.Cardname = req.body.Cardname;
            Payment.Month = req.body.Month;
            Payment.Year = req.body.Year;
            Payment.Cvv = req.body.Cvv;
            Payment.Cardnumber = req.body.Cardnumber;
            Payment.Type = req.body.Type;


            Payment.save()
                .then(() => res.json('Payment updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/payment/delete/:id').delete((req, res) => {
    Payment.findByIdAndDelete(req.params.id)
        .then(() => res.json('Payment deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;