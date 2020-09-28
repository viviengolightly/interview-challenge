import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

 // Styles
 import '../../styles/styles.css';

 const ItemsListComponent = ({ items, handleAdd, handleChange, value }) => (
 	<div 
	 	className="left"
		data-test="itemsList"
	>
 		<div className="itemWrapper">
			Choose from below...
			<div>
				<input
					data-test="input"
					onChange={(e) => handleChange(e)} 
					placeholder="Search" 
					value={value}
				/>
			</div>
		</div>
	 	<div> 

	 		{items.filter(i => i.name.toLowerCase().includes(value.toLowerCase())).map(item => {
	 			return(
					<div
						className="itemWrapper"
						key={shortid.generate()}
					> 
						{item.name}
						<div>
							{item.dietaries.map(d => {
								return(
									<span key={shortid.generate()}>
										{` ${d}`}
									</span>
								);
							})}
						</div>
						<div>
							<button
								data-test="add" 
								onClick={() => handleAdd(item.id)}
							> 
								Add
							</button>
						</div>
					</div>
				);
	 		})}
		 </div>
	 </div>
 );

 ItemsListComponent.propTypes = {
 	items: PropTypes.array.isRequired,
 	handleAdd: PropTypes.func.isRequired,
 	handleChange: PropTypes.func.isRequired,
 	value: PropTypes.string.isRequired,
 };

 export default ItemsListComponent;