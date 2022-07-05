const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;

passport.use(new KakaoStrategy(
    {
        clientID: clientID,
        clientSecret: clientSecret,
        callbackURL: 'http://localhost:3000/auth/kakao/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        User.findOrCreate({ facebookId: profile.id }, (err, user) => {
            if (err) { return done(err) }
            return done(null, user)
        })
    }
));

passport.authenticate()


passport.serializeUser();

passport.deserializeUser();

// 패스포트 실행 순서
// 패스포트 초기화 후 express에 미들웨어로 입력
// 전략 클래스로 로그인 확인
// 패스포트 authenticate : 로그인 성공, 실패 redirect 지정
// 인증 성공 시 serializeUser로 넘어가서 한 번 실행됨, 이때 db나 그 외 매체에 정보 저장 
// serializeUser가 실행된 후, 해당 사이트에서 다른 페이지를 들어갈 때 사용자의 식별자를 deserializeUser를 실행하면서 확인
// desrialize 콜백 함수의 두 번째 인자는, request.user의 인자로 넘어가서 index 라우터에서 사용 가능하게 만들어줌
