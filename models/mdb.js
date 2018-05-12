var mongoose = require('mongoose');
mongoose.connect(`mongodb://zishuow@ds119490.mlab.com:19490/info30005-db`,
    {auth: {
            user: 'zishuow',
            password: 'jiushih1!'}
    })
    .then(() => console.log('connection successful'))
    .catch((err) => console.error(err));
require('./candidates.js');
require('./booth.js')
module.exports = mongoose.connection;