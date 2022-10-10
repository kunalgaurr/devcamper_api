const Bootcamp = require('../models/Bootcamps');

//@desc         Get all bootcamps
//@route        GET /api/v1/bootcamps
//@access       Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, message: `Show all bootcamps` });
};

//@desc         Get single bootcamp
//@route        GET /api/v1/bootcamps/:id
//@access       Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Show single bootcamp ${req.params.id}` });
};

//@desc         Create new bootcamp
//@route        POST /api/v1/bootcamps/:id
//@access       Private
exports.createBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);

  res.status(201).json({
    success: true,
    data: bootcamp,
  });
};

//@desc         Update bootcamp
//@route        PUT /api/v1/bootcamps/:id
//@access       Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Update bootcamp ${req.params.id}` });
};

//@desc         Delete bootcamp
//@route        Delete /api/v1/bootcamps/:id
//@access       Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Delete bootcamp ${req.params.id}` });
};
