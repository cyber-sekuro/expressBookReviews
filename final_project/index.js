const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session')
const customer_routes = require('./router/auth_users.js').authenticated;
const genl_routes = require('./router/general.js').general;

const app = express();

app.use(express.json());

app.use("/customer",session({secret:"fingerprint_customer",resave: true, saveUninitialized: true}))

app.use("/customer/auth/*", function auth(req, res, next) {
  // Retrieve JWT from the current session
  const token = req.session.authorization?.accessToken;

  if (!token) {
    return res.status(401).json({
      message: "Authentication required"
    });
  }

  // Verify JWT signature and expiration
  jwt.verify(token, "access", (err, decoded) => {
    if (err) {
      return res.status(403).json({
        message: "Invalid or expired token"
      });
    }

    // Make the authenticated user available to protected routes
    req.user = decoded;
    next();
  });
});
 
const PORT =5000;

app.use("/customer", customer_routes);
app.use("/", genl_routes);

app.listen(PORT,()=>console.log("Server is running"));
