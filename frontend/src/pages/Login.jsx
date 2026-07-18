import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login(){

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);


  function login(){

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;


    if(!emailPattern.test(email)){

      alert("Please enter a valid email ID");

      return;

    }


    if(!passwordPattern.test(password)){

      alert(
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      );

      return;

    }


    navigate("/dashboard");

  }



  return(

    <div className="login-page">


      <div className="login-box">


        <h1>
          🤖 Smart Machine AI
        </h1>


        <p>
          Predictive Maintenance System
        </p>



        <input

          type="email"

          placeholder="Email ID"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

        />



        <div className="password-container">


          <input

            type={showPassword ? "text" : "password"}

            placeholder="Password"

            value={password}

            onChange={(e)=>setPassword(e.target.value)}

          />


          <button

            type="button"

            className="show-btn"

            onClick={()=>setShowPassword(!showPassword)}

          >

            {showPassword ? "🙈" : "👁️"}

          </button>


        </div>




        <button onClick={login}>

          Login

        </button>



      </div>


    </div>

  );

}


export default Login;