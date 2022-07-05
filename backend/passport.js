const passport = require("passport");
const KakaoStrategy = require('passport-kakao').Strategy;
const path = require("path");
require("dotenv").config(path.join(__dirname, ".env"));

const KAKAO_ID = process.env.KAKAO_ID;
const KAKAO_SECRET = process.env.KAKAO_SECRET;

passport.use(new KakaoStrategy(
    // 패스포트 인증 정보
    {
    clientID : KAKAO_ID,
    clientSecret: KAKAO_SECRET, // clientSecret을 사용하지 않는다면 넘기지 말거나 빈 스트링을 넘길 것
    callbackURL : 'http://localhost:3000/auth/kakao/callback'
  },

  // 위의 정보를 갖고 여기서 인증 단계
  (accessToken, refreshToken, profile, done) => {
    // 사용자의 정보는 profile에 들어있다.
  //   User.findOrCreate({ kakaoId: profile.id }, (err, user) => {
  //     if (err) { return done(err) }
  //     return done(null, user)
  // })
  done(null, profile)
  }
))

// passport.authenticate()


passport.serializeUser((user, done) =>{
  done(null, user)
});

passport.deserializeUser((user, done) => {
  done(null, user)
});

// 패스포트 실행 순서
// 패스포트 초기화 후 express에 미들웨어로 입력
// 전략 클래스로 로그인 확인
// 패스포트 authenticate : 로그인 성공, 실패 redirect 지정
// 인증 성공 시 serializeUser로 넘어가서 한 번 실행됨, 이때 db나 그 외 매체에 정보 저장 
// serializeUser가 실행된 후, 해당 사이트에서 다른 페이지를 들어갈 때 사용자의 식별자를 deserializeUser를 실행하면서 확인
// desrialize 콜백 함수의 두 번째 인자는, request.user의 인자로 넘어가서 index 라우터에서 사용 가능하게 만들어줌
