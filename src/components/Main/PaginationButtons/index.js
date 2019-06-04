import React, {useState, useEffect} from "react";
import styles from "./styles";


const Pagination = props => {

	const [pages, setPages] = useState({
		first: null,
		prev: null,
		next: null,
		last: null,
	})
	const [pageTotal, setPageTotal] = useState(0);
	useEffect(() => {
		// set links
		let newPages = pages;
		const keys = Object.keys(pages);

		// set links
		props.values.forEach((val, i) => {
			// target prev, next, and last if only 3 items in pagination list(on first item)
			let targetIndex = props.values.length === 4 ? i : i + 1;
			// set new state using target index to set properties
			newPages[keys[targetIndex]] = val;
		})
		setPages(newPages);

		// set total
		let total = newPages.last.split('?')[1];
		// start after _page= query variable
		const start = total.indexOf('_page=') + 6;
		// end at first '&'
		const end = total.indexOf('&');
		// slice total from string and turn to interger
		total = total.slice(start, end);
		console.log(parseInt(total));
		setPageTotal(parseInt(total));

	}, [])

	// create pagination buttons
	let buttons = [];
	for (let i = 1;i < pageTotal;i++) {
		buttons.push(<button className="page-button" key={i} value={i} onClick={props.setPage}>{i}</button>);
	}



    return (
    	<div id="pagination" style={{...styles.pagination, ...props.style}}>
    		{buttons}
    	</div>
    );
};

export default Pagination;
