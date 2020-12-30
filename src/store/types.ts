export interface RootState {
  LoadingStore: ILoadingState
  ModalStore: IModalState
  RoutingStore: IRoutingState
  CounterStore: ICounterState
  TodoListStore: ITodoListState
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

// Routing
export interface IRoutingState {
  toPath: string | undefined
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
