import Card from './components/Card';
const toDoapp = "To Do App";
function App(){
    return(
        <div>
        <h1 className='heading'>{toDoapp}</h1>
        <Card />
        <Card />
        <Card />
    </div>
    )
}
export default App;