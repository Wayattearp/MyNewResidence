import React from "react";
import Modal from "../Modal/modal";
import { useDispatch } from "react-redux";
import { openModal } from "../../actions/modal_actions";

const SignInNav = ({currentUser, logout}) => {
    let dispatch = useDispatch();
    return (
        <div>
            <Modal />
            <div>
                {currentUser ?
                    <div> Hi, {currentUser.username}!
                    <br />
                        <button
                            className="header-button" onClick={logout}>
                            Log Out
                        </button>
                    </div>
                    :
                    <button
                        onClick={() => dispatch(openModal("login"))}>
                        Sign In
                    </button>
                }
            </div>


        </div>
    )


};

export default SignInNav;