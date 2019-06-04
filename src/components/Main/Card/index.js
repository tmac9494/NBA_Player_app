import React, {useState} from "react";
import styles from "./styles";
import TeamFetch from '../../Hooks/TeamFetch';
import Button from '../../General/Button';
import EditCard from '../EditCard';


const Card = props => {

	const [edit, setEdit] = useState(false);
	const team = TeamFetch({id: props.data.team});

    return (
        <div style={{ ...styles.container, ...props.style }}>
            <div style={{...styles.content}}>
                <div style={styles.name}>{props.data.name}</div>
                <img src={`http://localhost:3008/${props.data.image}`} style={styles.playerImage} alt="player_image" />
                <div>{team !== null && team.name}</div>
                <Button onClick={() => setEdit(true)}>Edit</Button>
                {edit &&
                	<EditCard data={props.data} team={team} closeCard={() => setEdit(false)} />
                }
            </div>
        </div>
    );
};

export default Card;
