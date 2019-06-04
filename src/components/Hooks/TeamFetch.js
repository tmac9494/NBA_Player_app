import React, {useState, useRef} from 'react';

// options:
// id: (int) fetch team by id

function TeamFetch(options) {

	const [teamData, setTeamData] = useState(null);
	const [dataFilter, setDataFilter] = useState(null);
	const fetching = useRef(false);
	if (teamData === null && !fetching.current) {
		fetching.current = true;
		fetch('http://localhost:3008/teams')
		.then(res => res.json())
		.then(res => setTeamData(res));
	}

	if (options && dataFilter === null && teamData !== null) {
		let data = teamData.slice();
		// by id
		if (options.id) {
			data = data.filter(team => team.id == options.id)[0];
			setDataFilter(data);
		}
	} else if (dataFilter === null && teamData !== null) {
		// retrieve all
		setDataFilter(teamData);
	}




	return dataFilter;
}


export default TeamFetch;