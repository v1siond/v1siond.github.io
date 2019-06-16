const debounce = (fn, time, thisA) => {
  let timeout

  return function () {
    const functionCall = () => fn.apply(thisA, arguments)
    clearTimeout(timeout)
    timeout = setTimeout(functionCall, time)
  }
}

export default debounce
