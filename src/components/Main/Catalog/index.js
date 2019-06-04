import React, {useState, useEffect} from 'react';
import CatalogHandler from '../../Hooks/CatalogHandler';
import Card from "../Card";
import PaginationButtons from '../PaginationButtons';



const Catalog = props => {

	const [cardFocus, setCardFocus] = useState(null);

	// options object for data fetch hooks
	let options = {};


	// set options object values
	if (props.itemLimit) options.limit = props.itemLimit;
	if (props.query && props.query !== "" && options.query !== props.query) options.query = props.query;
	if (props.pageIndex) options.pageIndex = props.pageIndex;

	// data fetcher hook
	const catalogData = CatalogHandler(options);


	return(
		<div id="catalog" style={{margin: "0 auto", maxWidth: "1200px"}}>
			{catalogData && 
				<React.Fragment>
					{catalogData.data.map((player, i) => {
						return <Card data={player} key={player.id} />;
					})}
					{catalogData.paginate && 
						<PaginationButtons values={catalogData.paginate} setPage={props.pageHandler} />
					}
				</React.Fragment>
			}
		</div>
	)
}

export default Catalog;