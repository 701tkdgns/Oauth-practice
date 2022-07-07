const GitHubStrategy = require("passport-github2").Strategy;
const KakaoStrategy = require("passport-kakao").Strategy;
const passport = require("passport");
const path = require("path");
require("dotenv").config(path.join(__dirname, ".env"));

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID;
const KAKAO_CLIENT_SECRET = process.env.KAKAO_CLIENT_SECRET;

passport.use(
    new GitHubStrategy(
        {
            clientID: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
            callbackURL: "/auth/github/callback"
        },
        function (accessToken, refreshToken, profile, done) {
            // User.findOrCreate({ githubId: profile.id }, function (err, user) {
            //   return done(err, user);
            // });
            done(null, profile);
        }
    )
);

passport.use(new KakaoStrategy({
    clientID : KAKAO_CLIENT_ID,
    clientSecret: KAKAO_CLIENT_SECRET, // clientSecret을 사용하지 않는다면 넘기지 말거나 빈 스트링을 넘길 것
    callbackURL : "/auth/kakao/callback"
  },
  (accessToken, refreshToken, profile, done) => {
        done(null, profile);
    }
));


passport.serializeUser((user, done) => {
    done(null, user);
});


passport.deserializeUser((user, done) => {
    done(null, user);
});