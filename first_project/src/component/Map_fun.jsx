

const Map_fun = () => {
    const city = ['Noakhali','Dhaka',"Barishal",'Shelit','Rajshai']
    return (
        <div>
            <ul>
                {
                    city.map((item)=>{
                        return <li>{item}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default Map_fun;