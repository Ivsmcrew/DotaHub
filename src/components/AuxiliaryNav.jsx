import { Link } from "react-router-dom"

const AuxiliaryNav = function({navItems, ...props}) {
  return(
    <nav className='auxNav'>
      <ul className='auxNav_list'>
        {navItems.map((item, index) => {
          return(
            <li key={index}>
              <Link className="auxNav_item" to={item.path}>
                <span>{item.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default AuxiliaryNav