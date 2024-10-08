import multer from "multer";
import express, { request, response } from "express";
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

fileRouter.route('/upload').
    post( fileUpload.single('file'), (req: Request, res: Response) => {
    console.log(req.body)

    if (!req.file) {
        console.log('File not uploaded:', req.file);
        return res.status(400).json({ 
            success: false, msg: 'Problem uploading a file' 
        });

    } else {
        console.log('File uploaded:', req.file);
        return res.status(200).json({
            success: true,
            msg: 'File uploaded successfully',
            filename: req.file.filename
        });
    }
});

export default fileRouter;



   /* if (!request.file) {
        res.send({
            status: -1,
            msg: 'Problem uploading a file'
        })
    }
    else {
        res.send({
            status: 0,
            msg: 'File uploaded successfuly',
            filename: request.file.filename
        })
    }  */
    



    /*if(res.status(400)) {
        return ({err: 'File size exceeds the limit'})
    }
    else {
        console.log("Problem uploading a file");
    }*/