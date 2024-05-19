import { useEffect , useState } from "react"; 

export default function Effect () {
    const[counter , setcounter] = useState(0);
    const[users , setusers] = useState([]);
    const[filtredusers , setfiltredusers] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setusers(data)); 
        return console.log("DATA IS HERE")
        
    } , [])

    useEffect( () => {
        if(users.length > 0){
            console.log(users);
        }
    } , [users])

    const update = () => {
        setcounter(prev =>prev + 1)  
    }
    useEffect(()=> {
        setfiltredusers(users)
    } ,[users])

    const handleChange = (e) => {
        const searchValue = e.target.value.toLowerCase();
        const filter = users.filter(
            user => user.name.toLowerCase().includes(searchValue)
        );
        setfiltredusers(filter);
    }    


    return (
    <>
        <h1> {counter} </h1>
        <button onClick={update}>CLICK</button><br></br>
        <input type="text" className="search" onInput={handleChange}/>
        {filtredusers.map( 
            user => 
            <h3 key ={user.id}>
                {user.name}
            </h3>
        )}
    </>
    )
} 
