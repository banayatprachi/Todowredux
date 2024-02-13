
import { faFacebook, faLinkedin, faGoogle, faDiscord, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'



const SkillProgressBar = ({ label, percentage }) => {
  return (
    <div className="mb-2">
      <p className="text-black font-medium">{label}</p>
      <div className="flex justify-between items-center">
        <p className="text-white font-medium">{percentage}%</p>
        <div className="bg-white h-2 rounded w-full">
          <div className="bg-black h-full rounded" style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
    </div>
  );
};

const App = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrolled = scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="root">
    {/* Header */}
    <header className={`fixed top-0 w-full ${isScrolled ? 'bg-white py-6' : 'bg-transparent py-4'}`}>

    <div className="flex flex-col md:flex-row md:justify-around md:mb-4 w-full pl-5 fixed top-0 py-2" style={{ backgroundColor: 'transparent', zIndex: 1000 }}>
      <div className="font-medium mb-4 md:text-xl md:mb-0">Stimulus</div>
      <div className="md:space-x-6 space-x-2 hidden md:flex">
        <a href="/">HOME</a>
        <a href="/">ABOUT ME</a>
        <a href="/">EXPERIENCE</a>
        <a href="/">TESTIMONIAL</a>
        <a href="/">CONTACT</a>
      </div>
      <div className="md:hidden flex flex-col items-end absolute top-2 right-4">
        <button><i className="fa-solid fa-bars fa-xl"></i></button>
      </div>
    </div>
    </header>

    {/* welcome */}
    <div className="flex items-center bg-orange-50 flex-col-reverse md:flex-row mx-4 pt-10 lg:pt-0">
  <div className="flex-1 pr-4">
    <img src="one.jpg" alt="" className="w-full h-full object-cover" style={{ minHeight: '380px' }} />
  </div>
  <div className="flex-1 pl-4 p-4 space-y-4">
    <span className="text-sm text-gray-500">WELCOME TO MY WEBSITE</span>
    <h2 className="text-xl md:text-2xl lg:text-5xl font-light">
      Hello, I am <span className="font-semibold">Stimulus</span> currently based in New York City.
    </h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quam repellat quaerat libero iusto dicta tempora! Aperiam eius repellendus voluptatum vitae nulla rerum maiores dignissimos sunt! Sit, fugit iure libero minus culpa, illum voluptatem amet recusandae iste, maiores necessitatibus rem.
    </p>
    <button className="border-2 border-black py-1 px-2 rounded-xl font-semibold max-w-28">Get Started</button>
  </div>
</div>


     {/* skills */}
     <div className="flex flex-col md:flex-row items-center mx-4">
          <div className="w-full md:w-2/4 md:mr-4 space-y-5 pl-4">
            <h1 className="text-3xl font-base">Donec Autor</h1>
            <span className="text-yellow-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quod! Consequatur hic earum sequi tempore animi error repudiandae voluptates nihil fuga, nulla laudantium odit esse consequuntur asperiores adipisci? Quibusdam illum quia minima accusamus earum, labore consectetur a dolore autem veniam iste error voluptatem ullam repellat, fugit laboriosam sunt itaque explicabo?
            </p>
          </div>
          <div className="w-full md:w-2/4 bg-yellow-600">
            <div className="flex flex-col md:flex-row items-center">
              <img src="two.jpg" alt="" className="w-full md:w-2/4" style={{ minHeight: '350px' }} />
              <div className="md:ml-5 md:my-0 md:mr-2 px-4 md:px-0">
                <h1 className="text-2xl font-semibold text-white">My Skills</h1>
                <p className="text-white">HTML, CSS, JavaScript, React JS, Tailwind CSS</p>
                <SkillProgressBar label="Frontend Design" percentage={90} />
        <SkillProgressBar label="Backend Design" percentage={70} />
        <SkillProgressBar label="HTML & CSS" percentage={80} />
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white text-center mx-4">
          <div className="bg-yellow-600 p-4 space-y-5 py-10">
           {/* <FontAwesomeIcon icon={faTv} className="fa-2xl mb-10 mt-5" /> */}

            <h1 className="text-xl font-medium">Interface Design</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt sequi labore porro, error dicta nulla ex eveniet sit distinctio.</p>
          </div>
          <div className="bg-red-500 p-4 space-y-5 py-10">
          {/* <FontAwesomeIcon icon={faTelegramPlane} className="fa-2xl mb-10 mt-5" /> */}

            <h1 className="text-xl font-medium">Media Strategy</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt sequi labore porro, error dicta nulla ex eveniet sit distinctio.</p>
          </div>
          <div className="bg-black p-4 space-y-5 py-10">
            <i className="fa-solid fa-mobile-screen-button fa-2xl mb-10 mt-5"></i>
            <h1 className="text-xl font-medium">Mobile App</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt sequi labore porro, error dicta nulla ex eveniet sit distinctio.</p>
          </div>
          <div className="text-black p-4 space-y-5 py-10">
            <i className="fa-brands fa-html5 fa-2xl mb-10 mt-5"></i>
            <h1 className="text-xl font-medium">Coding</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt sequi labore porro, error dicta nulla ex eveniet sit distinctio.</p>
          </div>
        </div>

        {/* Experiences  */}
        <div className="flex flex-col md:flex-row mx-4 text-white">
          <div className="w-full md:w-1/2 flex">
            <img src="three.jpg" alt="" className="object-cover w-full h-full" style={{ maxHeight: '350px' }} />
          </div>
          <div className="w-full md:w-1/2 pt-10 pl-4 pr-1 bg-red-500 flex-1">
            <h1 className="md:text-2xl font-normal mb-3">My Experiences</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <h1 className="md:text-xl font-medium mt-5">Graphics Designer <span className="text-base text-black">2014 Jul-2015 Sep</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, explicabo.</p>
            <h1 className="md:text-xl font-medium mt-5">Web Designer <span className="text-base text-black">2015 Oct-2017 Jan</span></h1>
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, explicabo.</p>
          </div>
        </div>

                {/* Education*/}
                <div className="flex flex-col md:flex-row mx-4 text-white">
          <div className="w-full md:w-1/2 pt-10 pl-4 pr-1 bg-yellow-600 flex-1">
            <h1 className="md:text-2xl font-normal mb-3">My Education</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <h1 className="md:text-xl font-medium mt-6">Master in Design <span className="text-base text-black">2012 Jan - 2014 May</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, explicabo.</p>
            <h1 className="md:text-xl font-medium mt-6">Bachelor of Arts <span className="text-base text-black">2008 May - 2011 Dec</span></h1>
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, explicabo.</p>
          </div>
          <div className="w-full md:w-1/2 flex">
            <img src="four.jpg" alt="" className="object-cover w-full h-full" style={{ maxHeight: '350px' }} />
          </div>
        </div>


               {/* Testimonial Section */}
               <div className="mx-4 relative">
          <img src="five.jpg" alt="" className="w-full h-64 md:h-96 object-cover" />
          <div className="bg-black bg-opacity-50 p-4 md:p-8 lg:p-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
            <i className="fa-solid fa-star fa-2xl text-white mb-5"></i>
            <h1 className="text-white text-sm md:text-xl lg:text-2xl font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit deleniti iusto ratione quis! Cupiditate alias odit commodi sed! ad obcaecati soluta deleniti alias
            </h1>
            <p className="text-gray-300 mt-5 text-sm md:text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quam optio. Assumenda eveniet est maiores
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col md:flex-row items-center mx-4 bg-red-500 text-gray-200">
          <div className="w-full md:w-2/4 md:mr-4 space-y-5 pl-4">
            <h1 className=" md:text-3xl font-medium mt-10">Say Hello...</h1>
            <form>
              <label>Name<br /></label>
              <input type="text" name="name" className="bg-red-500 border-10 outline-none mb-5 w-full" style={{ borderBottom: '1px solid white' }} /><br />
              <label>Email:</label><br />
              <input type="text" name="name" className="bg-red-500 border-10 mb-5 outline-none w-full" style={{ borderBottom: '1px solid white' }} /><br />
              <label>Message:</label><br />
              <input type="text" name="name" className="bg-red-500 border-10 outline-none mt-20 w-full" style={{ borderBottom: '1px solid white' }} /><br />
              <button type="submit" className=" bg-gray-200 text-black py-1 px-10 mt-10 rounded-xl mb-10">Send</button>
            </form>
          </div>
          <div className="w-full md:w-2/4 bg-black text-white">
            <div className="flex flex-col md:flex-row">
              <img src="six.jpg" alt="" className="w-full md:w-2/4" style={{ minHeight: '475px' }} />
              <div className="md:ml-10 my-5 md:my-0 md:mr-2 ml-4">
                <h1 className=" text-2xl mb-2 mt-14 ">Visit my office</h1>
                <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, mollitia.</p>
                <h1 className=" text-2xl mb-2">Contact</h1>
                <p><i className="fa-solid fa-phone mr-2"></i> 29283728022</p>
                <p className=" text-yellow-500 my-2"> <i className="fa-solid fa-envelope mr-2"></i> absd@gmail.com</p>
                <p className=" text-yellow-500"> <i className="fa-solid fa-globe mr-2"></i> company.co</p>
              </div>
            </div>
          </div>
        </div>

       {/*  Map Section*/}
        <div className="hidden md:flex items-center justify-center my-10 px-10">
          <img src="seven.png" alt="map" />
        </div>

        
        <div className="flex justify-center bg-gray-100 py-20 flex-col text-center">
          <p>Copyright @2024</p>
          <p className="text-yellow-600"> Qloron Technology</p>
          <div className="grid place-content-center grid-flow-col gap-4 mt-5">
          <FontAwesomeIcon icon={faFacebook} className="fa-lg" />
          <FontAwesomeIcon icon={faLinkedin} className="fa-lg" />
  <FontAwesomeIcon icon={faGoogle} className="fa-lg" />
  <FontAwesomeIcon icon={faDiscord} className="fa-lg" />
  <FontAwesomeIcon icon={faInstagram} className="fa-lg" />
          </div>
        </div>
      </div>
    
  );
};



export default App