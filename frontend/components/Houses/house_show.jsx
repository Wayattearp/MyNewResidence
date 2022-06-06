import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { openModal } from "../../actions/modal_actions";
import { fetchHouse } from "../../util/house_utils";

const HouseShow = (props) => {



    const house = props.house;
    const houseId = props.houseId;
    return (
        <div>
            <h1>House Show</h1>
            {/* <img src={house.photoUrl} /> */}
        </div>
    )
}


export default HouseShow