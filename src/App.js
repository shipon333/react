import Card from './components/Card';
const toDoapp = "To Do App";
function App(){
    return(
        <div>
        <h1 className='heading'>{toDoapp}</h1>
        <Card title="Call to Father" desc="this method call of father"/>
        <Card title="Call to Mother" desc="this method call of Mother"/>
        <Card title="Call to Brother" desc="this method call of Brother"/>
        <Card title="Call to Sister" desc="this method call of Sister"/>
    </div>
    )
}
export default App;