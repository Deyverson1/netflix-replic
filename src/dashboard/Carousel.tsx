import { useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import GetStartedInput from '../components/GetStarted';
import '../styles/css/style.css'

export default function CarouselDashboard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideChange = (index: number) => {
    if (index - 2 === -1) {
      setCurrentSlide(2)
    } else if (index - 2 === -2) {
      setCurrentSlide(1)
    } else if (index - 2 === 0) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(Math.abs(index - 2))
    }
    // console.log((index - 2))
  };

  const responsive = {
    default: {
      breakpoint: { max: 4000, min: 1 },
      items: 1
    }
  };

  const backgrounds = [
    'https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/19824ecf-794c-44aa-ae8a-d987a8feee3e/CO-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg',
    'https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABQ_e4eijzlYYEcteFvJlfOu-1HXsGM6HoXr2ZrlGL0_hDFLhfTCgYwrN8m557iDaMIFHY-Ym_ualbJBciFw8UctwXrq8IIU3Mvlp.webp?r=1e5',
    'https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABTQFHTx6huB9WmwuzkyAWnXRMp_kgLcgqSuVW7sYwEM6I7H14dTW3I_Mi2GyNSMFjBV4Dp2ltjvwO7QVtFwVH3J1YD3PjZ9DSzxj.webp?r=da9',
    'https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/19824ecf-794c-44aa-ae8a-d987a8feee3e/CO-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg',
  ];

  return (
    <div className='w-full h-screen'>
      <section className='cabecera-fondo'></section>
      <div
        className='z-50 flex flex-col items-center justify-center w-full h-full bg-center bg-cover '
        style={{ backgroundImage: `url(${backgrounds[currentSlide]})`, aspectRatio: '16/9' }}>
        <Carousel
          className='flex justify-start w-full px-8 md:px-40'
          arrows={true}
          responsive={responsive}
          draggable={true}
          swipeable={true}
          autoPlay={false}
          autoPlaySpeed={3000}
          infinite={true}
          beforeChange={handleSlideChange}>
            
          <div id="slide1" className='w-10/12 pt-64 md:w-5/12 md:pt-52'>
            <h1 className='w-full text-3xl font-bold md:text-5xl'>Unlimited movies, TV shows, and more</h1>
            <h2 className='pt-4 text-lg font-semibold'>Starts at COP 16,900. Cancel anytime.</h2>
            <GetStartedInput />
          </div>

          <div id="slide2" className='flex flex-col w-10/12 md:w-5/12 pt-36 gap-y-3'>
            <button className='px-3 py-2 text-base font-semibold bg-black rounded-full w-fit bg-opacity-45'>🔥 Trending now</button>
            <img src="https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/S4oi7EPZbv2UEPaukW54OORa0S8/AAAABWMKOE-FSQ7OtcO7lOVOdMJrLmmadxS4J_gCD24uv9rs3XulHZtKh5TEmKE0aRPgwcDcSqJriAfhdIj6x3gtMUcBGwGq3meu1QQ.webp?r=de5" className='w-6/12' alt="" />
            <section>
              <div className='px-2 py-1 text-sm rounded-md bg-neutral-700 w-fit'>2024</div>
            </section>
            <h2 className='md:pb-5'>A young boy known as the Avatar must master the four elemental powers to save a world at war — and fight a ruthless enemy bent on stopping him.
            </h2>
            <GetStartedInput />
          </div>

          <div id="slide3" className='flex flex-col w-10/12 md:w-5/12 pt-44 gap-y-3'>
            <button className='px-3 py-2 text-base font-semibold bg-black rounded-full w-fit bg-opacity-45'>🔥 Trending now</button>
            <img src="https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/S4oi7EPZbv2UEPaukW54OORa0S8/AAAABbTtoL0ZQcYxosgpe139n9LQDdKnECWFE7AWYbfZBveNAyEPpcvzb_wqqm50prqpah1FT3yV5lBZ_6Z0MckcwDtLBS5RFVeLDQ.webp?r=a51" className='w-6/12' alt="" />
            <section>
              <div className='px-2 py-1 text-sm text-gray-200 rounded-md bg-neutral-700 w-fit'>2024</div>
            </section>
            <h2 className='pb-5'>Nick and Vanessa Lachey host this social experiment where single men and women look for love and get engaged, all before meeting in person.
            </h2>
            <GetStartedInput />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
