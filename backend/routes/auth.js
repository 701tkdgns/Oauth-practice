const router = require("express").Router();
const passport = require("passport");
const CLIENT_URL = "http://localhost:3000/";

router.get("/login/success", (request, response) => {
    if(request.user) {
        response.status(200).json({
            success:true,
            message:"successfull",
            user:request.user,
        });
    }
});

router.get("/login/failed", (request, response) => {
    response.status(401).json({
        success:false,
        message:"failure",
    });
});


router.get("/logout", (request, response) => {
    request.logout();
    response.redirect(CLIENT_URL);
});

router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/kakao", passport.authenticate("kakao", { scope: ["profile"] }));

router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router



// const router = require("express").Router();
// const passport = require("passport");

// const CLIENT_URL = "http://localhost:3000/";

// router.get("/login/success", (req, res) => {
//   if (req.user) {
//     res.status(200).json({
//       success: true,
//       message: "successfull",
//       user: req.user,
//       //   cookies: req.cookies
//     });
//   }
// });

// router.get("/login/failed", (req, res) => {
//   res.status(401).json({
//     success: false,
//     message: "failure",
//   });
// });

// router.get("/logout", (req, res) => {
//   req.logout();
//   res.redirect(CLIENT_URL);
// });


// router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

// router.get(
//   "/github/callback",
//   passport.authenticate("github", {
//     successRedirect: CLIENT_URL,
//     failureRedirect: "/login/failed",
//   })
// );


// module.exports = router;