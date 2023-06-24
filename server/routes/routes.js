import  express  from "express"
import { uplodeimg ,downloadimg} from "../controler/image-controler.js";
import upload from "../utils/upload.js";
 
const router =express.Router();
 
router.post('/upload', upload.single('file'),uplodeimg)

router.get('/file/:fileId',downloadimg);


export default router;