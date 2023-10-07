import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const PhotoAlbum = () => {
    return (
        <div className="bg-gray-300 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
            <div className="h-60" data-aos="flip-down"><img className="h-full w-full" src="/src/assets/1.jpg" alt="" /></div>
            <div className="h-60" data-aos="flip-down"><img className="h-full w-full" src="/src/assets/3.jpg" alt="" /></div>
            <div className="h-60" data-aos="flip-down"><img className="h-full w-full" src="/src/assets/4.jpeg" alt="" /></div>
            <div className="h-60" data-aos="flip-down"><img className="h-full w-full" src="/src/assets/2.jpg" alt="" /></div>
            <div className="h-60" data-aos="flip-down"><img className="h-full w-full" src="/src/assets/5.jpg" alt="" /></div>
            <div className="h-60" data-aos="flip-down"><img className="h-full w-full" src="/src/assets/6.jpg" alt="" /></div>
            <div className="h-60" data-aos="flip-down"><img className="h-full w-full" src="/src/assets/7.jpg" alt="" /></div>
            <div className="h-60" data-aos="flip-down"><img className="h-full w-full" src="/src/assets/8.jpg" alt="" /></div>
            <div className="h-60" data-aos="flip-down"><img className="h-full w-full" src="/src/assets/9.jpg" alt="" /></div>
            <div className="h-60" data-aos="flip-down"><img className="h-full w-full" src="/src/assets/10.jpg" alt="" /></div>
            <div className="h-60" data-aos="flip-down"><img className="h-full w-full" src="/src/assets/11.jpg" alt="" /></div>
            <div className="h-60" data-aos="flip-down"><img className="h-full w-full" src="/src/assets/12.jpg" alt="" /></div>


            
        </div>
    );
};

export default PhotoAlbum;