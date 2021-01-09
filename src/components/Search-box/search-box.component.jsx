import searchIcon from '../../assets/search.svg';
import './search-box.styls.scss'

const SearchBox = () => {
    return (
        <div className='search-box'>
            <input className='input' type='text' name='searchbox' placeholder='Quick Find...' />
            <img className='search-icon' src={searchIcon} alt='search' />
        </div>
    )
}

export default SearchBox;