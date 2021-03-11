const homeController=require('../app/http/controllers/homeController')


function initRoutes(app) {

  app.get("/", homeController().index );


  

  app.get("/cart", (req, res) => {
    res.render("customers/cart");
  });

  app.get("/login", (req, res) => {
    res.render("auth/login");
  });

  app.get("/reg", (req, res) => {
    res.render("auth/register");
  });
}

module.exports = initRoutes;
