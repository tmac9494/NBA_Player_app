import React, {useEffect} from "react";
import styles from "./styles";
import Button from "../Button";

// consume array of objects and produce a form consisting of only text and text area inputs
// [
//     {
//         property: (string) - name of property,
//         type: (string) - type of input - ['text', 'textarea'],
//     }
// ]

const SimpleForm = props => {

    return (
        <form onSubmit={props.handleSubmit} className="form" style={{ ...styles.container, ...props.style }}>
            {props.inputs.map((input, i) => {

                return(
                    <label style={styles.label} key={input.property + i}>{input.property}<br/>
                        {input.type == "textarea" ? 
                            <textarea onChange={input.onChange ? input.onChange : false} name={input.property} style={styles.input} /> : 
                            <input onChange={input.onChange ? input.onChange : false} name={input.property} style={styles.input} type="text" />}
                    </label>
                );
            
            })
            }

            <Button onClick={props.handleSubmit}>{props.submitLabel ? props.submitLabel : "Save"}</Button>

        </form>
    );
};

export default SimpleForm;
