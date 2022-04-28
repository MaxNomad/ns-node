const RevModel = require('../../reviews/models/rev.model');
const RevData = require('../../reviews/models/revData.model');


exports.getRevList = (data) => {
    return data.map((rev) => {
        return {
            hide: rev.hide,
            prj_id: rev.prj_id,
            rating: rev.rating,
            rev_link: rev.rev_link,
            reviewer_work: rev.reviewer_work,
            the_review: rev.the_review,
        }
    })
}

exports.getRevListSplit = (data) => {
    const dataArray = data.map((rev) => {
        return {
            hide: rev.hide,
            prj_id: rev.prj_id,
            rating: rev.rating,
            rev_link: rev.rev_link,
            reviewer_work: rev.reviewer_work,
            the_review: rev.the_review,
        }
    })
    const sliced_array = [];
    const array_size = 2;
    for (let i = 0; i < dataArray.length; i += array_size) {
        sliced_array.push(dataArray.slice(i, i + array_size));
    }
    return sliced_array
}


exports.TotalRate  = () => {
    return RevData.getSiteData()
        .then((result) => {
            console.log(result)
            return result.rate
        });
};





