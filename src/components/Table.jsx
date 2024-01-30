const Table = function({headersArr, heroesDataArr}) {
  return (
    <table>
      <thead>
        <tr>
          {headersArr.map((item, index) => {
            return(
              <th key={index}>
                <span>{item}</span>
              </th>
            )
          })}
        </tr>
      </thead>

      <tbody>
        {
        heroesDataArr.map((itemTr, indexTr) => {
          return(
            <tr key={'tr' + indexTr}>
              {Array.from(itemTr.values()).map((itemTd, indexTd) => {
                return(
                  <td key={'td' + indexTd}>
                    {itemTd}
                  </td>
                )
              })}
            </tr>
          )
        })
        }
      </tbody>
    </table>
  )
}

export default Table