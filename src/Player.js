export default class Player {
  constructor(name) {
    this._name = name
  }

  name() {
    return this._name
  }

  setName(newname) {
    this._name = newname
  }
}
