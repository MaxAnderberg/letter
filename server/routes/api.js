const { response } = require('express');
const dateFormat = require('dateformat');
const express = require('express');
const router = express.Router();

let messages = [
    {
      id:1,
      text: "Hi there!",
      user: "<Salt/> Dev",
      added: dateFormat(new Date(), "h:MM TT")
    },
    {
      id:2,
      text: "Hello World!",
      user: "Charles",
      added: dateFormat(new Date(), "h:MM TT")
    }
 ];

const nextId = messagesArray => {
  const highestId = messagesArray.reduce((accumulator, currentValue) => (currentValue.id > accumulator ? currentValue.id : accumulator), 0);
  return Number.parseInt(highestId, 10) + 1;
};

const hasValidPostFields = body => body.text && body.user;

const createMessage = body => {
    const message = body;
    const id = nextId(messages);
    message.id = id;
    message.added = dateFormat(new Date(), "h:MM TT");
    messages.unshift(message)
    return message;
}

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
        return res.status(201).json(message)
    } catch (error) {
        
    }
})

module.exports = router;
