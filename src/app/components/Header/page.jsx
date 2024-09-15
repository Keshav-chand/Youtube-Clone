"use client"; 
import Image from 'next/image';
import './style.css';
import Logo from '../../../assests/images/logo.png';
import { IoMdMenu } from "react-icons/io";
import Button from '@mui/material/Button';
import Link from 'next/link';
import Search from './search';
import { FaRegBell } from "react-icons/fa";
import { Context } from '@/AppContent/context';
import { useContext, useState } from 'react';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const context = useContext(Context);

  const toggleSidebar = () => {
    context.setToggle(!context.toggle);  // Correct context.toggle state usage
  };

  return (
   <header>
    <div className='container-fluid'>
      <div className='row'>
      {/* part 1 start here */}
        <div className='col-sm-3 part1 d-flex align-items-center part1'>
          <Button className='button rounded-circle d-flex align-items-center justify-content-center' onClick={toggleSidebar}>
            <IoMdMenu className='text-white' />
          </Button>
          <Link href="/" className='mx-2 logo'><Image src={Logo} alt='logo' /></Link>
        </div>
        {/* part 1 ends here */}  

        {/* part 2 start here */}
        <div className='col-sm-6 part2 d-flex align-items-center'>
          <Search />
        </div>
        {/* part 2 ends here */}

        {/* part 3 start here */}
        <div className='col-sm-3 part3 d-flex align-items-center justify-content-end'>
          <Button className='button rounded-circle d-flex align-items-center justify-content-center mx-3'>
            <FaRegBell className='text-white' />
          </Button>
          <span className='rounded-circle overflow-hidden cursor'>
            <img src='https://yt3.ggpht.com/yti/ANjgQV93ujQhNqzXfwKvGgKNFdmWZ18jhOxiPPwo1mSFdtoQ9-M=s88-c-k-c0x00ffffff-no-rj' alt='profile image'/>
          </span>
        </div>
        {/* part 3 ends here */}
      </div>
    </div>
   </header>
  )
}

export default Header;
