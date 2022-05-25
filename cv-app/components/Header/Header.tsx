import {
  ArrowBack,
  ImgDiv,
  Profile,
  NavMenu,
  Title,
  Italics,
  NavItem,
  HeaderBackground,
} from './styled';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { BsFacebook, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import profilImg from '../../public/images/omnieprofil.jpg';

const Header = () => {
  return (
    <HeaderBackground>
      <ArrowBack>
        <Link href='https://aszczur-dev.netlify.app/'>
          <FiArrowLeftCircle />
        </Link>
      </ArrowBack>
      <ImgDiv>
        <a href='https://aszczur-dev.netlify.app/'>
          <Image
            src={profilImg}
            alt='zdjęcie profilowe, przejście do strony głównej portfolio'
            height='100%'
            width='100%'
          />
        </a>
      </ImgDiv>

      <Profile>
        <Title>aleksandra szczur</Title>
        <Italics>Hello! My name is Aleksandra.</Italics>
        <Italics>
          I am currently learning how to be a Front-End Developer. I have
          majored in cultural studies and tourism and my work experience is
          related to administration and client service. I am well organised, can
          easily find myself in new situations and have positive attitude. My
          goal is to become advanced in JavaScript and React and go even
          further.
        </Italics>
      </Profile>
      <nav>
        <NavMenu>
          <NavItem>
            <Link href='https://www.facebook.com/olaszczur4' target='_blank'>
              <BsFacebook />
            </Link>
          </NavItem>
          <NavItem>
            <Link href='https://www.instagram.com/nikara4' target='_blank'>
              <BsInstagram />
            </Link>
          </NavItem>
          <NavItem>
            <Link href='https://github.com/Nikara4' target='_blank'>
              <BsGithub />
            </Link>
          </NavItem>
          <NavItem>
            <Link
              href='https://www.linkedin.com/in/aleksandra-szczur'
              target='_blank'
            >
              <BsLinkedin />
            </Link>
          </NavItem>
        </NavMenu>
      </nav>
    </HeaderBackground>
  );
};

export default Header;
