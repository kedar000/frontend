export default function WithoutState() {
    let count = 0;

    function increment() {
        count++;
        console.log(`Button clcked : ${count}`)
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>
                +
            </button>
        </>
    );
}