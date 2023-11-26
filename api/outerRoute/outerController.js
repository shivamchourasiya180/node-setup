const {
    getResponse,
    PostResponse
} = require('./outerModel');

class outerController {
    getResponse(req, res) {
        const response = getResponse()
       res.send(response)
    };
    
    PostResponse(req, res) {
       
        const { firstName, lastName, email, password } = req.body
        if (!firstName || !lastName || !email || !password || !req.file) {
            res.send({status: false, data:null, message:'All fields is required'})
        } else {
            const response = PostResponse(firstName, lastName, email, password,req.file.filename)
            res.send(response)
        }
  };
};

module.exports = outerController;