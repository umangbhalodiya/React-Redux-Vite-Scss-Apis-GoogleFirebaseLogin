import { LogIn } from "react-feather";
import Header from "../../Components/Header";
import "./login.scss";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/ApiSlice/authSlice";
import { useNavigate } from "react-router";

function Login() {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validate = () => {
    let isValid = true;
    if (
      loginData?.firstName &&
      loginData?.lastName &&
      loginData?.email &&
      loginData?.password
    ) {
      isValid = true;
    } else if (!loginData?.firstName) {
      toast.error("Please Enter Your First Name");
      isValid = false;
    } else if (!loginData?.lastName) {
      toast.error("Please Enter Your Last Name");
      isValid = false;
    } else if (!loginData?.email) {
      toast.error("Please Enter Your Email");
      isValid = false;
    } else if (!loginData?.password) {
      toast.error("Please Enter Your Password");
      isValid = false;
    }
    return isValid;
  };
  const handleSubmit = () => {
    if (validate()) {
      dispatch(setUserData({ stateName: "user", data: loginData }));
      dispatch(setUserData({ stateName: "isLoggedIn", data: true }));
      toast.success("Login Success");
      navigate("/");
    }
  };

  const handleChange = (e) => {
    setLoginData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="login_section">
      <Header />
      <Toaster />
      <div className="input_section">
        <div className="login_inputs">
          <div className="title_login">Login</div>
          <div className="input_item">
            <div className="title_input">First Name</div>{" "}
            <input
              type="text"
              name="firstName"
              value={loginData?.firstName}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="input_item">
            <div className="title_input">Last Name</div>{" "}
            <input
              type="text"
              name="lastName"
              value={loginData?.lastName}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="input_item">
            <div className="title_input">Email</div>{" "}
            <input
              type="text"
              name="email"
              value={loginData?.email}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="input_item">
            <div className="title_input">Password</div>{" "}
            <input
              type="password"
              name="password"
              value={loginData?.password}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="input_item">
            <button
              onClick={() => {
                handleSubmit();
              }}
            >
              Login <LogIn size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
