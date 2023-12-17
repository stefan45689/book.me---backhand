import multer from "multer";
import express from "express";
import { Request, Response } from "express";
import path from "path";


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '..', 'public'))
    },
    filename: (req, file, callback) => {
        callback(null, `${Date.now()}-${file.originalname}`)
    }
})

const fileUpload = multer({storage: storage, 
limits: {
    fileSize: 1024 * 1024 * 5   // 5 MB
}
});

const fileRouter = express.Router();

fileRouter.post('upload', fileUpload.single(''), (req: Request, res: Response) => {
    try {
        return res.status(200).json("File uploaded successfully");
        } 
      catch (err: any) {
    //  err.message = 'An error has occured while uploading the file';
        if(res.status(400)) {
            return ({err: 'File size exceeds the limit'})
        }
        else {
            console.log(err, err.message);
        }
        }
});

export default fileRouter;