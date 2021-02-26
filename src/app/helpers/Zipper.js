const fs = require('fs');
const archiver = require('archiver');
const extract = require('extract-zip')

/**
 * @module
 * @name Zipper
 * @description handle Directory compression
 * 
 */

module.exports = {
    /**
     * compress given directory
     * @param {Object} opts 
     * @param {String} opts.src source directory
     * @param {String} opts.out output file
     * @returns {Promise}
     */
    compress: (opts) => {
        const archive = archiver('zip', { zlib: { level: 9 } });
        const stream = fs.createWriteStream(opts.out);

        return new Promise((resolve, reject) => {
            archive
                .directory(opts.src, false)
                .on('error', err => reject(err))
                .pipe(stream);

            stream.on('close', () => resolve());
            archive.finalize();
        });
    },

    decompress: async (opts) => {
        try {
            await extract(opts.src, { dir: opts.out})
            console.log('Extraction complete')
        } catch (err) {
            // handle any errors
            console.log(err);
        }
    }
}