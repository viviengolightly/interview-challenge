import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
 
 // Styles
 import '../../styles/styles.css';

const MenuPreviewComponent = ( { handleDelete, menuItems} ) => (
	<div 
		className="right"
		data-test="menuList"
	>
		<div className="itemWrapper"> 
			Menu Preview 
		</div>
		{menuItems &&
			<div>
				{menuItems.map(item => {
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
								<button onClick={() => {handleDelete(item.id)}}>
									(X)
								</button>
							 </div>
						</div>
					);
				})}
			</div>
		}
	</div>


);

MenuPreviewComponent.propTypes = {
	handleDelete: PropTypes.func.isRequired,
	menuItems: PropTypes.array.isRequired,
};

export default MenuPreviewComponent;