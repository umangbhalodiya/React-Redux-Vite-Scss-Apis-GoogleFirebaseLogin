import { useState } from "react";
import { useDispatch } from "react-redux";
import "./home.scss";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { LogIn } from "react-feather";
import { setUserData } from "../../store/ApiSlice/authSlice";

const Home = () => {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // validate function to check if all fields are filled
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

  // handle submit function to dispatch the data to redux store
  const handleSubmit = () => {
    // validate the form
    if (validate()) {
      dispatch(setUserData({ stateName: "user", data: loginData }));
      dispatch(setUserData({ stateName: "isLoggedIn", data: true }));
      toast.success("Login Successful", {
        position: "top-right",
      });
      // redirect to products page after successful login
      navigate("/products");
    }
  };

  //common input change function to set the input values to state
  const handleChange = (e) => {
    setLoginData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="login_section">
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
};

export default Home;
