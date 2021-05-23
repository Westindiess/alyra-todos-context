import { createContext, useContext } from "react"

export const TodosDispatchContext = createContext()

export const useTodosDispatchContext = () => {
	const context = useContext(TodosDispatchContext)
	if (context === undefined) {
		throw new Error(
			`You should use TodosDispatch only within the TodosDispatchContext.Provider`
		)
	}
	return context
}
