import React, {useEffect} from "react";
import styles from "./styles";

const GeneralButton = props => {

    return (
        <button style={styles.button} {...props}>{props.children}</button>
    );
};

export default GeneralButton;
