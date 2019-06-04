import React, {useEffect} from "react";
import styles from "./styles";
import SimpleForm from '../../General/SimpleForm';

const EditCard = props => {

	useEffect(() => {
		console.log(props.data)
	}, [])

	// create data for form
	const formProperties = Object.keys(props.data).map(key => {
		if (key !== "createdAt" &&
			key !== "editedAt" &&
			key !== "id" && 
			key !== "team") {
			
			return (
				{
					property: key,
					type: "text"
				}
			);
		} else {
			return null;
		}
	}).filter(val => val !== null);
	console.log(formProperties)

    return (
        <div id="edit-card" style={{ ...styles.container, ...props.style }}>
        	<div className="content" style={styles.content}>
        		<div className="controls" style={styles.controls}>
        			<button style={{background: "none", border: "0"}} onClick={props.closeCard}>
	        			<svg style={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"/></svg>
        			</button>
        		</div>
        		<div style={styles.header}>
		            <img src={`http://localhost:3008/${props.data.image}`} style={styles.playerImage} alt="player_image" />
		            
		            <div style={styles.name}>{props.data.name}</div>
		            <div>{props.team !== null && props.team.name}</div>
	            </div>
	            <SimpleForm style={{width: "90%", margin: "0 auto"}} inputs={formProperties || []} />
        	</div>
        </div>
    );
};

export default EditCard;
