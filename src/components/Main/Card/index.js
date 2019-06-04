import React, {useState} from "react";
import styles from "./styles";
import TeamFetch from '../../Hooks/TeamFetch';
import Button from '../../General/Button';
import EditCard from '../EditCard';


const Card = props => {

	const [edit, setEdit] = useState(false);
    const [favCount, setFavCount] = useState(0);
    const [favorited, setFavorited] = useState(false);

    const favorite = () => {
        if (!favorited) {
            setFavCount(favCount + 1);
            setFavorited(true);
        }
        fetch('http://localhost:3008/favorites/?id=' + props.data.id, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                player: props.data.id,
                favorites: favCount + 1
            })
        })
    }

	const teams = TeamFetch();
    let team = null;
    if (teams !== null) {
        team = teams.filter(teami => teami.id === props.data.team)[0];
    }

    // selected state
    let classStyles = {}
    if (favorited) {
        classStyles.background = "#ababab";
    }

    return (
        <div style={{ ...styles.container, ...props.style }}>
            <div style={{...styles.content}}>
                <div style={styles.favCount}><span>{favCount}</span></div>
                <div style={styles.name}>{props.data.name}</div>
                <img src={`http://localhost:3008/${props.data.image}`} style={styles.playerImage} alt="player_image" />
                <div>{team !== null && team.name}</div>
                <Button onClick={() => setEdit(true)}>Edit</Button>
                <Button onClick={favorite} styles={{...{background: "#B02F30", marginTop: "0"}, ...classStyles}}>Favorite</Button>
            </div>
            {edit &&
                <EditCard data={props.data} team={team} teams={teams} closeCard={() => setEdit(false)} />
            }
        </div>
    );
};

export default Card;
