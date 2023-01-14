import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import IconButton from '@mui/material/IconButton';
import MapIcon from '@mui/icons-material/Map';
import Logo from './logotinder.png';
import './Header.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Header({ backButton }) {
    const history = useHistory();

    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header_icon_back"></ArrowBackIosIcon>
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large" />
                </IconButton>
            )}

            <Link to="/">
                <img className="header__logo" src={Logo} alt="tinder-logo" />
            </Link>

            <div className="button">
                <Link to="/chat">
                    <IconButton>
                        <QuestionAnswerIcon className="header__icon" fontSize="large" />
                    </IconButton>
                </Link>
                <Link to="/map">
                    <IconButton>
                        <MapIcon className="header__icon" fontSize="large" />
                    </IconButton>
                </Link>
            </div>
        </div>
    );
}

export default Header;
