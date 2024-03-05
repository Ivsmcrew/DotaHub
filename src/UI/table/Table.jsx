import { useState } from "react";
import { sortDataByParam } from "../../utils/math"
import SortButton from "./SortButton";

const Table = function({headersDataArr, tableDataArr, setTableData, }) {
  function sortData(sortParam, sortReverse) {
    let sortedData = sortDataByParam(tableDataArr, sortParam, sortReverse);
    setTableData(sortedData)
  }

  const getHeadElements = function(headElements) {
    return (
      headElements.map((item, index) => {
        return(
          <th className="th" key={index}>
            <SortButton onClick={(sortReverse) => {sortData(item.sortParam, sortReverse)}}>
              {item.text}
            </SortButton>
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
            {getHeadElements(headersDataArr)}
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