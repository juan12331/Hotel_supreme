
function Login(){
    function Mainpage(){
        window.location.href = '/'
    }
    return(
        <div> 
            <h1>login</h1>
            <button onClick={Mainpage}>Change</button>
        </div>
    )
}

export default Login