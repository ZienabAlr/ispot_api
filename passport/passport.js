const passport = require('passport');
const User = require('../models/user');
// Door de volgende lijnen code zeggen we hoe de gebruiker al dan niet mag inloggen en hoe gebruiker mag registreren 
passport.use(User.createStrategy());

// de volgende lijnen code zorgen ervoor dat de user in de sessie wordt opgeslagen
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
