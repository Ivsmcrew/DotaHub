import { NavLink } from "react-router-dom"

const AuxiliaryNav = function({navItems, ...props}) {
  return(
    <nav className='auxNav'>
      {navItems.map((item, index) => {
        return(
          <NavLink key={index} 
                className={({isActive}) => isActive ? 'auxNav__item auxNav__item_active' : 'auxNav__item'}
                to={item.path}>
            <span>{item.title}</span>
          </NavLink>
        )
      })}
    </nav>
  )
}

export default AuxiliaryNav