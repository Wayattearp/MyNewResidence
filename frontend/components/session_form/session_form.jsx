import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, signup, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const SessionForm = (props) => {
  const errors = useSelector((state) => state.errors);
  const [user, setUser] = useState({ username: "", password: "" });
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const formType = useSelector((state) => state.ui.modal);
  const currentUser = useSelector((state) => state.session.currentUser);

  if (currentUser) {
    dispatch(closeModal());
  }
  const UsernameErr = () => {
    for (let i = 0; i < errors.length; i++) {
      if (errors[i].includes("blank")) {
        return "Username can't be empty";
      } else if (errors[i].includes("Invalid login credentials")) {
        return "Invalid Username";
      } else if (errors[i].includes("already")) {
        return "Username has already been taken";
      }
    }
  };

  const pwErr = () => {
    for (let i = 0; i < errors.length; i++) {
      if (errors[i].includes("short")) {
        return "Password must be at least 6 characters";
      } else if (errors[i].includes("Invalid password")) {
        return "Invalid Password";
      } else if (errors[i].includes("Invalid login credentials")) {
        return "Invalid Password";
      }
    }
  };

  const handleUsername = () => {
    usernameRef.current.focus();
    setUser({
      username: usernameRef.current.value,
      password: user.password,
    });
  };

  const handlePassword = () => {
    passwordRef.current.focus();
    setUser({
      username: user.username,
      password: passwordRef.current.value,
    });
  };

  useEffect(() => () => dispatch(clearErrors()), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "login") {
      dispatch(login(user)).then(function () {
        if (errors.length > 0) {
          errors << "something wrong!";
        } else {
          dispatch(closeModal());
        }
      });
      dispatch(clearErrors());
    } else if (formType === "signup") {
      dispatch(signup(user)).then(function () {
        if (errors.length > 0) {
          errors << "something wrong!";
        } else {
          dispatch(closeModal());
        }
      });

      dispatch(clearErrors());
    }
  };

  const handleDemoUser = (e) => {
    e.preventDefault();
    const demoUser = { username: "DemoUser", password: "password148" };
    dispatch(login(demoUser)).then(dispatch(closeModal()));
  };

  const onClick = () => {
    dispatch(clearErrors());
    if (formType === "login") {
      dispatch(openModal("signup"));
      setUser({ username: "", password: "" });
    } else {
      dispatch(openModal("login"));
      setUser({ username: "", password: "" });
    }
  };

  const onClose = () => {
    dispatch(clearErrors());
    dispatch(closeModal());
  };

  return (
    <div className="session-form-container">
      <header>
        <h2>Welcome Home🏡 </h2>
        <div onClick={onClose} className="close-x">
          X
        </div>
      </header>

      <div>
        {formType == "login" ? (
          <div className="session-form-option">
            <div className="current-from">{formType}</div>
            <div>
              <a onClick={onClick}>New Account</a>
            </div>
          </div>
        ) : (
          <div className="session-form-option">
            <div>
              <a onClick={onClick}>Log in</a>
            </div>
            <div className="current-from"> New Account</div>
          </div>
        )}
      </div>

      <form className="session-form" onSubmit={handleSubmit}>
        <div className="input-section">
          <label id="session"> Username</label>
          <input
            id="session-input-username"
            value={user.username}
            placeholder="Enter Username"
            onChange={handleUsername}
            ref={usernameRef}
            autoComplete="off"
          />
          <p>{UsernameErr()}</p>
        </div>

        <div className="input-section">
          <label id="session"> Password </label>
          <input
            type="password"
            id="session-input-pw"
            value={user.password}
            placeholder="Enter Password"
            onChange={handlePassword}
            ref={passwordRef}
            autoComplete="off"
          />
          <p>{pwErr()}</p>
        </div>

        <div className="session-btn">
          <button>{formType == "login" ? "Submit" : "Sign Up"}</button>
          <p> Or connect with:</p>
          <button onClick={handleDemoUser} id="demo-btn">
            Sign in with Demo User
          </button>
        </div>
      </form>
    </div>
  );
};

export default SessionForm;
