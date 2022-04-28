const VerifyUserMiddleware = require('../authorization/middlewares/verify.user.middleware');
//middlewares/verify.user.middleware
const AuthorizationController = require('../authorization/controllers/authorization.controller');
const AuthValidationMiddleware = require('../common/middlewares/auth.validation.middleware');
const FieldMiddleware = require('../common/middlewares/field.check.middleware');
const RevMiddleware = require('../reviews/middlewares/revs.middleware');
const { validate } = require('express-validation')

const mok = {
    "firstRow": [
      [
        0, 
        "http://194.187.154.148:8080/static/thumb/7be26af0-260f-476d-86cb-281f476490fd1.jpeg"
      ], 
      [
        1, 
        "http://194.187.154.148:8080/static/thumb/87489617-4d29-4865-a54a-a8d562390bfd5.jpeg"
      ], 
      [
        2, 
        "http://194.187.154.148:8080/static/thumb/dc5b8e39-5b14-45b7-a2a2-619e45b20fd17.jpeg"
      ], 
      [
        3, 
        "http://194.187.154.148:8080/static/thumb/2036bb86-41c6-4de0-a387-3691291b148fScreenshot_3.png"
      ]
    ], 
    "images": [
      {
        "original": "http://194.187.154.148:8080/static/original/7be26af0-260f-476d-86cb-281f476490fd1.jpeg", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/7be26af0-260f-476d-86cb-281f476490fd1.jpeg"
      }, 
      {
        "original": "http://194.187.154.148:8080/static/original/87489617-4d29-4865-a54a-a8d562390bfd5.jpeg", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/87489617-4d29-4865-a54a-a8d562390bfd5.jpeg"
      }, 
      {
        "original": "http://194.187.154.148:8080/static/original/dc5b8e39-5b14-45b7-a2a2-619e45b20fd17.jpeg", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/dc5b8e39-5b14-45b7-a2a2-619e45b20fd17.jpeg"
      }, 
      {
        "original": "http://194.187.154.148:8080/static/original/2036bb86-41c6-4de0-a387-3691291b148fScreenshot_3.png", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/2036bb86-41c6-4de0-a387-3691291b148fScreenshot_3.png"
      }, 
      {
        "original": "http://194.187.154.148:8080/static/original/7a0ac9d5-2ec9-4f2c-b9d8-e3cf3548662f6.jpeg", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/7a0ac9d5-2ec9-4f2c-b9d8-e3cf3548662f6.jpeg"
      }, 
      {
        "original": "http://194.187.154.148:8080/static/original/9d2d5b60-1774-469b-9f9d-5964ee121c9e7.jpeg", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/9d2d5b60-1774-469b-9f9d-5964ee121c9e7.jpeg"
      }, 
      {
        "original": "http://194.187.154.148:8080/static/original/00dd6c1d-c725-44fe-a2e1-7a962043e7885.jpeg", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/00dd6c1d-c725-44fe-a2e1-7a962043e7885.jpeg"
      }, 
      {
        "original": "http://194.187.154.148:8080/static/original/003a076f-e4bf-4196-b812-495b04c658e54.jpeg", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/003a076f-e4bf-4196-b812-495b04c658e54.jpeg"
      }, 
      {
        "original": "http://194.187.154.148:8080/static/original/6b5adc1d-2b65-4821-a90b-8a9d8e1014fd3.jpeg", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/6b5adc1d-2b65-4821-a90b-8a9d8e1014fd3.jpeg"
      }, 
      {
        "original": "http://194.187.154.148:8080/static/original/fffb5e3e-b5bf-40ea-84a8-71d867534daf2.jpeg", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/fffb5e3e-b5bf-40ea-84a8-71d867534daf2.jpeg"
      }, 
      {
        "original": "http://194.187.154.148:8080/static/original/3b2f6b1c-36fb-4ced-9164-00577fae68351.jpeg", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/3b2f6b1c-36fb-4ced-9164-00577fae68351.jpeg"
      }, 
      {
        "original": "http://194.187.154.148:8080/static/original/f96b59d0-cc55-40a2-8d37-59e0c82c19467.jpeg", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/f96b59d0-cc55-40a2-8d37-59e0c82c19467.jpeg"
      }, 
      {
        "original": "http://194.187.154.148:8080/static/original/2f949d24-bebc-4da0-adf2-16766b090d9a6.jpeg", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/2f949d24-bebc-4da0-adf2-16766b090d9a6.jpeg"
      }, 
      {
        "original": "http://194.187.154.148:8080/static/original/6f139fcc-1cc1-457a-a972-59b77682a5045.jpeg", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/6f139fcc-1cc1-457a-a972-59b77682a5045.jpeg"
      }, 
      {
        "original": "http://194.187.154.148:8080/static/original/e853baa3-3067-4afb-90b7-f4e98b1a62484.jpeg", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/e853baa3-3067-4afb-90b7-f4e98b1a62484.jpeg"
      }, 
      {
        "original": "http://194.187.154.148:8080/static/original/46870c4b-b5b6-4aa8-9f0b-8d8f4a9db8083.jpeg", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/46870c4b-b5b6-4aa8-9f0b-8d8f4a9db8083.jpeg"
      }, 
      {
        "original": "http://194.187.154.148:8080/static/original/5c65892a-419d-40eb-b456-791c0f7a34a42.jpeg", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/5c65892a-419d-40eb-b456-791c0f7a34a42.jpeg"
      }, 
      {
        "original": "http://194.187.154.148:8080/static/original/f8d3df01-8b1f-48d9-8988-49a6ce2ec3371.jpeg", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/f8d3df01-8b1f-48d9-8988-49a6ce2ec3371.jpeg"
      }, 
      {
        "original": "http://194.187.154.148:8080/static/original/fa35586a-ddab-46b5-9720-48a7559f868e8.jpeg", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/fa35586a-ddab-46b5-9720-48a7559f868e8.jpeg"
      }, 
      {
        "original": "http://194.187.154.148:8080/static/original/747a269e-1a53-4134-b2bb-b31742ea33f11.jpeg", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/747a269e-1a53-4134-b2bb-b31742ea33f11.jpeg"
      }, 
      {
        "original": "http://194.187.154.148:8080/static/original/0cee66ee-3f0d-4c0d-baf2-384def8219d92.jpeg", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/0cee66ee-3f0d-4c0d-baf2-384def8219d92.jpeg"
      }, 
      {
        "original": "http://194.187.154.148:8080/static/original/8b48a87e-2810-47c0-8865-e4fac29e2def3.jpeg", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/8b48a87e-2810-47c0-8865-e4fac29e2def3.jpeg"
      }, 
      {
        "original": "http://194.187.154.148:8080/static/original/0cd9f908-efdf-4017-a658-2a2577619a444.jpeg", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/0cd9f908-efdf-4017-a658-2a2577619a444.jpeg"
      }, 
      {
        "original": "http://194.187.154.148:8080/static/original/a4937785-96dc-4692-823a-64b61cd4b8dd5.jpeg", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/a4937785-96dc-4692-823a-64b61cd4b8dd5.jpeg"
      }, 
      {
        "original": "http://194.187.154.148:8080/static/original/a9fbcb01-c868-4b5c-8d9e-6df5d93787396.jpeg", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/a9fbcb01-c868-4b5c-8d9e-6df5d93787396.jpeg"
      }, 
      {
        "original": "http://194.187.154.148:8080/static/original/d6a24a69-c25d-403e-a0fa-9ea53d00587e3.jpeg", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/d6a24a69-c25d-403e-a0fa-9ea53d00587e3.jpeg"
      }, 
      {
        "original": "http://194.187.154.148:8080/static/original/59bd84bb-f845-4b09-8fd9-bed141b968c94.jpeg", 
        "originalClass": "gallary-photo", 
        "thumbnail": "http://194.187.154.148:8080/static/thumb/59bd84bb-f845-4b09-8fd9-bed141b968c94.jpeg"
      }
    ], 
    "secondRow": [
      [
        4, 
        "http://194.187.154.148:8080/static/thumb/7a0ac9d5-2ec9-4f2c-b9d8-e3cf3548662f6.jpeg"
      ], 
      [
        5, 
        "http://194.187.154.148:8080/static/thumb/9d2d5b60-1774-469b-9f9d-5964ee121c9e7.jpeg"
      ], 
      [
        6, 
        "http://194.187.154.148:8080/static/thumb/00dd6c1d-c725-44fe-a2e1-7a962043e7885.jpeg"
      ], 
      [
        7, 
        "http://194.187.154.148:8080/static/thumb/003a076f-e4bf-4196-b812-495b04c658e54.jpeg"
      ], 
      [
        8, 
        "http://194.187.154.148:8080/static/thumb/6b5adc1d-2b65-4821-a90b-8a9d8e1014fd3.jpeg"
      ], 
      [
        9, 
        "http://194.187.154.148:8080/static/thumb/fffb5e3e-b5bf-40ea-84a8-71d867534daf2.jpeg"
      ], 
      [
        10, 
        "http://194.187.154.148:8080/static/thumb/3b2f6b1c-36fb-4ced-9164-00577fae68351.jpeg"
      ]
    ], 
    "thirdRow": [
      [
        11, 
        "http://194.187.154.148:8080/static/thumb/f96b59d0-cc55-40a2-8d37-59e0c82c19467.jpeg"
      ], 
      [
        12, 
        "http://194.187.154.148:8080/static/thumb/2f949d24-bebc-4da0-adf2-16766b090d9a6.jpeg"
      ], 
      [
        13, 
        "http://194.187.154.148:8080/static/thumb/6f139fcc-1cc1-457a-a972-59b77682a5045.jpeg"
      ], 
      [
        14, 
        "http://194.187.154.148:8080/static/thumb/e853baa3-3067-4afb-90b7-f4e98b1a62484.jpeg"
      ], 
      [
        15, 
        "http://194.187.154.148:8080/static/thumb/46870c4b-b5b6-4aa8-9f0b-8d8f4a9db8083.jpeg"
      ], 
      [
        16, 
        "http://194.187.154.148:8080/static/thumb/5c65892a-419d-40eb-b456-791c0f7a34a42.jpeg"
      ], 
      [
        17, 
        "http://194.187.154.148:8080/static/thumb/f8d3df01-8b1f-48d9-8988-49a6ce2ec3371.jpeg"
      ], 
      [
        18, 
        "http://194.187.154.148:8080/static/thumb/fa35586a-ddab-46b5-9720-48a7559f868e8.jpeg"
      ], 
      [
        19, 
        "http://194.187.154.148:8080/static/thumb/747a269e-1a53-4134-b2bb-b31742ea33f11.jpeg"
      ], 
      [
        20, 
        "http://194.187.154.148:8080/static/thumb/0cee66ee-3f0d-4c0d-baf2-384def8219d92.jpeg"
      ], 
      [
        21, 
        "http://194.187.154.148:8080/static/thumb/8b48a87e-2810-47c0-8865-e4fac29e2def3.jpeg"
      ], 
      [
        22, 
        "http://194.187.154.148:8080/static/thumb/0cd9f908-efdf-4017-a658-2a2577619a444.jpeg"
      ], 
      [
        23, 
        "http://194.187.154.148:8080/static/thumb/a4937785-96dc-4692-823a-64b61cd4b8dd5.jpeg"
      ], 
      [
        24, 
        "http://194.187.154.148:8080/static/thumb/a9fbcb01-c868-4b5c-8d9e-6df5d93787396.jpeg"
      ], 
      [
        25, 
        "http://194.187.154.148:8080/static/thumb/d6a24a69-c25d-403e-a0fa-9ea53d00587e3.jpeg"
      ], 
      [
        26, 
        "http://194.187.154.148:8080/static/thumb/59bd84bb-f845-4b09-8fd9-bed141b968c94.jpeg"
      ]
    ]
  }
