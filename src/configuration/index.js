/* eslint-disable import/prefer-default-export */
import AsyncActionConfigurator from "./AsyncActionConfigurator.js"
import delegateToAncestor from "./delegateToAncestor.js"
import GlobalConfigurator from "./GlobalConfigurator.js"
import StateConfigurator from "./StateConfigurator.js"
import StateMachineConfigurator from "./StateMachineConfigurator.js"
import TransitionConfigurator from "./TransitionConfigurator.js"
import TriggerConfigurator from "./TriggerConfigurator.js"

export { StateMachineConfigurator }

delegateToAncestor(GlobalConfigurator, StateMachineConfigurator)
delegateToAncestor(StateConfigurator, StateMachineConfigurator)
delegateToAncestor(TransitionConfigurator, StateConfigurator)
delegateToAncestor(TransitionConfigurator, TriggerConfigurator)
delegateToAncestor(TransitionConfigurator, AsyncActionConfigurator)
