import { FaCheck } from 'react-icons/fa'
import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri'
import { useContext } from 'react'
import TodoContext from '../../context/TodoContext'
import styles from './Todo.module.css'

function Todo({ todo }) {
  const callbacks = useContext(TodoContext)

  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>

      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => callbacks.delete(todo.id)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => callbacks.toggle(todo.id)}
      />

      {/* <TodoContext.Consumer>
        {(value) => (
          <>
            <RiDeleteBin2Line
              className={styles.deleteIcon}
              onClick={() => value.delete(todo.id)}
            />
            <FaCheck
              className={styles.checkIcon}
              onClick={() => value.toggle(todo.id)}
            />
          </>
        )}
      </TodoContext.Consumer>  */}
    </div>
  )
}

export default Todo
