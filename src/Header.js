import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import IconButton from '@mui/material/IconButton';
import Logo from './logotinder.png';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className="header__icon" fontSize="large" />
            </IconButton>

            <img className="header__logo" src={Logo} alt="tinder-logo" />
            <IconButton>
                <QuestionAnswerIcon className="header__icon" fontSize="large" />
            </IconButton>
        </div>
    );
}

export default Header;
