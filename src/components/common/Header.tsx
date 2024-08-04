import { Styled } from 'styled-components';
import logo from '../../assets/common/logo.png';

const Header = () => {
  return (
    <header>
      <h1>
        <img src={logo} alt='로고' />
      </h1>
      <ul>
        <li>
          <a>파미 소개</a>
        </li>
        <li>
          <a>농업기술 정보</a>
        </li>
        <li>
          <a>농업인 교육</a>
        </li>
        <li>
          <a>팜로그</a>
        </li>
        <li>
          <a>커뮤니티</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
