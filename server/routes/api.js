const { response } = require('express');
const express = require('express');
const router = express.Router();

const hasValidPostFields = body => body.text && body.user;

const createMessage = body => {
    const message = body;
    messages.push(body);
    return message;
}

let messages = [
    {
      text: "Hi there!",
      user: "<Salt/> Dev",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
 ];

/* GET users listing. */
router.get('/posts', (req, res, next) => {
  res.json(messages);
});

router.post('/posts', (req, res) => {
    try {
        if(!hasValidPostFields(req.body)){
            res.status(400)
            return res.send('Include Text And Name');
        }
        const message = createMessage(req.body)
        messages.push(req.body)
        return res.json(message)
    } catch (error) {
        
    }
})

module.exports = router;
