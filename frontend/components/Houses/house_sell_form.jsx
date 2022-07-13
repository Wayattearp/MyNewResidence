import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { receiveHouse } from "../../actions/houses_actions";
import { createHouse } from "../../util/house_utils";
import MyDropzone from "./dropzone";
import GeocodingMap from "../Map/geocoding_map";
import { useSelector } from "react-redux";
import Footer from "../Footer/footer"


const HouseSellForm = (props) => {
  const [currState, setCurrState] = useState({});
  const [photoFile, setPhotoFile] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const [photoFiles, setPhotoFiles] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const errors = useSelector((state) => state.errors);
  const onInput = (e, type) => {
    setCurrState({ ...currState, [type]: e.currentTarget.value });
  };

  const handleFiles = (files) => {
    setPhotoFiles(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = handleInputVals();
    if (isValid) {
      setLoading(true);
      const formData = new FormData();
      formData.append("house[address]", currState.address);
      formData.append("house[city]", currState.city);
      formData.append("house[state]", currState.state);
      formData.append("house[zipcode]", currState.zipcode);
      formData.append("house[price]", currState.price);
      formData.append("house[baths]", currState.baths);
      formData.append("house[beds]", currState.beds);
      formData.append("house[sqft]", currState.sqft);
      formData.append("house[is_rent]", currState.isRent);
      formData.append("house[lat]", currState.lat);
      formData.append("house[lng]", currState.lng);
      formData.append("house[description]", currState.description);
      formData.append("house[yr_built]", currState.yrBuilt);
      if (photoFile) {
        formData.append("house[photo]", photoFile);
      }
      if (photoFiles) {
        for (let i = 0; i < photoFiles.length; i++) {
          formData.append("house[photos][]", photoFiles[i]);
        }
      }

      createHouse(formData)
        .then((house) => {
          setLoading(false);
          history.replace(`../houses/${house.id}`);
          dispatch(receiveHouse);
        })
        .fail(function () {
          window.alert("Oops! Something Went Wrong! Did you add photos?");
          setLoading(false);
        });
    }
  };

  const handleInputVals = () => {
    if (!isNaN(parseInt(currState.city))) {
      window.alert("City name should be String");
      return false;
    }
    if (!isNaN(parseInt(currState.state))) {
      window.alert("State name should be String");
      return false;
    }
    if (isNaN(parseInt(currState.zipcode)) || currState.zipcode.length != 5) {
      window.alert("Zipcode value should be 5 digits Integer");
      return false;
    }
    if (isNaN(parseInt(currState.price))) {
      window.alert("Price value should be Integer");
      return false;
    }
    if (isNaN(parseInt(currState.baths))) {
      window.alert("Bathrooms value should be Integer");
      return false;
    }
    if (isNaN(parseInt(currState.beds))) {
      window.alert("Bedrooms value should be Integer");
      return false;
    }
    if (isNaN(parseInt(currState.sqft))) {
      window.alert("Sqft value should be Integer");
      return false;
    }
    if (photoFiles.length == 0) {
      window.alert("Oops! Don't forget to add photos");
      return false;
    }

    return true;
  };

  return (
    <div>
      <div className="house-sell-form-container loading">
        
        <div className="house-sell-input-container">
          <form onSubmit={handleSubmit}>
            <div className="form-row ">
              <div>
              <label id="sell-form-input">
                <p>Address</p>
              </label>
              <input
                type="text"
                value={currState.address || ""}
                onChange={(e) => onInput(e, "address")}
                required
              />
              </div>
              <div>
                <label id="sell-form-input">
                  <p>City</p>
                </label>
                <input
                  id="city-input"
                  type="text"
                  value={currState.city || ""}
                  onChange={(e) => onInput(e, "city")}
                  required
                />
              </div>
            </div>

            <div className="form-row ">
                <div>
                  <label id="sell-form-input">
                    <p>State</p>
                  </label>
                  <input
                    id="state-input"
                    type="text"
                    value={currState.state || ""}
                    onChange={(e) => onInput(e, "state")}
                    required
                  />
                </div>
                
                <div>
                <label id="sell-form-input">
                  <p>Zipcode</p>
                </label>
                <input
                  type="text"
                  value={currState.zipcode || ""}
                  onChange={(e) => onInput(e, "zipcode")}
                  required
                />
                </div>
              </div>


            <div className="form-row ">
              <div>
                <label id="sell-form-input">
                  <p>Price</p>
                </label>
                <input
                  type="text"
                  value={currState.price || ""}
                  onChange={(e) => onInput(e, "price")}
                  required
                />
              </div>

              <div>
                <label id="sell-form-input">
                  <p>Bedrooms</p>
                </label>
                <input
                  type="text"
                  value={currState.beds || ""}
                  onChange={(e) => onInput(e, "beds")}
                  required
                />
              </div>
            </div>

            <div className="form-row ">
              <div>
                <label id="sell-form-input">
                  <p>Bathrooms</p>
                </label>
                <input
                  type="text"
                  value={currState.baths || ""}
                  onChange={(e) => onInput(e, "baths")}
                  required
                />
              </div>
              <div>
                <label id="sell-form-input">
                  <p>Sqft</p>
                </label>
                <input
                  type="text"
                  value={currState.sqft || ""}
                  onChange={(e) => onInput(e, "sqft")}
                  required
                />
              </div>
            </div>
            {/* NOTE: IsRent */}
            <div className="rent-sell-container">
              <div>
                <input
                  type="radio"
                  id="rent"
                  name="isRent"
                  value={true}
                  checked={currState.isRent === "true"}
                  onChange={(e) => onInput(e, "isRent")}
                />
                <label htmlFor="rent">
                  <p id="isRent-text">Rent</p>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="sell"
                  name="isRent"
                  value={false}
                  onChange={(e) => onInput(e, "isRent")}
                  checked={currState.isRent === "false"}
                />
                <label htmlFor="sell">
                  <p id="isRent-text">Sell</p>
                </label>
              </div>
            </div>
          
            {/* NOTE: Description */}
            <label id="sell-form-input">
              <p>Description</p>
            </label>
            <textarea
              value={currState.description || ""}
              onChange={(e) => onInput(e, "description")}
              required
            />
            {/* NOTE: submit button */}
            <button type="submit" id="post-house-btn">
              Post
            </button>
          </form>
        </div>
        {/* NOTE : Dropzone */}
        <div className="dropzone-container">
          {/* NOTE: MAP */}
          <div className="geo-coding-container">
            <h1>
              Click on the map to set coordinates{" "}
              <img
                src="https://maps.google.com/mapfiles/ms/icons/red-dot.png"
                id="pin"
              />
            </h1>
            <GeocodingMap setCurrState={setCurrState} currState={currState} />
          </div>

          {/* NOTE: LAT LNG */}
          <div className="lat-lng-container">
            <div>
              <label>
                <p className="lat-lng-text">Latitude</p>
              </label>
              <input 
                id="lat"
                type="text"
                value={currState.lat || ""}
                onChange={(e) => onInput(e, "lat")}
                required
              />
            </div>
            <div>
              <label>
                <p className="lat-lng-text">Longitude </p>
              </label>
              <input
                id="long"
                type="text"
                value={currState.lng || ""}
                onChange={(e) => onInput(e, "lng")}
                required
              />
            </div>
          </div>
          <MyDropzone handleFiles={handleFiles} />
        </div>
      </div>
     <Footer/>
    </div>
  );
};

export default HouseSellForm;
