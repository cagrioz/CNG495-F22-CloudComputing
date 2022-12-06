import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import IconButton from '@mui/material/IconButton';
import Logo from './logotinder.png';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className="header__icon" fontSize="large" />
            </IconButton>
            <a href="/">
                <img className="header__logo" src={Logo} alt="tinder-logo" />
            </a>
            <a href="/chat">
                <IconButton>
                    <QuestionAnswerIcon className="header__icon" fontSize="large" />
                </IconButton>
            </a>
        </div>
    );
}

export default Header;
