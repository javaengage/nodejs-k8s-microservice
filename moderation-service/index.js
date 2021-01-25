const express =  require('express');
const bodyParser =  require('body-parser');
const axios = require('axios');

const app =  express();
app.use(bodyParser.json());

app.post('/events' , async (req, res) => {
    console.log('received event' , req.body);

    const {type, data} = req.body;

    if(type ===  'CommentCreated'){
        const status =  data.content.includes('orange') ?
            'rejected' : 'approved';
        
        await axios.post('http://event-bus-service:4005/events', {
            type: 'CommentModerated',
            data: {
                id: data.id,
                postId: data.postId,
                content: data.content,
                status
            }
        });
    }

    res.send({});
});

app.listen(4003, () => {
    console.log('Moderation service listening on port 4003');
});