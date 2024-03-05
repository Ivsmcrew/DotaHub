import React, { useState } from 'react'

function SortButton({onClick, children}) {
  const [sortReverse, setSortReverse] = useState(1);

  function click() {
    onClick(sortReverse);
    setSortReverse(-1 * sortReverse);
  }

  return (
    <button onClick={click}>
      {children}
    </button>
  )
}

export default SortButton