exports.routesConfig = function (app) {

    app.post('/get-reviews', [
    //     ValidationMiddleware.validJWTNeeded,
    //     AuthorizationController.verifyJWTBlacklist,
    //     PermissionMiddleware.minimumPermissionLevelRequired(Admin_Perm),
        RevMiddleware.getClutchData
    ]);

    app.post('/update-reviews', [
    //     ValidationMiddleware.validJWTNeeded,
    //     AuthorizationController.verifyJWTBlacklist,
    //     PermissionMiddleware.minimumPermissionLevelRequired(Admin_Perm),
        RevMiddleware.updateClutchData
    ]);

    app.get('/reviews', [
        RevMiddleware.getClutchRevs 
    ]);

    app.get('/big-reviews', [
        RevMiddleware.getClutchBigRevs
    ]);

    app.post('/admin/rev-manage', [
        validate(FieldMiddleware.hideRev),
    //     ValidationMiddleware.validJWTNeeded,
    //     AuthorizationController.verifyJWTBlacklist,
    //     PermissionMiddleware.minimumPermissionLevelRequired(Admin_Perm),
        RevMiddleware.adminHideRevs
    ]);

    app.delete('/admin/rev-manage', [
        validate(FieldMiddleware.deleteRev),
    //     ValidationMiddleware.validJWTNeeded,
    //     AuthorizationController.verifyJWTBlacklist,
    //     PermissionMiddleware.minimumPermissionLevelRequired(Admin_Perm),
        RevMiddleware.adminDeleteRevs
    ]);

    app.post('/admin/reviews', [
        validate(FieldMiddleware.editRev),
    //     ValidationMiddleware.validJWTNeeded,
    //     AuthorizationController.verifyJWTBlacklist,
    //     PermissionMiddleware.minimumPermissionLevelRequired(Admin_Perm),
        RevMiddleware.adminEditRevs
    ]);

    app.get('/gallery', function (req, res) {
        
        res.send(mok);

    });
    
};