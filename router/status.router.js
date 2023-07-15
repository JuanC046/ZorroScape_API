const router = require('express').Router();
const statusService = require('../service/status.service');

router.get('idle/current', async (req, res, err) => {
    const status = await statusService.getData();
    res.status(200).json(status);
  });

module.exports = router;