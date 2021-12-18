import React from "react";
import AvailableBikes from "../Bikes_Available";
import CreateRent from "../CreateRent";
import RentedBikes from "../RentedBikes";
import styles from "./App.module.scss";
import { ToastContainer } from "react-toastify";

export const App = () => {
  return (
    <>
      <ToastContainer />
      <div className={styles.App}>
        <div className="container">
          <h1>Bike Rental CRUD Application</h1>
          <CreateRent />
          <RentedBikes />
          <AvailableBikes />
        </div>
      </div>
    </>
  );
};
