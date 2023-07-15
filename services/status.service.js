const FileService = require('./file.service');

class StatusService extends FileService {
  constructor() {
    super();
  }

  async getData(fileName, fileType){
    let data = await this.readFile(fileName, fileType);
    data = JSON.parse(data);
    return data;
  }

}


module.exports = new StatusService();