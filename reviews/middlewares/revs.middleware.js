const RevModel = require('../../reviews/models/rev.model');
const RevData = require('../../reviews/models/revData.model');
const RevController = require('../../reviews/controllers/rev.controller');
const ClutchPaser = require('../../common/clutch/parser');
const Clutch_url = require('../../common/config/env.config.js').clutch_url


exports.getClutchData = (req, res, next) => {
    try {
        ClutchPaser.Clutch(Clutch_url).then((data) => {
            RevData.addRevData(data.tolal_rate)
            data.list.map((rev) => {
                RevModel.findRev(rev.prj_id).then((rev_exist) => {
                    if (!rev_exist) {
                        RevModel.addRev(rev)
                    }
                    else {
                        next()
                    }
                })

            })
            return res.status(200).send();
        })

    }
    catch (err) {
        return res.status(500).send({ error_details: { name: "ServerError", message: err, statusCode: res.statusCode, error: "Internal Server Error" } });
    }

};

exports.updateClutchData = (req, res, next) => {
    try {
        ClutchPaser.Clutch(Clutch_url).then((data) => {
            data.list.map((rev) => {
                RevModel.patchRev(rev, rev.prj_id)
                    .then(() => {
                        next()
                    });

            })
            return res.status(200).send();
        })

    }
    catch (err) {
        return res.status(500).send({ error_details: { name: "ServerError", message: err, statusCode: res.statusCode, error: "Internal Server Error" } });
    }

};

exports.getClutchRevs = (req, res, next) => {
    try {
        RevModel.list().then((data) => {
            RevController.TotalRate().then((rate) => {
                return res.status(200).send({ reviewsArray: RevController.getRevList(data), reviewsArrayMobile: RevController.getRevListSplit(data), rate: rate });
            })

        })
    }
    catch (err) {
        return res.status(500).send({ error_details: { name: "ServerError", message: err, statusCode: res.statusCode, error: "Internal Server Error" } });
    }

};

exports.getClutchBigRevs = (req, res, next) => {
    try {
        RevModel.list().then((data) => {
            return res.status(200).send(data);
        })
    }
    catch (err) {
        return res.status(500).send({ error_details: { name: "ServerError", message: err, statusCode: res.statusCode, error: "Internal Server Error" } });
    }

};

exports.adminDeleteRevs = (req, res, next) => {
    try {
        RevModel.removeById(req.body.prj_id).then((data) => {
            if (data.deletedCount == 1) {
                return res.status(200).send();
            }
            else {
                return res.status(404).send({ error_details: { name: "RewiewNotFound", message: "Rewiew id not found", statusCode: res.statusCode, error: "Not Found" } });
            }
        })
    }
    catch (err) {
        return res.status(500).send({ error_details: { name: "ServerError", message: err, statusCode: res.statusCode, error: "Internal Server Error" } });
    }

};



exports.adminHideRevs = (req, res, next) => {
    try {
        RevModel.patchRev(({ hide: req.body.hide }), req.body.prj_id).then((data) => {
            if (data) {
                return res.status(200).send();
            }
            else{
                return res.status(404).send({ error_details: { name: "RewiewNotFound", message: "Rewiew id not found", statusCode: res.statusCode, error: "Not Found" } });
            }
            
        })
    }
    catch (err) {
        return res.status(500).send({ error_details: { name: "ServerError", message: err, statusCode: res.statusCode, error: "Internal Server Error" } });
    }

};

exports.adminEditRevs = (req, res, next) => {
    try {
        RevModel.patchRev(req.body, req.body.prj_id).then((data) => {
            if (data) {
                return res.status(200).send();
            }
            else{
                return res.status(404).send({ error_details: { name: "RewiewNotFound", message: "Rewiew id not found", statusCode: res.statusCode, error: "Not Found" } });
            }
        })
    }
    catch (err) {
        return res.status(500).send({ error_details: { name: "ServerError", message: err, statusCode: res.statusCode, error: "Internal Server Error" } });
    }

};

