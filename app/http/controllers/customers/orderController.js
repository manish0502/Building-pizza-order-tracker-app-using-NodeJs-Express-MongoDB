const Order = require('../../../models/order');
const moment = require('moment')

function orderController(){

    return {


        store(req, res){

            // validate request

            const { phone , address } = req.body;

            if(!phone || !address) {
                req.flash('error', 'All fields are required')
                return res.redirect('/cart')
            }

            // Create Order

            const order = new Order({

                customerId: req.user._id,
                items: req.session.cart.items,
                phone,
                address
            })

            order.save().then(result => {

                req.flash('success','Order has been placed successfully');
                return res.redirect('/customer/orders')

            }).catch(err => {
                req.flash('error', 'Something went wrong')
                return res.redirect('/cart')
            })
        },
       async index(req, res) {
           const orders = await Order.find({ customerId: req.user._id  })
           res.render('customers/orders',{orders: orders , moment: moment})
            console.log(orders)
        }
    }
}


module.exports = orderController;