import { makeAutoObservable } from "mobx"
import { TCrewData } from "../../Types/CrewData"


class AppStore {
  crewData: Array<TCrewData> = []

  constructor() {
    makeAutoObservable(this)
  }

  setCrewData = (data: Array<TCrewData>) => (this.crewData = data)

}

export default new AppStore()