import multer from 'multer';

import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: `mongodb+srv://user:12345@database.5m2nx.mongodb.net/?retryWrites=true&w=majority&appName=Database`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if (match.indexOf(file.memeType) === -1) {
            return `${Date.now()}-blog-${file.originalnamer}`;

        }

        return {
            bucketName: "photos",
            filename:`${Date.now()}-blog-${file.originalname}`
        }
    }
})

export default multer({ storage});