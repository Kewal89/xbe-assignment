import { makeAutoObservable } from "mobx"
import { TCrewData } from "../../Types/CrewData"


class AppStore {
  crewData: Array<TCrewData> = []
  sidePanel: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  setCrewData = (data: Array<TCrewData>) => (this.crewData = data)
  setSidePanel = (flag: boolean) => (this.sidePanel = flag)

}

export default new AppStore()