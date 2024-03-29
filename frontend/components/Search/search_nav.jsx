import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { updateFilter, removeAllFilters } from "../../actions/filter_actions";

const SearchNav = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    let rent;
    let buy;
    if (
        location.pathname.includes("rent") || 
          location.pathname.includes("houses")
    ) {
        rent = true;
    }
    if (location.pathname.includes("buy")) {
        buy = true;
    }
    const [query, setQuery] = useState("");
    const [pricetxt, setPriceTxt] = useState("Price");
    const [bdText, setBdText] = useState("Bedrooms");
    const [baText, setBaText] = useState("Bathrooms");
    const useToggle = (initialState = false) => {
        const [state, setState] = useState(initialState);
        const toggle = useCallback(() => setState((state) => !state), []);
        return [state, toggle];
    };

    const [isPriceOpen, setIsPriceOpen] = useToggle();
    const [isBedsOpen, setIsBedsOpen] = useToggle();
    const [isBathsOpen, setIsBathsOpen] = useToggle();
    const handleQuery = (e) => {
        setQuery(e.currentTarget.value);
    };

    const handleQuerySubmit = (e) => {
        e.preventDefault();
        dispatch(updateFilter("query", query));
    };

    const handleDropDownSelection = (field) => {
        return (e) => {
            e.stopPropagation();
            e.preventDefault();
            if (field == "min_price" || field == "max_price") {
                setPriceTxt(e.currentTarget.value);
            };
            dispatch(updateFilter([field], e.currentTarget.value));
        };
    };

    const clearFilters = () => {
        dispatch(removeAllFilters());
    };
    
    const handleClearFilter = () => {
        clearFilters();
        setPriceTxt("Price");
        setBaText("Bathrooms");
        setBdText("Bedrooms");
    };


    return (
        <div className="search-nav-area">
            <form onSubmit={handleQuerySubmit} className="search-form">
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="State, neighborhood, or ZIP"
                        value={query}
                        onChange={handleQuery}
                    />
                    <button type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </form>

            <div className="filter-drop-down-wrapper">
                <button onFocus={setIsPriceOpen} onBlur={setIsPriceOpen}>
                    {pricetxt}
                </button>
                <div className={isPriceOpen ? "show price" : "hidden"}>
                    <div className="price-options">
                        <h3> Min</h3>
                        <button
                            value={rent ? "$0+" : "$100000+"}
                            onMouseDown={handleDropDownSelection("min_price")}>
                            {rent ? "$0+" : "$100,000+"}
                        </button>
                        <button
                            value={rent ? "$500+" : "$500000+"}
                            onMouseDown={handleDropDownSelection("min_price")}>
                            {rent ? "$500+" : "$500,000+"}
                        </button>
                        <button
                            value={rent ? "$1000+" : "$1000000+"}
                            onMouseDown={handleDropDownSelection("min_price")}>
                            {rent ? "$1,000+" : "$1,000,000+"}
                        </button>
                        <button
                            value={rent ? "$1500+" : "$1500000+"}
                            onMouseDown={handleDropDownSelection("min_price")}>
                            {rent ? "$1,500+" : "$1,500,000+"}
                        </button>
                        <button
                            value={rent ? "$2000+" : "$2000000+"}
                            onMouseDown={handleDropDownSelection("min_price")}>
                            {rent ? "$2,000+" : "$2,000,000+"}
                        </button>
                        <button
                            value={rent ? "$3000+" : "$3000000+"}
                            onMouseDown={handleDropDownSelection("min_price")}>
                            {rent ? "$3,000+" : "$3,000000+"}
                        </button>
                    </div>
                    <h3> - </h3>
                    <div className="price-options">
                        <h3> Max </h3>
                        <button
                            value={rent ? "~$1000+" : "~$1000000"}
                            onMouseDown={handleDropDownSelection("max_price")}>
                            {rent ? "~$1,000+" : "~$1,000,000"}
                        </button>
                        <button
                            value={rent ? "~$2000+" : "~$2000000"}
                            onMouseDown={handleDropDownSelection("max_price")}>
                            {rent ? "~$2,000+" : "~$2,000,000"}
                        </button>
                        <button
                            value={rent ? "~$3000+" : "~$3000000"}
                            onMouseDown={handleDropDownSelection("max_price")}>
                            {rent ? "~$3,000+" : "~$3,0000,000"}
                        </button>
                        <button
                            value={rent ? "~$4000+" : "~$4000000"}
                            onMouseDown={handleDropDownSelection("max_price")}>
                            {rent ? "~$4000+" : "~$4,000,000"}
                        </button>
                        <button
                            value={rent ? "~$5000+" : "~$5000000"}
                            onMouseDown={handleDropDownSelection("max_price")}>
                            {rent ? "~$5,000+" : "~$5,000,000"}
                        </button>
                        <button
                            value={rent ? "~$6000+" : "~$6000000"}
                            onMouseDown={handleDropDownSelection("max_price")}>
                            {rent ? "~$6000+" : "~$6,000,000"}
                        </button>
                    </div>
                </div>

                <div className="filter-drop-down-wrapper">
                    <button onFocus={setIsBedsOpen} onBlur={setIsBedsOpen}>
                        {bdText}
                    </button>
                    <div
                        id="filter-drop-down-bb"
                        className={isBedsOpen ? "show" : "hidden"}>
                        <div className="bed-and-bath">
                            <button
                                value="1+ bd"
                                onMouseDown={handleDropDownSelection("min_beds")}>
                                1+
                            </button>
                            <button
                                value="2+ bd"
                                onMouseDown={handleDropDownSelection("min_beds")}>
                                2+
                            </button>
                            <button
                                value="3+ bd"
                                onMouseDown={handleDropDownSelection("min_beds")}>
                                3+
                            </button>
                            <button
                                value="4+ bd"
                                onMouseDown={handleDropDownSelection("min_beds")}>
                                4+
                            </button>
                        </div>
                    </div>
                </div>

                <div className="filter-drop-down-wrapper">
                    <button onFocus={setIsBathsOpen} onBlur={setIsBathsOpen}>
                        {baText}
                    </button>
                    <div
                        id="filter-drop-down-bb"
                        className={isBathsOpen ? "show" : "hidden"}>
                        <div className="bed-and-bath">
                            <button
                                value="1+ ba"
                                onMouseDown={handleDropDownSelection("min_baths")}>
                                1+
                            </button>
                            <button
                                value="2+ ba"
                                onMouseDown={handleDropDownSelection("min_baths")}>
                                2+
                            </button>
                            <button
                                value="3+ ba"
                                onMouseDown={handleDropDownSelection("min_baths")}>
                                3+
                            </button>
                            <button
                                value="4+ ba"
                                onMouseDown={handleDropDownSelection("min_baths")}>
                                4+
                            </button>

                        </div>
                    </div>
                    <div className="filter-drop-down-wrapper">
                        <button onClick={handleClearFilter}> Clear</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchNav;