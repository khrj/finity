import { StateMachineConfigurator } from "./configuration/index.js"
import HierarchicalStateMachine from "./core/HierarchicalStateMachine.js"

const Finity = {
    configure() {
        return new StateMachineConfigurator()
    },

    start(config) {
        return HierarchicalStateMachine.start(config)
    },
}

export default Finity
