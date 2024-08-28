import '../styles/filter.css';

import React, { useState } from 'react';

const Filter = () => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="filter-container">
            <div className="filter-header">
                <span>{isVisible ? `${3425} Items` : ''}</span>
                <button onClick={toggleVisibility} className="filter-toggle">
                    {isVisible ? 'Hide Filter' : 'Show Filter'}
                </button>
            </div>

            {isVisible && (
                <div className="filter-options">
                    <div className="filter-section">
                        <input type="checkbox" id="customizable" name="customizable" />
                        <label htmlFor="customizable">Customizable</label>
                    </div>

                    <div className="filter-section">
                        <label>Ideal For</label>
                        <ul>
                            <li><input type="checkbox" id="men" name="ideal-for" /> <label htmlFor="men">Men</label></li>
                            <li><input type="checkbox" id="women" name="ideal-for" /> <label htmlFor="women">Women</label></li>
                            <li><input type="checkbox" id="kids" name="ideal-for" /> <label htmlFor="kids">Baby & Kids</label></li>
                        </ul>
                    </div>

                    {/* Add more filter sections as per your design */}
                    <div className="filter-section">
                        <label>Occasion</label>
                        <select>
                            <option>All</option>
                            <option>Casual</option>
                            <option>Formal</option>
                        </select>
                    </div>

                    {/* Additional sections */}
                    <div className="filter-section">
                        <label>Work</label>
                        <select>
                            <option>All</option>
                            <option>Office</option>
                            <option>Outdoor</option>
                        </select>
                    </div>

                    <div className="filter-section">
                        <label>Fabric</label>
                        <select>
                            <option>All</option>
                            <option>Cotton</option>
                            <option>Silk</option>
                        </select>
                    </div>

                    <div className="filter-section">
                        <label>Pattern</label>
                        <select>
                            <option>All</option>
                            <option>Striped</option>
                            <option>Printed</option>
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Filter;
