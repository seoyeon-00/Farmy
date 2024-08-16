import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/common/logo.png';
import { useRef } from 'react';
import { useDropDown } from '../../hooks/useDropDown';

const Header = () => {
  const dropDownRef = useRef(null);
  const dropDownRef2 = useRef(null);
  const dropDownRef3 = useRef(null);

  const { isOpen: eduIsOpen } = useDropDown({
    ref: dropDownRef,
    initialState: false
  });

  const { isOpen: blogIsOpen } = useDropDown({
    ref: dropDownRef2,
    initialState: false
  });

  const { isOpen: communityIsOpen } = useDropDown({
    ref: dropDownRef3,
    initialState: false
  });

  return (
    <HeaderContainer className='wrap flex flex_sc'>
      <h1>
        <img src={logo} alt='로고' />
      </h1>
      <Navigation className='flex flex_cc tc'>
        <Link to={''} className='link'>
          파미 소개
        </Link>
        <Link to={''} className='link'>
          농업기술 정보
        </Link>
        <Link to={''} className='link' ref={dropDownRef}>
          농업인 교육
          {eduIsOpen ? (
            <div className='nav_list flex flex_col shadow_small tc'>
              <Link to={''} className='link'>
                청년 농부
              </Link>
              <Link to={''} className='link'>
                신기술
              </Link>
            </div>
          ) : null}
        </Link>
        <Link to={''} className='link' ref={dropDownRef2}>
          팜로그
          {blogIsOpen ? (
            <div className='nav_list flex flex_col shadow_small tc'>
              <Link to={''} className='link'>
                팜일기
              </Link>
              <Link to={''} className='link'>
                가이드북
              </Link>
              <Link to={''} className='link'>
                이웃팜
              </Link>
            </div>
          ) : null}
        </Link>
        <Link to={''} className='link' ref={dropDownRef3}>
          커뮤니티
          {communityIsOpen ? (
            <div className='nav_list flex flex_col shadow_small tc'>
              <Link to={''} className='link'>
                기술정보
              </Link>
              <Link to={''} className='link'>
                자유게시판
              </Link>
              <Link to={''} className='link'>
                질문
              </Link>
            </div>
          ) : null}
        </Link>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  padding: 2rem 0.5rem;
  gap: 10rem;
`;

const Navigation = styled.div`
  gap: 3rem;

  .link {
    position: relative;
    width: 10rem;
    line-height: 2;
    font-size: var(--font-body-xsmall);
    font-weight: var(--weight-regular);
  }

  .nav_list {
    position: absolute;
    width: 100%;
    border-radius: 0.5rem;
    top: 2.5rem;
    left: -0.5rem;
    padding: 0.5rem;

    a {
      padding: 0.5rem 0;
      transition: all 0.4s;
      font-size: var(--font-body-micro);

      &:hover {
        background-color: var(--color-pastel);
        color: var(--color-main);
        border-radius: 0.5rem;
      }
    }
  }
`;
