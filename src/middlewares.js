import sharp from 'sharp';
import path from 'path';

const createThumbnail = async (req, res, next) => {
    if (!req.file) {
        next();
        return;
    }
    const filePath = req.file.path;
    const directory = path.dirname(filePath);
    const filename = path.basename(filePath, path.extname(filePath));
    const thumbnailPath = path.join(directory, `${filename}_thumb.png`);

    try {
        await sharp(filePath)
            .resize(160, 160)
            .png()
            .toFile(thumbnailPath);
        console.log(`Thumbnail saved at ${thumbnailPath}`);
    } catch (err) {
        console.error(`Failed to create thumbnail: ${err}`);
    }

    next();
};

export { createThumbnail };