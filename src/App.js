import Card from './components/Card';
import Data from './data.json';
const toDoapp = "To Do App";
function App(){
    return(
        <div>
        <h1 className='heading'>{toDoapp}</h1>
        {
            Data.map((item, index) =>
                <Card key={index} title={item.title} desc={item.desc}/>
            )
        }
        
    </div>
    )
}
export default App;