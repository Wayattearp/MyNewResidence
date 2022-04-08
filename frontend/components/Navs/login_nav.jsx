import React from "react";
import Modal from "../Modal/modal";
import { useDispatch } from "react-redux";
import { openModal } from "../../actions/modal_actions";

const LoginNav = () => { 
    let dispatch = useDispatch();
    return (
        <div>
            <Modal/>
            <button
            onClick={() => dispatch(openModal("login"))}>
                Login
            </button>
            
        </div>
    )
};

export default LoginNav;