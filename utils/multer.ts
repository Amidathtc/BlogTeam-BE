import multer from "multer";

const storage = multer.diskStorage({
<<<<<<< HEAD
  destination: function (req:any, file:any, cb:any) {
=======
  destination: function (req: any, file: any, cb: any) {
>>>>>>> 454dffc7f82c9bc7f2af41c22725f0a4e1482827
    cb(null, "upload");
  },
  filename: function (req:any, file:any, cb:any) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpg");
  },
});

// for signing up
export const upload = multer({ storage: storage }).single("avatar");

// for creating an article
<<<<<<< HEAD
// export const image = multer({ storage: storage }).single("image");
=======
export const image = multer({ storage: storage }).single("image");

// for cover image
export const coverImage = multer({ storage: storage }).single("coverImage");

>>>>>>> 454dffc7f82c9bc7f2af41c22725f0a4e1482827
