import { useState, useEffect } from "react";
import styles from "./ArtistLogInForm.module.css";

const ArtistLogInForm = () => {

    return (
        <div className={styles.form}>
        <label>Name: <input type="text" placeholder="Name"></input></label>
        <label>Password: <input type="text" placeholder="Username"></input></label>
        <button>Log In</button>
    </div>
    )
}

export default ArtistLogInForm;
