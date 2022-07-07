import facebook from '../assets/Oauth/facebook.png';
import github from '../assets/Oauth/github.png';
import google from '../assets/Oauth/google.png';
import kakao from '../assets/Oauth/kakao.png';


export const oauth_list = [
    {
        id:1,
        title:"google",
        icon:google,
        function: function(){
            window.open("http://localhost:5000/auth/google", "_self");
        }
    },
    {
        id:2,
        title:"github",
        icon:github,
        function: function(){
            window.open("http://localhost:5000/auth/github", "_self");
        }
    },
    {
        id:3,
        title:"facebook",
        icon:facebook,
        function: function(){
            window.open("http://localhost:5000/auth/facebook", "_self");
        }
    },
    {
        id:4,
        title:"kakao",
        icon:kakao,
        function: function(){
            window.open("http://localhost:5000/auth/kakao", "_self");
        }
    }
]