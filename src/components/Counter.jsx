import { useState } from 'preact/hooks'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <span class='text-blue-700 text-xl mr-2'>{counter}</span>
      <button
        class='border px-4 py-2 text-xl'
        onClick={() => setCounter((counter) => counter + 1)}
      >
        +
      </button>
      <button
        class='border px-4 py-2 text-xl'
        onClick={() => setCounter((counter) => counter - 1)}
      >
        -
      </button>
    </div>
  )
}

export default Counter
