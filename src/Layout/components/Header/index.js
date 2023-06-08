import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    console.log('tiktok', images.logo);
    console.log('fb', images.fb);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo tiktok" />
                    <div></div>
                </div>
            </div>
        </header>
    );
}

export default Header;
