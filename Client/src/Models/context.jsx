import {createContext} from 'react'

const context = createContext()
const ContextProvider = context.Provider
const ContextConsumer = context.Consumer


export {ContextProvider , ContextConsumer, context}