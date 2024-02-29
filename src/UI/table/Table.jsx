const Table = function({headersArr, tableDataArr}) {
  const getHeadElements = function(headElements) {
    return (
      headElements.map((item, index) => {
        return(
          <th key={index}>
            {item}
          </th>
        )
      })  
    )
  }
  const getRowElements = function(rowElements) {
    return (
      rowElements.map((item, index) => {
        return(
          <td key={index}>
            {item}
          </td>
        )
      })  
    )
  }

  return (
    <table>
      <thead>
        <tr>
          {getHeadElements(headersArr)}
        </tr>
      </thead>

      <tbody>
        {tableDataArr.map((item, index) => {
          return(
            <tr key={index}>
              {getRowElements(Array.from(item.values()))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table