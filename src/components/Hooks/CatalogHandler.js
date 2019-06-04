import React, {useState, useRef, useEffect} from 'react';
import PlayerFetch from './PlayerFetch';


function CatalogHandler(options) {

	// item list to be returned
	const [items, setItems] = useState(null);
	
	// refresh counter for updates
	const [refresh, setRefresh] = useState(0);
	const [fetching, setFetching] = useState(true);

	// set refresh counter into hook options for fetch updates
	options.refresh = refresh;

	// array of options that can refresh the catalog on change
	const controlOptions = ['query', 'pageIndex']

	// track previous parameters for updates
	const prevOptions = useRef(options);

	// hook for fetching data
	const data = PlayerFetch(options);
	useEffect(() => {
		if (data !== null) setFetching(false);
	}, [options, data])

	// if last query option does not match current query option, then tell hook to refresh and set item list to null(initial)
	let shouldRefresh = false;
	if (prevOptions.current !== null) {
		controlOptions.forEach((option, i) => {
			if (prevOptions.current[option] !== options[option]) {
				shouldRefresh = true;
				prevOptions.current[option] = options[option];
			}		
		})
	}
	if (shouldRefresh) {
		setFetching(true);
		setRefresh(refresh + 1);
		setItems(null);
	}	

	// set item list once data has been fetched
	if (items === null && data !== null && !fetching) {
		console.log('set data')
		console.log(data)
		setItems(data);
	}

	return items;
}

export default CatalogHandler;