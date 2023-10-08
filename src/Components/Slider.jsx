
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay, FreeMode, Scrollbar } from 'swiper/modules';


const Slider = () => {
    return (
        <div className='my-10 '>
            <h2 className='text-center text-5xl font-bold'>Our <span className='text-rose-800'>Customer</span> Reviews</h2>
            <div className='bg-gradient-to-r from-purple-400 to-lime-300 rounded-lg my-10 py-5 px-4'>
                <Swiper
                    slidesPerView={'1'}
                    // breakpoints={{
                    //     320: { slidesPerView: 1, spaceBetween: 80 },
                    //     480: { slidesPerView: 2, spaceBetween: 70 },
                    //     768: { slidesPerView: 2, spaceBetween: 50 },
                    //     1024: { slidesPerView: 3, spaceBetween: 150 },
                    // }}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 90 },
                        1024: { slidesPerView: 3, spaceBetween: 80 },
                    }}

                    // spaceBetween={50}
                    autoplay={true}
                    pagination={{
                        clickable: true,
                    }}
                    freeMode
                    centeredSlides
                    grabCursor
                    centeredSlidesBounds
                    modules={[Pagination, Autoplay, FreeMode, Scrollbar]}
                    className="mySwiper"
                >
                <SwiperSlide>
                    <div className="card bg-base-100 shadow-xl space-y-5 ">
                        <p className='text-lg font-medium px-4'>I had an incredible experience with their wedding event services! They transformed our vision into reality, and the attention to detail was astonishing. Our guests were enchanted by the beautiful decor, impeccable planning, and delicious food. It was a day we will cherish forever.</p>
                        <div className='flex  items-center gap-3'>
                            <img src="/src/assets/member1.png" alt="Shoes" className="rounded-full w-20" />
                            <h3 className='text-xl font-bold'>Md Shojib Hossain</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card bg-base-100 shadow-xl space-y-5 ">
                        <p className='text-lg font-medium px-4'>The birthday party services were a hit! From the captivating theme to the fantastic entertainment, our childs party was a blast. The planners creativity shone through, making it a memorable day for our little one and all the guests. Highly recommended for stress-free celebrations!</p>
                        <div className='flex  items-center gap-3'>
                            <img src="/src/assets/member2.png" alt="Shoes" className="rounded-full w-20" />
                            <h3 className='text-xl font-bold'>Mohsena Yeasmin</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card bg-base-100 shadow-xl space-y-5 ">
                        <p className='text-lg font-medium px-4'>Our anniversary was truly magical, thanks to their dedicated anniversary planners. They crafted an enchanting evening, from the romantic setting to the exquisite dining experience. Our hearts were full, and we will forever cherish the memories they helped us create.</p>
                        <div className='flex  items-center gap-3'>
                            <img src="/src/assets/member3.png" alt="Shoes" className="rounded-full w-20" />
                            <h3 className='text-xl font-bold'>Masum Billa</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card bg-base-100 shadow-xl space-y-5 ">
                        <p className='text-lg font-medium px-4'>Engagement party services exceeded our expectations! The venue was breathtaking, and the personalized touches were heartwarming. The event flowed seamlessly, and our guests were raving about the atmosphere. We felt truly celebrated on our special day!</p>
                        <div className='flex  items-center gap-3'>
                            <img src="/src/assets/member4.png" alt="Shoes" className="rounded-full w-20" />
                            <h3 className='text-xl font-bold'>Mst Asha Khatun</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card bg-base-100 shadow-xl space-y-5 ">
                        <p className='text-lg font-medium px-4'>Retirement party services made my transition to retirement so special. The event planner organized a touching farewell that celebrated my career. The attention to detail and heartfelt speeches made it an unforgettable experience. I felt honored and appreciated.</p>
                        <div className='flex  items-center gap-3'>
                            <img src="/src/assets/member1.png" alt="Shoes" className="rounded-full w-20" />
                            <h3 className='text-xl font-bold'>Niloy Das</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card bg-base-100 shadow-xl space-y-5 ">
                        <p className='text-lg font-medium px-4'>Our baby shower event was a delight! The planners expertise shone through in the adorable decorations and thoughtful games. The atmos phere was warm and welcoming, and the attention to detail was exceptional. We have not asked for a better celebration of our growing family.</p>
                        <div className='flex  items-center gap-3'>
                            <img src="/src/assets/member2.png" alt="Shoes" className="rounded-full w-20" />
                            <h3 className='text-xl font-bold'>Lucky Khatun</h3>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
        </div >
    );
};

export default Slider;
