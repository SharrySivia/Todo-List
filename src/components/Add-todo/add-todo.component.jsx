import ProgressBar from '../Progress-bar/progress-bar.component';
import AddIcon from '../../assets/add.svg';
import './add-todo.styles.scss';

const AddTodo = () => {
    return (
        <div className='add-todo'>
            <div className='inputs-container'>
                <input type='text' className='input' placeholder='New todo' />
                <textarea className='text-area' placeholder='Description' />
                <button className='btn'><img src={AddIcon} alt='add' />Add</button>
            </div>
            <ProgressBar />
        </div>
    )
}

export default AddTodo;