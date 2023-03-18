import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { openModal } from "../../actions/modal_actions";

const HouseSell = (props) => {
  const currentUser = useSelector((state) => state.session.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="sell-page">
      {/* <img src={window.sellBg1} className="sell-background" /> */}
      <div className="main-sell">
        <div className="sell-slogan">
          <h1>Sell your residence with confidence</h1>
          <h2>MyNewResidence is making it simpler to sell your house and move forward!</h2>
          
          {currentUser ? (
            <button
              className="add-house logged-in"
              onClick={() => history.push("/sell/form")}>
              Upload your house🏡
            </button>
          ) : (
            <button
              className="add-house"
              onClick={() => dispatch(openModal("login"))}>
              Login to sell your house🏡
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HouseSell;
