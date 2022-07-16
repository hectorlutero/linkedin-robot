# linkedin-robot

This is a Robot to use Linkedin

In this code, I simply loggin in LinkedIn, and make a small publication mentioning a profile page as well.

# Tips for getting your hands dirty

Use credentials.json for authentication porpuses.
Use text-for-publication.json for type the message.

```bash
npm install
node index.js
```

```javascript
const puppeteer = require("puppeteer");
const credentials = require("./config/credentials.json");
const textForPublication = require("./config/text-for-publication.json");
const socialProfile = textForPublication.socialProfile;

(async () => {
  // AWAIT YOUR CODE
})();
```

# Technologies used for this masterpiece!

Node.js <img src="https://img.icons8.com/fluency/48/000000/node-js.png"/> <br>
Puppeteer <img src="https://pptr.dev/img/favicon.ico"/> <br>

# That's it Happy coding!
