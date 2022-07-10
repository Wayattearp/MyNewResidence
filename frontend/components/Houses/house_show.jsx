import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { fetchHouse } from "../../util/house_utils";
import MiniMap from "../Map/mini_map";

const HouseShow = (props) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [house, setHouse] = useState({});
    const houseId = props.houseId;

    const currentUser = useSelector((state) => state.session.currentUser);

    useEffect(() => {
        fetchHouse(houseId).then((house) => setHouse(house));
    }, [currentUser]);

    const address = `${house.address}, ${house.city}, ${house.state} ${house.zipcode}`;


    return !jQuery.isEmptyObject(house) ? (
        <div className="modal-background-property" onClick={() => history.goBack()}>
            <div
                className="modal-child-property"
                onClick={(e) => e.stopPropagation()}>
                <div className="property-modal-container">
                    <div className="property-photos-container">
                        <div className="modal-main-photo">
                            <img src={house.photoUrls} alt="" />
                        </div>
                        {house.photoUrls.slice(1).map((photo, i) => (
                            <div className="modal-photos" key={`photo-${i + 1}`}>
                                <img src={photo} className="photo" id={`photo${i + 1}`} />
                            </div>
                        ))}
                    </div>


                    <div className="property-info-container">
                        <div className="property-info-header">
                            <img className="" src={window.logoURL} />
                        </div>

                        <div className="property-info">
                            <div className="property-pbbs">
                                <div id="amount">
                                    {house.is_rent ? (
                                        <p>$ {house.price} /mo</p>
                                    ) : (
                                        <p>$ {house.price.toLocaleString()}</p>
                                    )}
                                </div>
                                <div className="modal-property-detail">
                                    <p> {house.beds} bd </p>
                                    <p> {house.baths} ba </p>
                                    <p> {house.sqft} sqft </p>
                                </div>
                            </div>
                            <div>{address}</div>
                        </div>
                        <div className="property-info-minimap">
                            <MiniMap house={house} />
                        </div>
                        <div className="property-overview">
                            <h1>OverView</h1>
                            <h2>{house.description}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}


export default HouseShow