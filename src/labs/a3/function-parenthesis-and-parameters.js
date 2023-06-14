function FunctionParanthesisAndParameters() {
    const square = a => a * a;
    const plusOne = a => a + 1;

    const twosquared = square(2);
    const threeplusone = plusOne(3);
    return (
        <>
            <h2>Paranthesis and Parameters</h2>
            twosquared = {twosquared} <br />
            square(2) = {twosquared} <br />
            threeplusone = {threeplusone} <br />
            plusOne(3) = {plusOne} <br />
        </>
    )
}
export default FunctionParanthesisAndParameters;