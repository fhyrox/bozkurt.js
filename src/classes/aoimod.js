const fs = require('fs');
const path = require('path');

class AoiMode {
    constructor({ client }) {
        this.client = client;
    }

    setup() {
        const folderPath = path.join(__dirname, '..', 'aoiMode');
        const files = fs.readdirSync(folderPath);
    
        files.forEach((file) => {
        if (file.endsWith('.js')) {
            require(path.join(folderPath, file))(this.client);
        }
        });
    }
}

module.exports = AoiMode;