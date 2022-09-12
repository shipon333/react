
const title = "Hello World";
const content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley";
const date = new Date();
const year = date.getFullYear();

function Card(){
    return (
        <div className='card'>
            <h4 className='card-title'>{title}</h4>
            <p className='card-content'>{content}</p>
            <span className='card-year'>{year}</span>
      </div>
    )
}
export default Card;