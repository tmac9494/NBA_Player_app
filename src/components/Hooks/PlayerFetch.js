import React, {useState, useRef} from 'react';

// options:
// id: (int) fetch player by id
// limit: (int) number to limit results by
// refresh: (int) forces refresh if told to by CatalogHandler hook

function PlayerFetch(options={}) {

	// data retrieved by fetch
	const [playerData, setPlayerData] = useState(null);

	// data to be returned by hook(defaults to fetched data if no option filters set)
	const [dataFilter, setDataFilter] = useState(null);

	// pagination links 
	const [paginate, setPaginate] = useState(null);

	// force refresh counter
	const [refresh, setRefresh] = useState(0);

	// status of data fetch completion
	const hasBeenFetched = useRef(false);


	// reset hook to initial state
	const setInitialState = () => {
		setPlayerData(null);
		setDataFilter(null);
		setRefresh(options.refresh);
		setPaginate(null);
		hasBeenFetched.current = false;
	}

	// data fetch
	if (playerData === null && !hasBeenFetched.current) {
		hasBeenFetched.current = true;
		fetch(`http://localhost:3008/players?_page=${options.pageIndex}&` +
			// search string filter 
			(options.query ? `q=${options.query}&` : '') +
			// limit results option
			(options.limit ? `_limit=${options.limit}` : '')
		)
		.then(res => {
			const links = res.headers.get('Link').split(',');
			let paginateLinks = [];
			links.forEach(link => {
				const start = link.indexOf('<') + 1;
				const end = link.indexOf('>');
				const pushLink = link.slice(start, end);
				paginateLinks.push(pushLink);
			})
			if (paginateLinks.length <= 1) paginateLinks = null;
			console.log(paginateLinks);
			setPaginate(paginateLinks);
			return res.json();
		})
		.then(res => setPlayerData(res));
	}



	// filter returned data using filter options
	// if no filter options are set then return entire fetch result
	if (options && dataFilter === null && playerData !== null) {
		let data = playerData.slice();
		console.log(playerData)
		// by id
		if (options.id) {
			data = data.filter(player => player.id == options.id)[0];
		}
		setDataFilter(data);
	} else if (dataFilter === null && playerData !== null) {
		// retrieve all
		setDataFilter(playerData);
	}

	// should force refresh logic
	if (options.refresh >= 0 && options.refresh !== refresh) {
		console.log('main fetch refresh');
		setInitialState();
		console.log(options)
	}




	return (dataFilter !== null ? {data: dataFilter, paginate: paginate} : null);
}


export default PlayerFetch;