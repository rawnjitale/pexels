import { useState } from 'react';
import { MdOutlineImageSearch } from "react-icons/md";
import { Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import logo from '../public/logo.png';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react';
import Home from './Home';

function App() {
  const [q, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const totalPages = 10;

  const download = (imageUrl) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'image.jpg';
    link.click();
  };

  const handlePage = async (e) => {
    const selectedPage = parseInt(e.target.innerText);
    setPage(selectedPage);

    const apiKey = '9MhpsPWQhRGgfpJ7BDvc9Uy3glqGwJwiQe0vWtGn4s0a2OP6OOktDtk0';
    const query = q; // Replace with your desired search query

    try {
      const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&page=${selectedPage}`, {
        headers: {
          Authorization: apiKey
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch images from Pexels API');
      }

      const data = await response.json();
      setImages(data.photos);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiKey = '9MhpsPWQhRGgfpJ7BDvc9Uy3glqGwJwiQe0vWtGn4s0a2OP6OOktDtk0';
    const query = q; // Replace with your desired search query

    try {
      const response = await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
        headers: {
          Authorization: apiKey
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch images from Pexels API');
      }

      const data = await response.json();
      console.log(data);
      setImages(data.photos);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <nav className=' static flex items-center justify-between bg-sky-50 px-4 py-2 md:px-8'>
        <div className='flex md:hidden px-0 '><img src={logo} alt='logo' width={50} height={50}/></div>
        <div className="hidden md:block text-2xl font-bold text-gray-800">Pikchur</div>
        <form onSubmit={handleSubmit} className="bg-gray-300 p-2 flex items-center rounded-lg ">
          <input className='bg-gray-300 outline-none p-1 input sm:w-[100vw] md:w-[480px] ' type="text" placeholder="Search Picture " onChange={(e) => { setQuery(e.target.value) }} />
          <button onClick={handleSubmit} className="px-2"> <MdOutlineImageSearch /></button>
        </form>
      </nav>
      {images.length === 0?<Home/>:<><div className='mx-auto flex justify-center text-gray-600 items-center'>Total Items: {images.length}</div>
      <div className="flex justify-center items-center flex-wrap">
        {images.length === 0 && <div className='text-center text-2xl'>No Images Found</div>}
        {images && images.map((image) => (
          <div key={image.id} className="sm:w-[300px] sm:h-[300px] flex flex-col md:w-[600px] md:h-[600px] my-3 text-center mx-auto p-0">
            <img src={image.src.medium} alt="" className="rounded-md w-full h-full" />
            <div className=' flex absolute'>

                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon/> } className='my-1'>
                    <span className='bg-green-600 text-white p-2 my-2 rounded-lg'>Download</span>
                  </MenuButton>
                  <MenuList className='bg-white m-2 p-4 rounded-md'>
                    
                    <MenuItem onClick={download}>Download</MenuItem>
                    <MenuItem>Share</MenuItem>
                  </MenuList>
                </Menu>
              
            </div>
          </div>
        ))}
      </div></>}
      
    </>
  );
}

export default App