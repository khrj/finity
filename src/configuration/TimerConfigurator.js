import TriggerConfigurator from "./TriggerConfigurator.js"

export default class TrimerConfigurator extends TriggerConfigurator {
    constructor(parent, timeout) {
        super(parent)
        this.config.timeout = timeout
    }
}
