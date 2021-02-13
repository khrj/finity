import HierarchicalStateMachine from "../core/HierarchicalStateMachine.js"
import BaseConfigurator from "./BaseConfigurator.js"
import GlobalConfigurator from "./GlobalConfigurator.js"
import StateConfigurator from "./StateConfigurator.js"

export default class StateMachineConfigurator extends BaseConfigurator {
    constructor() {
        super()
        this.config = {
            global: new GlobalConfigurator(this),
            initialState: null,
            states: Object.create(null),
        }
    }

    global() {
        return this.config.global
    }

    initialState(state) {
        this.config.initialState = state
        return this.state(state)
    }

    state(state) {
        if (!this.config.states[state]) {
            this.config.states[state] = new StateConfigurator(this)
        }
        return this.config.states[state]
    }

    getConfig() {
        return this.buildConfig()
    }

    start() {
        const config = this.getConfig()
        return HierarchicalStateMachine.start(config)
    }
}
