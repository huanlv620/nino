import Header from '~/Layout/components/';
import SideBar from './SideBar';
import classNames from 'classnames/bind';
import styles from './Default.module.scss';
const cx = classNames.bind(styles);

function Default({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default Default;
