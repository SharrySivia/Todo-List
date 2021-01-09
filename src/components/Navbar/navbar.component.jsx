import SearchBox from '../Search-box/search-box.component';
import './navbar.styles.scss';

const Navbar = () => {


    return (
        <nav className='navbar'>
            <h3 className='logo'>Todo List</h3>
            <SearchBox />
            <a href='https://todobckend.herokuapp.com/api/github' className='btn'>Login with github</a>
        </nav>
    )
}


export default Navbar;