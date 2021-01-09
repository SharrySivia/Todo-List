import deleteIcon from '../../assets/delete.svg';
import editIcon from '../../assets/edit.svg';
import tickBox from '../../assets/tickBox.svg';

import './todo.styles.scss';

const Todo = () => {
    return (
        <div className='todo'>
            <div className='todo-info'>
                <img className='checkbox' src={tickBox} alt='delete' />
                <div className='todo-details'>
                    <h3 className='todo-title'>Test Title</h3>
                    <p className='todo-description'>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
                    <p className='time-stamp'>04:35 PM, 09-Jan</p>
                </div>
            </div>
            <div className='todo-actions'>
                <img className='icon' src={editIcon} alt='delete' />
                <img className='icon' src={deleteIcon} alt='delete' />
            </div>
        </div>
    )
}

export default Todo;