const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    rate: { type: String , default: null},
    added: { type: Date, default: Date.now },
    changed: { type: Date, default: null},
});

dataSchema.virtual('id').get(function () {
    return this._id.toHexString();
});


dataSchema.set('toJSON', {
    virtuals: true
});

dataSchema.findById = function (cb) {
    return this.model('Data').find({ id: this.id }, cb);
};

const RevData = mongoose.model('Data', dataSchema);


exports.addRevData = (rate) => {
    return RevData.findOneAndUpdate({}, {rate: rate, changed: Date()}, { upsert: true, new: true, setDefaultsOnInsert: true, useFindAndModify: false }, () => {

      });

}

exports.getSiteData = () => {
    return new Promise((resolve, reject) => {
        RevData.findOne()
            .exec(function (err, rev) {
                if (err) {
                    reject(err);
                } else {
                    resolve(rev);
                }
            })
    });
};






