
function Mainpage(){

    function Login(){
        window.location.href = '/login'
    }
    return(
        <div>
            <h1>Mainpage</h1>
            <button onClick={Login}>Change</button>
        </div>
    )
}

export default Mainpage