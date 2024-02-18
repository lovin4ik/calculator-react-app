import React, {useState} from 'react';
import classes from './calculator.module.css';
import Display from "../Display/Display";
const Calculator = () => {

    const [input, setInput] = useState('')
    const [result, setResult] = useState(0)
    const buttonClick = event => {
        if (event === '=') {
            try {
                setResult(eval(input))
            } catch (error) {
                setResult('Error')
            }
        } else setInput(input + event);
        if (event === 'C') {
            setInput('')
            setResult(0)
        }
    }

    return (
        <div className={classes.calculator}>
            <Display showinput={input} result={result} />
            <div className={classes.buttons}>
                <button
                    onClick={() => buttonClick(7)}
                    className={classes.button}
                >7
                </button>
                <button
                    onClick={() => buttonClick(8)}
                    className={classes.button}
                >8
                </button>
                <button
                    onClick={() => buttonClick(9)}
                    className={classes.button}
                >9
                </button>
                <button
                    onClick={() => buttonClick('/')}
                    className={classes.buttonAdd}
                >/
                </button>
                <button
                    onClick={() => buttonClick(4)}
                    className={classes.button}
                >4
                </button>
                <button
                    onClick={() => buttonClick(5)}
                    className={classes.button}
                >5
                </button>
                <button
                    onClick={() => buttonClick(6)}
                    className={classes.button}
                >6
                </button>
                <button
                    onClick={() => buttonClick('*')}
                    className={classes.buttonAdd}
                >*
                </button>
                <button
                    onClick={() => buttonClick(1)}
                    className={classes.button}
                >1
                </button>
                <button
                    onClick={() => buttonClick(2)}
                    className={classes.button}
                >2
                </button>
                <button
                    onClick={() => buttonClick(3)}
                    className={classes.button}
                >3
                </button>
                <button
                    onClick={() => buttonClick('-')}
                    className={classes.buttonAdd}
                >-
                </button>
                <button
                    onClick={() => buttonClick('+')}
                    className={classes.buttonAdd}
                >+
                </button>
                <button
                    onClick={() => buttonClick(0)}
                    className={classes.button}
                >0
                </button>
                <button
                    onClick={() => buttonClick('.')}
                    className={classes.button}
                >.
                </button>
                <button
                    onClick={() => buttonClick('C')}
                    className={classes.buttonAdd}
                >C
                </button>
                <button
                    onClick={() => buttonClick('=')}
                    className={classes.buttonAdd}
                >=
                </button>
            </div>
        </div>
    );
};

export default Calculator;