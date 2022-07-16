# linkedin-robot

This is a Robot to use Linkedin

In this code, I simply loggin in LinkedIn, and make a small publication mentioning a profile page as well.

# Tips for getting your hands dirty

Use credentials.json for authentication porpuses.
Use text-for-publication.json for type the message.

# Initiating project

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

# That's it Happy coding!
