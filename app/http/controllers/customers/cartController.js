function cartController() {
  return {
    index(req, res) {
      res.render("customers/cart");
    },
    update(req, res) {

      /* @Check for cart if it is there or not , if not then 
       create a empty-cart also need to check data inside the session
       ****/

      if (!req.session.cart) {

        // if we are requesting for the first time it will be empty one which means basic structure

        req.session.cart = {
          items: {},
          totalQty: 0,
          totalPrice: 0,
        };
      }

      // if we are requesting for second time the cart will be there so we recieve that

      let cart = req.session.cart;

      // check item is available or not , if its there just increase the quantity

      if (!cart.items[req.body._id]) {
        cart.items[req.body._id] = {
          items: req.body,
          qty: 1,
        };
        cart.totalQty = cart.totalQty + 1;
        cart.totalPrice = cart.totalPrice + req.body.price;
      } else {
        cart.items[req.body._id].qty = cart.items[req.body._id].qty + 1;
        cart.totalQty = cart.totalQty + 1;
        cart.totalPrice = cart.totalPrice + req.body.price;
      }

      res.json({ totalQty: req.session.cart.totalQty });
    },
  };
}

module.exports = cartController;
