const express = require('express');
const app = express()
const port = 3000;



// Addition endpoint with authentication token requested
app.get('/addition/:num1/:num2',(req, res) => {
    try {
        const num1 = Number(req.params.num1);
        const num2 = Number(req.params.num2);

        if (isNaN((num1))) {
            throw new Error(res.status(400).send('num1 incorrectly defined.'));
        }
        else if (isNaN((num2))) {
            throw new Error(res.status(400).send('num2 incorrectly defined.'));
        }
        else if (isNaN(num1) || isNaN(num2)) {
            throw new Error(res.status(400).send('Invalid input parameters. Please provide valid numbers.'));
        } else {
            const result = num1 + num2;
            res.send(`The result of ${num1} + ${num2} is ${result}.`);
        }
    } catch(error) {
        console.log(error)
        res.status(500).send("Error while doing the operation")
    }
});

// Subtraction endpoint
app.get('/subtraction/:num1/:num2', (req, res) => {
    try {
        const num1 = Number(req.params.num1);
        const num2 = Number(req.params.num2);

        if (isNaN((num1))) {
            throw new Error(res.status(400).send('num1 incorrectly defined.'));
        }
        else if (isNaN((num2))) {
            throw new Error(res.status(400).send('num2 incorrectly defined.'));
        }
        else if (isNaN(num1) || isNaN(num2)) {
            throw new Error(res.status(400).send('Invalid input parameters. Please provide valid numbers.'));
        } else {
            const result = num1 - num2;
            res.send(`The result of ${num1} - ${num2} is ${result}.`);
        }
    } catch(error) {
        console.log(error)
        res.status(500).send("Error while doing the operation")
    }
});

// Multiplication endpoint
app.get('/multiplication/:num1/:num2', (req, res) => {
    try {
        const num1 = Number(req.params.num1);
        const num2 = Number(req.params.num2);

        if (isNaN((num1))) {
            throw new Error(res.status(400).send('num1 incorrectly defined.'));
        }
        else if (isNaN((num2))) {
            throw new Error(res.status(400).send('num2 incorrectly defined.'));
        }
        else if (isNaN(num1) || isNaN(num2)) {
            throw new Error(res.status(400).send('Invalid input parameters. Please provide valid numbers.'));
        } else {
            const result = num1 + num2;
            res.send(`The result of ${num1} * ${num2} is ${result}.`);
        }
    } catch(error) {
        console.log(error)
        res.status(500).send("Error while doing the operation")
    }
});

// Division endpoint
app.get('/division/:num1/:num2', (req, res) => {

    try {
        const num1 = Number(req.params.num1);
        const num2 = Number(req.params.num2);

        if (isNaN((num1))) {
            throw new Error(res.status(400).send('num1 incorrectly defined.'));
        }
        else if (isNaN((num2))) {
            throw new Error(res.status(400).send('num2 incorrectly defined.'));
        }
        else if (num2 === 0) {
            res.status(400).send('Division by zero is not allowed.');
        }
        else if (isNaN(num1) || isNaN(num2)) {
            throw new Error(res.status(400).send('Invalid input parameters. Please provide valid numbers.'));
        } else {
            const result = num1 / num2;
            res.send(`The result of ${num1} / ${num2} is ${result}.`);
        }
    } catch(error) {
        console.log(error)
        res.status(500).send("Error while doing the operation")
    }

});

// Start the server
app.listen(port, () => {
    console.log(`Calculator microservice listening at http://localhost:${port}`);
});