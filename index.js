function Header()
{
    return(
        <header>
                <p className="calc">calc</p>
        </header>
    )
    
}

let numberArr = []

function Main()
{

    const [number,setNumber] = React.useState('')


    function writeNumber(symbol)
    {   
        if(symbol === "+" || symbol === "-" || symbol === "/" || symbol === "x")
        {
            numberArr.push(number)
            numberArr.push(symbol)
            setNumber('')
        }
        else
        {
            setNumber(prev=>prev+=symbol)
        }
    }

    function del()
    {
        setNumber(prev => {
            console.log(prev.length)
            if(prev.length < 2) {return ""}
            else {return prev.slice(0,-1)}
            
        })
    }

    function reset()
    {
        setNumber("")
    }

    function equal()
    {
        let answer = 0
        if(numberArr[1] === "+")
        {
            answer = Number(numberArr[0]) + Number(number)
        }
        else if (numberArr[1] === "x")
        {
            answer = Number(numberArr[0]) * Number(number)
        }
        else if (numberArr[1] === "/")
        {
            answer = (Number(numberArr[0]) / Number(number)).toFixed(3)
        }
        else if (numberArr[1] === "-")
        {
            answer = Number(numberArr[0]) - Number(number)
        }
        
        setNumber(answer.toString())
        answer = 0
        numberArr.length = 0

    }

    return(
        <main>
            <section className="output-section">
                <p>{number}</p>
            </section>

            <section className = "button-section">
                <button onClick = {()=>{writeNumber("7")}}>7</button>
                <button onClick = {()=>{writeNumber("8")}}>8</button>
                <button onClick = {()=>{writeNumber("9")}}>9</button>
                <button className="del-button" onClick={del}>DEL</button>
                <button onClick = {()=>{writeNumber("4")}}>4</button>
                <button onClick = {()=>{writeNumber("5")}}>5</button>
                <button onClick = {()=>{writeNumber("6")}}>6</button>
                <button onClick = {()=>{writeNumber("+")}}>+</button>
                <button onClick = {()=>{writeNumber("1")}}>1</button>
                <button onClick = {()=>{writeNumber("2")}}>2</button>
                <button onClick = {()=>{writeNumber("3")}}>3</button>
                <button onClick = {()=>{writeNumber("-")}}>-</button>
                <button onClick = {()=>{writeNumber(".")}}>.</button>
                <button onClick = {()=>{writeNumber("0")}}>0</button>
                <button onClick = {()=>{writeNumber("/")}}>/</button>
                <button onClick = {()=>{writeNumber("x")}}>x</button>
                <button className="reset-button" onClick={reset}>RESET</button>
                <button className="equal-button" onClick={equal}>=</button>
            </section>
            
        </main>
    )
}





function App()
{
    return(
        <div className="main-div">
            <Header />
            <Main />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))