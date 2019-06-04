import React, {useEffect} from "react";
import styles from "./styles";

// consume array of objects and produce a form consisting of only text and text area inputs
// [
//     {
//         property: (string) - name of property,
//         type: (string) - type of input - ['text', 'textarea'],
//     }
// ]

const SimpleForm = props => {

    return (
        <form onSubmit={props.submitHandler} className="form" style={{ ...styles.container, ...props.style }}>
            {props.inputs.map((input, i) => {

                return(
                    <label style={styles.label} key={input.property + i}>{input.property}<br/>
                        {input.type == "textarea" ? 
                            <textarea style={styles.input} /> : 
                            <input style={styles.input} type="text" />}
                    </label>
                );
            
            })
            }

            <input type="submit" style={styles.submit} value={props.submitLabel ? props.submitLabel : "Save"}/>

        </form>
    );
};

export default SimpleForm;
