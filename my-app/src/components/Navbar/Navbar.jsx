import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import Friends from './Friends';


const Navbar = (props) => {
  // let friends = props.state.friends.map(f => <Friends name={f.name} id={f.id} />);

    return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to='/profile' className={ navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/dialogs' className={ navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/users' className={ navData => navData.isActive ? s.active : s.item }>Users</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/news' className={ navData => navData.isActive ? s.active : s.item }>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/music' className={ navData => navData.isActive ? s.active : s.item }>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/settings' className={ navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
    </div>
    <div >
      <h3>
        Friends
        {/* {friends} */}
      </h3>
    </div>
  </nav>
}

export default Navbar;