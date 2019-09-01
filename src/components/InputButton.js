import React from 'react';
import { MDBCol, MDBIcon, MDBBtn } from "mdbreact";

export default function InputButton(props) {
    const {theme,handleSubmit,handleKeyPress,handleSearch} = props;
    return (
        <MDBCol md="9" className="search-container">
            <div className="input-group md-form form-sm form-1 pl-0 input-container">
                <div className="input-group-prepend">
                    <span className={`input-group-text ${theme === 'light' ? 'black' : 'white'} lighten-3`} id="basic-text1">
                        <MDBIcon className={`text-${theme === 'light' ? 'white' : 'black'}`} icon="search" />
                    </span>
                </div>
                <input className="form-control my-0 py-1" id="search-box" type="text" placeholder="Search the FIFA Code..." aria-label="Search" onChange={handleSearch} onKeyPress={handleKeyPress} />
            </div>
            <MDBBtn color={theme === 'light' ? 'black' : 'white'} rounded size="sm" type="submit" className="mr-auto search-button" onClick={handleSubmit}>
                Search
                    </MDBBtn>
        </MDBCol>
    )
}