
const date = new Date();
const year = date.getFullYear();

function Card(Props){
    const {title, desc} = Props;
    return (
        <div className='card'>
            <h4 className='card-title'>{title}</h4>
            <p className='card-content'>{desc}</p>
            <span className='card-year'>{year}</span>
      </div>
    )
}
export default Card;