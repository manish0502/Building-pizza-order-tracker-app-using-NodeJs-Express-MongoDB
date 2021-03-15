const User = require("../../models/user");
const passport = require('passport')
const bcrypt = require("bcrypt");

function authController() {
  

  return {
    login(req, res) {
      res.render("auth/login");
    },
    postLogin(req, res, next) {
      const { email, password }   = req.body
     // Validate request 
      if(!email || !password) {
          req.flash('error', 'All fields are required')
          return res.redirect('/login')
      }
      passport.authenticate('local', (err, user, info) => {
          if(err) {
              req.flash('error', info.message )
              return next(err)
          }
          if(!user) {
              req.flash('error', info.message )
              return res.redirect('/login')
          }
          req.logIn(user, (err) => {
              if(err) {
                  req.flash('error', info.message ) 
                  return next(err)
              }

              return res.redirect('/')
          })
      })(req, res, next)
  },
    register(req, res) {
      res.render("auth/register");
    },
    async postRegister(req, res) {
      const { name, email, password } = req.body;

      /*** validate request ***/

      if (!name || !email || !password) {
        /* 
               if any error occurs but some fields are filled already 
               then we can flash back only correct data 

            */
        req.flash("error", "All fields are required");
        req.flash("name", name), req.flash("email", email);
        return res.redirect("/reg");
      }

      // check if email exists

      User.exists({ email: email }, (err, result) => {
        if (result) {
          req.flash("error", "Email already taken");
          req.flash("name", name), req.flash("email", email);
          return res.redirect("/reg");
        }
      });

      const hashPassword = await bcrypt.hash(password, 10); // hash password

      // Create a user

      const user = new User({
        // since both are same so we can write only name instead of name : name

        name,
        email,
        password: hashPassword,
      });

      user
        .save()
        .then(() => {
          //login
          return res.redirect("/");
        })
        .catch((err) => {
          req.flash("error", "Something went Wrong");
          return res.redirect("/reg");
        });

    },
    logout(req, res) {
      req.logout()
      return res.redirect('/login')  
    }
  };
}

module.exports = authController;
