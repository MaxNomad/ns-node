const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const revSchema = new Schema({
    prj_id: {type: String},
    prj_name: {type: String},
    rev_link: {type: String},
    prj_category: {type: String},
    prj_size: {type: String},
    prj_length: {type: String},
    prj_summarry: {type: String},
    review_date: {type: String},
    rating: {type: String},
    quality: {type: String},
    schedule: {type: String},
    cost: {type: String},
    willing_to_refer: {type: String},
    feedback_summary: {type: String},  
    reviewer: {type: String},
    prj_length: {type: String},
    prj_summarry: {type: String},
    review_date: {type: String},
    rating: {type: String},
    quality: {type: String},
    interview_type: {type: String},
    reviewer_work: {type: String},
    interview_verified: {type: String},
    interview_client_size: {type: String},
    interview_industry: {type: String},
    interview_location: {type: String},
    the_review: {type: String},
    hide: {type: Boolean, default: false },
    created:{ type: Date, default: Date.now },
    updated:{ type: Date , default: null },


});

revSchema.virtual('id').get(function () {
    return this._id.toHexString();
});


revSchema.set('toJSON', {
    virtuals: true
});

revSchema.findById = function (cb) {
    return this.model('Reviews').find({ id: this.id }, cb);
};

const Reviews = mongoose.model('Reviews', revSchema);


exports.findRev = (id) => {
    return Reviews.findOne({prj_id: id})
        .then((result) => {
            return result ? true : false;
        });
};

exports.addRev = (Data) => {
    const Review = new Reviews(Data);
    return Review.save();
};


exports.list = () => {
    return new Promise((resolve, reject) => {
        Reviews.find()
            .exec(function (err, revs) {
                if (err) {
                    reject(err);
                } else {
                    resolve(revs);
                }
            })
    });
};

exports.patchRev = (revData, id) => {
    return Reviews.findOneAndUpdate(
        {prj_id: id}, 
        revData, {useFindAndModify: false})
        .then((result) => {
            return result;
        });
};

exports.removeById = (prj_id) => {
    return new Promise((resolve, reject) => {
        Reviews.deleteMany({ prj_id: prj_id }, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};


