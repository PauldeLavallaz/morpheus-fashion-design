const path = require('path');
const fs = require('fs');

module.exports = {
  skillPath: __dirname,
  skillMd: path.join(__dirname, 'SKILL.md'),
  scriptsPath: path.join(__dirname, 'scripts'),
  
  getSkillContent() {
    return fs.readFileSync(this.skillMd, 'utf8');
  }
};
