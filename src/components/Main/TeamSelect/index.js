import React from "react";

const TeamSelect = props => {
	return(
		<select onChange={props.handleSelect} defaultValue={props.default} style={{	  
																				      display: "block",
																				      padding: "8px",
																				      border: "1px solid #9a9a9a",
																				      borderRadius: "5px",
																				      width: "100%",
																				      maxWidth: "325px",
																				      margin: "10px 0 10px 30px",
																				   }}>
			{props.options.map((team, i) => {
				return <option key={i} value={team.id}>{team.name}</option>;
			})
			}
		</select>
	);
}


export default TeamSelect;
