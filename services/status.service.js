const FileService = require('./file.service');

class StatusService extends FileService {
  constructor() {
    super();
  }

  async getData(fileName, fileType){
    const data = await this.readFile(fileName, fileType);
    console.log(data);
  }

}


module.exports = new ExampleService();