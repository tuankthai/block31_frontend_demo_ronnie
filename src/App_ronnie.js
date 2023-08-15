import { useState, useEffect } from 'react';

const CatsServer = () => {
    const [catData, setCatData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                //FE to communicate to the BE, is through this URL
                const response = await fetch('http://localhost:9000/cats');
                const data = await response.json();
                setCatData(data); //catData = data from the response.json()
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])//dependency array allows it to run ONCE after initial load
    //pass in a variable and the variable changes it will rerun
    return (
        <div>
            <h1>Cats from our cat server</h1>
            {catData &&
                catData.map((cat) => (
                    <div key={cat.id}>
                        <h2>{cat.catName}</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default CatsServer







