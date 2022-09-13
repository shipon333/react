import Products from './components/Products';
import Data from './data.json';
function App(){
    return(
        <div>
            {
                Data.map((item,index)=> <Products key={index} data={item}/>)
            }
        
            
        {/* <h1 className='heading'>{toDoapp}</h1>
        {
            Data.map((item, index) =>
                <Card key={index} title={item.title} desc={item.desc}/>
            )
        } */}
        
    </div>
    )
}
export default App;