import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import './Header.css';
import ImgProf from './imageInSrc.png';

const Header = () => {
	return (
		<div className='header'>
			<div className='header__left'>
				<MenuIcon />

				<img className='header__logo' src='/YouTubeLogo.png' alt='' />
			</div>
			<div className='header__input'>
				<input type='text' placeholder='Search' />

				<SearchIcon className='header__inputButton' />
			</div>
			<div className='header__icons'>
				<VideoCallIcon className='header__icon' />
				<AppsIcon className='header__icon' />
				<NotificationsIcon className='header__icon' />
				<Avatar
					alt='User Icon'
					src={ImgProf}
				/>
			</div>
		</div>
	);
};

export default Header;
