const router = require('express').Router();
const statusService = require('../services/status.service');

router.get('/idle/current', async (req, res, err) => {
    let status = await statusService.getData("game_status","json");
    status = JSON.parse(status);
    res.status(200).json(status);
  });

router.post('/reset/start', async (req, res, err) => {
    let resetData = {
      "x": 0,
      "y": 0,
      "attacking":0,
      "jumping": false
    }
    await statusService.createFile("game_status","json",JSON.stringify(resetData))
    let status = await statusService.getData("game_status","json");
    status = JSON.parse(status);
    res.status(200).json(status);
  });

  router.put('/movement/right', async (req, res, err) => {
    newData = {
      "x": 10,
      "y": 0,
      "attacking":0,
      "jumping": false
    }
    let status = await statusService.returnStatus("game_status","json",newData);
    res.status(200).json(status);
    await statusService.writeLog("game_log","txt","Moving right");
  });

  router.put('/movement/left', async (req, res, err) => {
    newData = {
      "x": -10,
      "y": 0,
      "attacking":0,
      "jumping": false
    }
    let status = await statusService.returnStatus("game_status","json",newData);
    res.status(200).json(status);
    await statusService.writeLog("game_log","txt","Moving left");
  });

  router.put('/movement/up', async (req, res, err) => {
    newData = {
      "x": 0,
      "y": 10,
      "attacking":0,
      "jumping": false
    }
    let status = await statusService.returnStatus("game_status","json",newData);
    res.status(200).json(status);
    await statusService.writeLog("game_log","txt","Moving up");
  });

  router.put('/movement/down', async (req, res, err) => {
    newData = {
      "x": 0,
      "y": -10,
      "attacking":0,
      "jumping": false
    }
    let status = await statusService.returnStatus("game_status","json",newData);
    res.status(200).json(status);
    await statusService.writeLog("game_log","txt","Moving down");
  });
  router.put('/attack/right', async (req, res, err) => {
    newData = {
      "x": 10,
      "y": 0,
      "attacking":10,
      "jumping": false
    }
    let status = await statusService.returnStatus("game_status","json",newData);
    res.status(200).json(status);
    await statusService.writeLog("game_log","txt","Attacking right");
  });

  router.put('/attack/left', async (req, res, err) => {
    newData = {
      "x": -10,
      "y": 0,
      "attacking":-10,
      "jumping": false
    }
    let status = await statusService.returnStatus("game_status","json",newData);
    res.status(200).json(status);
    await statusService.writeLog("game_log","txt","Attacking left");
  });

  router.put('/jump/right', async (req, res, err) => {
    newData = {
      "x": 10,
      "y": 10,
      "attacking":0,
      "jumping": true
    }
    let status = await statusService.returnStatus("game_status","json",newData);
    res.status(200).json(status);
    await statusService.writeLog("game_log","txt","Jumping right");
  });

  router.put('/jump/left', async (req, res, err) => {
    newData = {
      "x": -10,
      "y": 10,
      "attacking":0,
      "jumping": true
    }
    let status = await statusService.returnStatus("game_status","json",newData);
    res.status(200).json(status);
    await statusService.writeLog("game_log","txt","Jumping left");
  });

  router.delete('/die/current', async (req, res, err) => {
    await statusService.deleteLog("game_log","txt");
    res.status(200).send("game_log deleted");
  });


module.exports = router;