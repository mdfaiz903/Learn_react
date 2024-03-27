

const Condition_ren_IIF = () => {
    let marks = 10
    return (
        <div>
            {(()=>{
                        if(marks>80){
                            return <h1>Brilliant Result</h1>
                        }else{
                            return <h1>Average Result</h1>
                        }
                    }
                )()}
        </div>
    );
};

export default Condition_ren_IIF;