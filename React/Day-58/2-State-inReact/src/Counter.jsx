function Counter () {
    let count = 0;  // Changes made in normal variable doest not reflact in ui coz dom is not being changed

    function incCount() {
        count += 1;
        console.log(count);
    } 
    return (
        <div>
            <h2>Count = {count}</h2>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}

export default Counter;