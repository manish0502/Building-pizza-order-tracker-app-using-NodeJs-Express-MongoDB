const Menu= require('../../models/menu')

function homeController() {

    return {
       async index(req, res){ 

            const pizzas= await Menu.find();
            console.log('fetched data from backend');
            return  res.render('home',{pizzas: pizzas})
            
        }
    }
}

module.exports = homeController;