const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('Public'));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads'); 
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); 
  }
});

const upload = multer({ storage: storage });

app.get('/', (req, res) => {
  const filepath = path.join(__dirname, 'Public', 'Interface.html');
  res.sendFile(filepath, (err) => {
    if (err) {
      console.error('Error sending file:', err);
    }
  });
});

app.post('/add', upload.single('uploaded_file'), (req, res) => {
  console.log('Uploaded File Details:', req.file);
  console.log('Form Data:', req.body);

  if (path.extname(req.file.originalname) === '.csv') {
    const filepath = path.join(__dirname, 'Public', 'Interface.html');
    res.sendFile(filepath, (error) => {
      if (error) {
        console.error('Error sending file:', error);
      }
    });
  } else {
    
    fs.unlink(req.file.path, (err) => {
      if (err) {
        console.error('Error deleting file:', err);
      } else {
        console.log('Non-CSV file deleted successfully.');
      }
    });
    res.send("Please ensure that the file you are uploading is a CSV file.");
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
