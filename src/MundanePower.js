class MundanePower {

  constructor(skill, description, useful){
    this.skill = skill,
    this.description = description,
    this.useful = useful
  }

  isUseful(){
    if (this.useful != 2 ){
      return true

    } else {
      return false
    }
  }
}

module.exports = MundanePower
