import React, {useState} from "react";
import styles from "./styles";
import TeamFetch from '../../Hooks/TeamFetch';
import EditCard from '../EditCard';


const Card = props => {

	const [edit, setEdit] = useState(false);
	const team = TeamFetch({id: props.data.team});

    return (
        <div style={{ ...styles.container, ...props.style }}>
            <div style={styles.name}>{props.data.name}</div>
            <img src={`http://localhost:3008/${props.data.image}`} style={styles.playerImage} alt="player_image" />
            <div>{team !== null && team.name}</div>
            <button onClick={() => setEdit(true)}>Edit</button>
            {edit &&
            	<EditCard data={props.data} team={team} closeCard={() => setEdit(false)} />
            }
        </div>
    );
};

export default Card;
