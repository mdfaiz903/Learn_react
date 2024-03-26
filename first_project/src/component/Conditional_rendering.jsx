

const Conditional_rendering = () => {
    const LoginStatusButton=(status)=>{
        if(status){
            return <button>Logout btn</button>
        }else{
            return <button>Login btn</button>
        }
    }
    return (
        <div>
            <h1>Login status</h1>
            <hr />
            {LoginStatusButton(false)}
        </div>
    );
};

export default Conditional_rendering;