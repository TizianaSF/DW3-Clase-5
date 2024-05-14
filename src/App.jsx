import { useState , useEffect } from 'react'
import Contador from './Contador';


function App() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const [data, setData] = useState([]);

  const [loading ,setLoading] = useState(true);

  useEffect( () => {
    fetch(url)
    .then(res => res.json())
    .then(res => {
      setData(res)
      setLoading(false)
    }) 
  },[])

  console.log(data);
  console.log(data[0]);

  return (
    <>
      {
      loading ? <h1>Cargando...</h1> : (
        <>
        <h1>{data[0].name}</h1>
        <h2>{data[0].email}</h2>
        </>
        )
      }
      <Contador></Contador>
    </>
  )
}

export default App
