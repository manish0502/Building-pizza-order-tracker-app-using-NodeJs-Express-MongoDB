const homeController=require('../app/http/controllers/homeController')
const authController = require('../app/http/controllers/authController');
const cartController = require('../app/http/controllers/customers/cartController');
const orderController = require('../app/http/controllers/customers/orderController');
 const AdminOrderController= require('../app/http/controllers/admin/orderController');

//middleware
const guest = require('../app/http/middlewares/guest')
const auth = require('../app/http/middlewares/auth')


function initRoutes(app) {

  app.get("/", homeController().index );

  app.get("/login",guest, authController().login);
  app.post("/login", authController().postLogin);
  


  app.get("/reg", guest, authController().register);

  app.post("/reg", authController().postRegister);
  app.post('/logout', authController().logout)

  app.get("/cart",cartController().index);

  app.post("/update-cart",cartController().update);

  // customer routes

  app.post("/orders",auth, orderController().store);
  app.get("/customer/orders",auth,orderController().index);

  // admin 
  app.get("/admin/orders",auth,AdminOrderController().index);


}

module.exports = initRoutes;
