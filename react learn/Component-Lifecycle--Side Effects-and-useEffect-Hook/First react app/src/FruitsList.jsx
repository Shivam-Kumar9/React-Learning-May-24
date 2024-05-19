function First(){
    const fruits =['Apple','Mango','Banana','Orange']
 
    return(<div>
        <ol>
            {fruits.map(fruit=>(
                <li>{fruit}</li>
            ))}
        </ol>
    </div>)
}
 
export default First;