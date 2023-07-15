const { config } = require('../config');
const fs = require('fs');

class FileService {
  constructor() {
    this.basePath = `${process.cwd()}/${config.dataPath}`;
  }

  async readDirectory() {
    const files = await fs.readdirSync(this.basePath);
    return files;
  }

  async readFile(fileName, fileType) {
    let data =  await fs.readFileSync(`${this.basePath}/${fileName}.${fileType}`,"utf-8");
    return  data;
  }

  async createFile(fileName, fileType, data = '') {
    await fs.writeFileSync(`${this.basePath}/${fileName}.${fileType}`, data);
  }
  async updateText(fileName, fileType,data){
    let files = await this.readDirectory();
    const flag = files.includes(`${fileName}.${fileType}`);
    if (flag){
      await fs.writeFileSync(`${this.basePath}/${fileName}.${fileType}`, data);
      return flag;
    }
    else {
      return flag;
    }
  }

  deleteRef(fileName, fileType) {
    let deleted = true;
    fs.unlink(`${this.basePath}/${fileName}.${fileType}`, (err) => {
      if (err) {
        deleted != deleted;
      }
    });

    return deleted;
  }

}

module.exports = FileService;