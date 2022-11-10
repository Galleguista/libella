import React from "react";
import { fullname, username } from "react-lorem-ipsum";
export const ContactanosPage = () => {
  return (
    <>
      <div className="card">
        <div className="flex justify-content-center flex-wrap card-container yellow-container p-3">
          <div className="flex col-12 align-items-center justify-content-center  m-2">
            <h1>Contactanos en los siguientes medios</h1>
          </div>
        </div>
      </div>
      <div className="grid justify-content-center flex-wrap card-container">
        <div className="col-5 m-1">
          <h2>Contactanos en los siguientes medios</h2>
          <hr />
          <div className="user">
            <div className="fullname">{fullname("male")}</div>
            <div className="username">{`@${username()}`}</div>
          </div>
        </div>
        <div className="col-5 m-1">
          <h2>Contactanos en los siguientes medios</h2>
          <hr />
          <div className="user">
            <div className="fullname">{fullname("male")}</div>
            <div className="username">{`@${username()}`}</div>
          </div>
        </div>
      </div>
      <div className="grid  justify-content-center flex-wrap card-container">
        <div className="col-5 m-1">
          <h2>Contactanos en los siguientes medios</h2>
          <hr />
          <div className="user">
            <div className="fullname">{fullname("male")}</div>
            <div className="username">{`@${username()}`}</div>
          </div>
        </div>
        <div className="col-5 m-1">
          <h2>Contactanos en los siguientes medios</h2>
          <hr />
          <div className="user">
            <div className="fullname">{fullname("male")}</div>
            <div className="username">{`@${username()}`}</div>
          </div>
        </div>
      </div>
      <div className="grid justify-content-center flex-wrap card-container">
        <div className="col-5 m-1">
          <h2>Contactanos en los siguientes medios</h2>
          <hr />
          <div className="user">
            <div className="fullname">{fullname("male")}</div>
            <div className="username">{`@${username()}`}</div>
          </div>
        </div>
        <div className="col-5 m-1">
          <h2>Contactanos en los siguientes medios</h2>
          <hr />
          <div className="user">
            <div className="fullname">{fullname("male")}</div>
            <div className="username">{`@${username()}`}</div>
          </div>
        </div>
      </div>
      <div className="grid justify-content-center flex-wrap card-container ">
        <div className="col-5 m-1">
          <h2>Contactanos en los siguientes medios</h2>
          <hr />
          <div className="user">
            <div className="fullname">{fullname("male")}</div>
            <div className="username">{`@${username()}`}</div>
          </div>
        </div>
        <div className="col-5 m-1">
          <h2>Contactanos en los siguientes medios</h2>
          <hr />
          <div className="user">
            <div className="fullname">{fullname("male")}</div>
            <div className="username">{`@${username()}`}</div>
          </div>
        </div>
      </div>
    </>
  );
};
