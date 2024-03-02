const Table = function({headersArr, tableDataArr}) {
  const getHeadElements = function(headElements) {
    return (
      headElements.map((item, index) => {
        return(
          <th className="th" key={index}>
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
          <td className="td" key={index}>
            {item}
          </td>
        )
      })  
    )
  }

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead className="thead">
          <tr className="tr">
            {getHeadElements(headersArr)}
          </tr>
        </thead>

        <tbody className="tbody">
          {tableDataArr.map((item, index) => {
            return(
              <tr className="tr tbody__tr" key={index}>
                {getRowElements(Array.from(item.values()))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>

  )
}

export default Table