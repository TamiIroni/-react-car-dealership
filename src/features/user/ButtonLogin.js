
import { useNavigate } from "react-router-dom";

function ButtonLogin({textButton, user, loginFunc}) {
    const Navigate = useNavigate(); 
    const handleLogin = async () => {
        try {
            const data = await loginFunc(user);
            console.log(loginFunc)
      
            if (typeof data === 'object' && data !== null) {
                console.log('good')
                localStorage.setItem('username', data.userName)
              Navigate("/cars");
            } 
            else {
              alert("Invalid login credentials"); 
            }
          } catch (error) {
            alert("your email or password is incorect"); 
          }
        }

    return (
        <button onClick={handleLogin}>{textButton}</button>
    )
    
}

export default ButtonLogin;