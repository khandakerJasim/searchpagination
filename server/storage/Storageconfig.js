const multer = require("multer");

const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const filename = `images-${Date.now()}.${file.originalname}`;

    cb(null, filename);
  },
});

const filfilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error("only jpeg,jpg,and png file are allowed"));
  }
};

const upload = multer({
  storage: Storage,
  fileFilter: filfilter,
});

module.exports = upload;
