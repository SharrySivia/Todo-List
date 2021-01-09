import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './progress-bar.styles.scss'

const ProgressBar = () => (
    <div style={{ width: '70px', height: '70px', margin: 'auto', transform: 'translate(20px, -25px)' }}>
        <CircularProgressbar value={2} maxValue={10} text={`${2 * 100 / 10}%`} strokeWidth={10} styles={{
            path: {
                stroke: `#7267bd`
            },
            trail: {
                stroke: '#f7f7f7',
                strokeLinecap: 'butt',
                transform: 'rotate(0.25turn)',
                transformOrigin: 'center center',
            },
            text: {
                fill: '#f7f7f7'
            }
        }} />
    </div>
)

export default ProgressBar;