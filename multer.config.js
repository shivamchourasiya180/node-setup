const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname.replace(/\s/g, '-'));
  }
});

module.exports = multer({ storage: storage, limits: { fileSize: 10000000 } }); // 10 MB = 10000000 Bytes