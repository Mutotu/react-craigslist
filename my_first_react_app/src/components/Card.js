//Blueprint for each card
const Card = (props) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <a href={props.linkTo}>
          <img className='card-image' src={props.image} alt='Craiglist post' />
        </a>
        <span className='card-price'>{props.price}</span>
      </div>
      <div className='card-body'>
        <span className='card-date'>{props.postedOn}</span>
        <a href={props.linkTo}> {props.title}</a>
        <span className='card-spacing'>{props.price}</span>
        <span className='card-spacing'> {props.bed}</span>
        <span className='card-spacing'> {props.sqft}</span>
        <span className='card-spacing'> {props.location}</span>{" "}
      </div>
    </div>
  );
};

export default Card;
