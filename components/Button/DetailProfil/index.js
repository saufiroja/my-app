import React from "react";

const Foto = (props) => {
    return (
        <div className="foto-profil">
        <div className="mx-5 mb-4">
            <div style={{ width: "200px" }}>
            <img src="/assets/img/kelinci.jpg" alt="" className="mx-3 w-75" />
            </div>
        </div>
        <div className="data">
            <p className="data-diri">Data Profile</p>
            <p className="username">Username : {props.username}</p>
            <p className="username">Full Name : {props.name}</p>
            <p className="email">Bio : {props.bio}</p>
            <p className="email">Score : {props.score}</p>
        </div>
        {
            props.myProfile && (
            <button className="w-100" onClick={props.onClick} >
                Update
            </button>
            )
        }
        </div>
    );
};

export default Foto;