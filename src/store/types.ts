export interface RootState {
  CounterModule: ICounterState
  TodoListModule: ITodoListState
}

// Loading
export interface ILoadingState {
  loading: boolean
}

// Modal
export interface IModalState {
  info: IModalViewState
  warn: IModalViewState
  confirm: IModalViewState
}

export interface IModalViewState {
  isShow: boolean
  title: string
  message: string
  onClose?: IModalDifferdState
}

export interface IModalDifferdState {
  resolve?: Function
  reject?: Function
}

export enum ModalCloseButtonTypes {
  Close,
  OK,
  Cancel,
}

// TodoList
export interface ITodoListState {
  todos: ITodoItemState[]
  newTodo: string
}

export interface ITodoItemState {
  id: string
  todo: string
  isDone: boolean
}

// Counter
export interface ICounterState {
  incrementCounter: number
  decrementCounter: number
}
