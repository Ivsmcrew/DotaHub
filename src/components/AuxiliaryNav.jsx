import { Link } from "react-router-dom"

const AuxiliaryNav = function({navItems, ...props}) {
  return(
    <nav className='auxNav'>
      {navItems.map((item, index) => {
        return(
          <Link key={index} className="auxNav_item" to={item.path}>
            <span>{item.title}</span>
          </Link>
        )
      })}
    </nav>
  )
}

export default AuxiliaryNav