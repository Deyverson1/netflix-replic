import 'react-multi-carousel/lib/styles.css';
import '../styles/css/netflix.css'
import Carousel from 'react-multi-carousel';
interface CarouselProps {
  content: any
}
export default function CarouselNetflix({ content }: CarouselProps) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  }
  return (
    <div className=''>
      <div className="carousel-netflix slide-container">
        <Carousel
          className=''
          arrows={true}
          responsive={responsive}
          draggable={true}
          swipeable={true}
          // showDots={true}
          // autoPlay={true}
          // autoPlaySpeed={3000}
          // centerMode={true}
          rewind={true}
          infinite={true}
          slidesToSlide={6}
        >
          {content.map((dato: any, index: number) => (
            <div className='flex px-0.5' key={index}>
              <img key={index} src={dato.image} alt={dato.alt} className='rounded-sm' />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}