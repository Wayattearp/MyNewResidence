import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, signup, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";

const SessionForm = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const formType = useSelector((state) => state.ui.modal);
  const currentUser = useSelector((state) => state.session.currentUser);

  if (currentUser) {
    dispatch(closeModal());
  }

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
          dispatch(closeModal());
      });
      dispatch(clearErrors());
    } else if (formType === "signup") {
      dispatch(signup(user)).then(function () {
          dispatch(closeModal());
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
          <p>{props.errors}</p>
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

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session
  };
};

export default connect(mapStateToProps)(SessionForm);
