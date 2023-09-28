import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
const {id, image, category, title, category_color, text_color, btn_color} = data;

const cardStyle = {
    'background-color': category_color,
    'color': text_color
}
const btnStyle = {
    'background-color': btn_color
}

    return (
        <Link to={`/details/${id}`}>
            <div className='card shadow-xl' style={cardStyle}>
                <figure><img src={image} alt="Shoes" className='w-full h-[240px]' /></figure>
                <div className='py-5 px-6 space-y-3'>
                    <button className='px-3 py-1 rounded-lg font-medium' style={btnStyle}>{category}</button>
                    <h2 className="card-title">{title}</h2>
                </div>
            </div>
        </Link>
    );
};

Card.propTypes = {
    data: PropTypes.object.isRequired
}

export default Card;