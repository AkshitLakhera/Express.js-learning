// Creating http server
// Express is not a node deafult library it is not bundeled
// / is a route after 3000/ everthing come here is route


const express = require('express');
const app = express();

function sum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans = ans + i;
    }
    return ans;
}

app.get("/", function (req, res) {
    const n = req.query.n;
    const ans = sum(n);
    
    // Use template string to concatenate the string and the answer
    res.send(`Hi, your answer is ${ans}`);
});

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
