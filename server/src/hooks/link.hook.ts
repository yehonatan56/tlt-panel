import { NextFunction } from 'express';

const PREFIX_URL: string = 'https://thelosttreasures.net/?';

const addPrefix = (link: string) => {
    if (link.startsWith(PREFIX_URL)) {
        return link;
    }
    return PREFIX_URL + link;
};

const linkHook = (schema) => {
    schema.pre('save', function (next: NextFunction) {
        this.link = addPrefix(this.link);
        next();
    });

    schema.pre('findOneAndUpdate', function (next: NextFunction) {
        const update = this.getUpdate();
        if (update.link) {
            update.link = addPrefix(update.link);
        }
        next();
    });
};

export default linkHook;
