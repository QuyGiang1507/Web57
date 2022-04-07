```
const jwt = require('jsonwebtoken');

const token = jwt.sign(
    { username: web@gmail.com },
    "webfullstack",
    { expiresIn: 60 * 60 * 24 * 3 },
)
```
