import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Newnavbar from "../Components/Newnavbar/Newnavbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Landing.css";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Image,
  Heading,
  Box,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";

function Landing() {
  let [data, setData] = useState([]);
  console.log("data", data);
  const fetchData = () => {
    return axios.get(`http://localhost:3001/data`);
  };
  useEffect(() => {
    fetchData()
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Newnavbar />

      <div className="top_Ad_section">
        <div className="Ad_swiper-section">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            className="swiper-ad"
          >
            <SwiperSlide className="swiper_slide_1">
              <Image src="https://onemg.gumlet.io/3a5d9aa3-4b44-4f92-affe-2261cfa288fd_1661248108.jpg?w=911&h=200&format=auto"></Image>
            </SwiperSlide>
            <SwiperSlide className="swiper_slide_1">
              <Image src="https://onemg.gumlet.io/a_ignore,w_911,h_200,c_fit,q_auto,f_auto/a7v2ipno4azmdu6cnjuu.png"></Image>
            </SwiperSlide>
            <SwiperSlide className="swiper_slide_1">
              <Image src="https://onemg.gumlet.io/a_ignore,w_911,h_200,c_fit,q_auto,f_auto/edq9awox0cpywojoubhb.png"></Image>
            </SwiperSlide>
            <SwiperSlide className="swiper_slide_1">
              <Image src="https://onemg.gumlet.io/a_ignore,w_911,h_200,c_fit,q_auto,f_auto/kcdcsb5yrkpxok5bpm8y.png"></Image>
            </SwiperSlide>
          </Swiper>
        </div>
        <Image
          src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/rohm7mk20fc4mairgjg0.png"
          width={"auto"}
        ></Image>
      </div>
      <div>
        <Heading
          color={"#808080"}
          className="Heading_below_ad"
          fontSize={"2xl"}
          marginTop="5"
        >
          TATA 1mg India's leading pharmacy and HealthCare Platform
        </Heading>
      </div>
      <div className="ad_below_heading">
        <Image
          htmlWidth="100%"
          src="https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png"
        ></Image>
      </div>
      <div style={{ width: "80%", margin: "auto" }}>
        <p className="Featured_Brands">Shop by Health Concerns</p>
        <div className="Featured_Brands_swiper">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={10}
            breakpoints={{
              // when window width is >= 640px
              0: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              450: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            }}
            navigation
            Autoplay
            pagination={{ clickable: true }}
            //scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            className="swiper-ad"
          >
            <SwiperSlide className="swiper_slide_2">
              <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/hgzkyio2rphkn6wjif94.png"></Image>
              <Text>Diabetes Care</Text>
            </SwiperSlide>
            <SwiperSlide className="swiper_slide_2">
              <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/zo7sc14nqpt6ebeojkvr.png"></Image>
              <Text>Cardiac Care</Text>
            </SwiperSlide>
            <SwiperSlide className="swiper_slide_2">
              <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ttagxlnxulsvkyv9fetr.png"></Image>
              <Text>Stomach Care</Text>
            </SwiperSlide>
            <SwiperSlide className="swiper_slide_2">
              <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ijgn7fhyq8ig0welmrcp.png"></Image>
              <Text>Liver Care</Text>
            </SwiperSlide>
            <SwiperSlide className="swiper_slide_2">
              <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/zytsldnf5mvb0u19ydep.png"></Image>
              <Text>Kidney Care</Text>
            </SwiperSlide>
            <SwiperSlide className="swiper_slide_2">
              <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/hn5bpr1ci2do5kdub51v.png"></Image>
              <Text>Respiratory Care</Text>
            </SwiperSlide>
            <SwiperSlide className="swiper_slide_2">
              <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/hr9vysj9cy0sfjs3mpg0.png"></Image>
              <Text>Pain relief</Text>
            </SwiperSlide>
            <SwiperSlide className="swiper_slide_2">
              <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/t0ehbhfrkughfxoygvs2.png"></Image>
              <Text>Eye Care</Text>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div style={{ width: "80%", margin: "auto" }}>
        <p className="Featured_Brands">Featured Brands</p>

        <div className="Featured_Brands_swiper">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={10}
            breakpoints={{
              // when window width is >= 640px
              0: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              450: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            }}
            navigation={{ height: "20px" }}
            Autoplay
            pagination={{ clickable: true }}
            //scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            className="swiper-ad"
          >
            <SwiperSlide className="swiper_slide_2">
              <Image src="data:image/png;base64,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"></Image>
              <Text>Tata 1mg</Text>
            </SwiperSlide>
            <SwiperSlide className="swiper_slide_2">
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXHhpeEmqfBs4f5THCLl2pUgoNcDxPGw1fxXmEAmvORQ&s"></Image>
              <Text>Mom & World</Text>
            </SwiperSlide>
            <SwiperSlide className="swiper_slide_2">
              <Image src="data:image/png;base64,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"></Image>
              <Text>Muscle XP</Text>
            </SwiperSlide>
            <SwiperSlide className="swiper_slide_2">
              <Image src="data:image/jpeg;base64,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"></Image>
              <Text>Horlicks</Text>
            </SwiperSlide>
            <SwiperSlide className="swiper_slide_2">
              <Image src="data:image/png;base64,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"></Image>
              <Text>Jiva</Text>
            </SwiperSlide>
            <SwiperSlide className="swiper_slide_2">
              <Image src="data:image/png;base64,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"></Image>
              <Text>Optimum Nutrition</Text>
            </SwiperSlide>
            <SwiperSlide className="swiper_slide_2">
              <Image src="data:image/jpeg;base64,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"></Image>
              <Text>Ensure</Text>
            </SwiperSlide>
            <SwiperSlide className="swiper_slide_2">
              <Image src="data:image/jpeg;base64,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"></Image>
              <Text>Organic India</Text>
            </SwiperSlide>
            <SwiperSlide className="swiper_slide_2">
              <Image src="data:image/png;base64,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"></Image>
              <Text>Health Vit</Text>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div style={{ width: "80%", margin: "auto" }}>
        <p className="Featured_Brands">Top Trending Products</p>
        <div className="Featured_Brands_swiper">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={10}
            breakpoints={{
              // when window width is >= 640px
              450: {
                width: 450,
                slidesPerView: 2,
              },
              640: {
                width: 640,
                slidesPerView: 3,
              },
              // when window width is >= 768px
              768: {
                width: 1068,
                slidesPerView: 4,
              },
            }}
            navigation
            Autoplay
            pagination={{ clickable: true }}
            //scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            className="swiper-ads"
          >
            {data.slice(11, 25).map((elem) => (
              <SwiperSlide
                className="swiper-slide-3"
                // onClick={() => handleDetails(elem._id)}
              >
                <Link to={`/products/${elem._id}`}>
                  <Image src={elem.imageUrl}></Image>
                  <div className="Healthvit_heading">{elem.productName}</div>
                  <Text fontSize="12px" color={"#757575"}>
                    {" "}
                    {elem.shortDesc}
                  </Text>
                  <div className="card_span_star">
                    <div className="card_star_rating">
                      {elem.ratings}
                      <AiFillStar color="white" />
                    </div>
                    7
                  </div>
                  <div className="card_cuttoff">
                    <Text color={"#757575"} marginRight="2px">
                      MRP
                    </Text>
                    <span>{elem.strikedPrice}</span>
                  </div>
                  <div>
                    <Heading fontSize={"16px"} marginLeft={"10px"}>
                      {elem.price}
                    </Heading>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div style={{ width: "80%", margin: "auto" }}>
        <p className="Featured_Brands">Popular Categories</p>
        <div className="Featured_Brands_swiper">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={10}
            breakpoints={{
              // when window width is >= 640px
              0: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              450: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            }}
            navigation
            Autoplay
            pagination={{ clickable: true }}
            //scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            className="swiper-ad"
          >
            <SwiperSlide className="swiper_slide_2">
              <Image
                borderRadius="full"
                src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/x2z8u1osqutmxvx56hlw.png"
              ></Image>
              <Text>Vitamin & Supplements</Text>
            </SwiperSlide>
            <SwiperSlide className="swiper_slide_2">
              <Image
                borderRadius="full"
                src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/x2z8u1osqutmxvx56hlw.png"
              ></Image>
              <Text>Ayurveda</Text>
            </SwiperSlide>
            <SwiperSlide className="swiper_slide_2">
              <Image
                borderRadius="full"
                src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/fbigjgxv2wquqqb3galn.png"
              ></Image>
              <Text>Healthcare Devices</Text>
            </SwiperSlide>
            <SwiperSlide className="swiper_slide_2">
              <Image
                borderRadius="full"
                src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/uq1gwxslqqrxxwv6zi6j.jpg"
              ></Image>
              <Text>Nutrition Drinks</Text>
            </SwiperSlide>
            <SwiperSlide className="swiper_slide_2">
              <Image
                borderRadius="full"
                src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/p1blaka183nc1zlil8tq.png"
              ></Image>
              <Text>Sexual Wellness</Text>
            </SwiperSlide>
            <SwiperSlide className="swiper_slide_2">
              <Image
                borderRadius="full"
                src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/h8qo5dk91lliwwihbwnf.png"
              ></Image>
              <Text>Diabetes Care</Text>
            </SwiperSlide>
            <SwiperSlide className="swiper_slide_2">
              <Image
                borderRadius="full"
                src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/bkhusfgfiu9qedowph2i.png"
              ></Image>
              <Text>Skin Care</Text>
            </SwiperSlide>
            <SwiperSlide className="swiper_slide_2">
              <Image
                borderRadius="full"
                src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/au6x9ngzsixzfzae9pyv.png"
              ></Image>
              <Text>Pain relief</Text>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div style={{ width: "80%", margin: "auto" }}>
        <p className="Featured_Brands">Top Sellers From Healthvit</p>
        <div className="Featured_Brands_swiper">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={10}
            breakpoints={{
              // when window width is >= 640px
              450: {
                width: 450,
                slidesPerView: 2,
              },
              640: {
                width: 640,
                slidesPerView: 3,
              },
              // when window width is >= 768px
              768: {
                width: 1068,
                slidesPerView: 4,
              },
            }}
            navigation
            Autoplay
            pagination={{ clickable: true }}
            //scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            className="swiper-ads"
          >
            {data.slice(0, 10).map((elem) => (
              <SwiperSlide
                className="swiper-slide-3"
                // onClick={() => handleDetails(elem._id)}
              >
                <Link to={`/products/${elem._id}`}>
                  <Image src={elem.imageUrl}></Image>
                  <div className="Healthvit_heading">{elem.productName}</div>
                  <Text fontSize="12px" color={"#757575"}>
                    {" "}
                    {elem.shortDesc}
                  </Text>
                  <div className="card_span_star">
                    <div className="card_star_rating">
                      {elem.ratings}
                      <AiFillStar color="white" />
                    </div>
                    7
                  </div>
                  <div className="card_cuttoff">
                    <Text color={"#757575"} marginRight="2px">
                      MRP
                    </Text>
                    <span>{elem.strikedPrice}</span>
                  </div>
                  <div>
                    <Heading fontSize={"16px"} marginLeft={"10px"}>
                      {elem.price}
                    </Heading>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Accordion
        defaultIndex={[0]}
        allowMultiple
        width={"90%"}
        margin={"auto"}
        padding="10px"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading fontSize={"18px"}>
                  Stay Healthy with Tata 1mg: Your Favourite Online Pharmacy and
                  Healthcare Platform
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Heading fontSize={"16px"} marginBottom={"20px"}>
              We Bring Care to Health.
            </Heading>
            <Text>
              Tata 1mg is India's leading digital healthcare platform. From
              doctor consultations on chat to online pharmacy and lab tests at
              home: we have it all covered for you. Having delivered over 25
              million orders in 1000+ cities till date, we are on a mission to
              bring "care" to "health" to give you a flawless healthcare
              experience.
            </Text>
            <br />
            <Heading fontSize={"16px"}>
              Tata 1mg: Your Favourite Online Pharmacy!
            </Heading>
            <br />
            <Text>
              Tata 1mg is India's leading online chemist with over 2 lakh
              medicines available at the best prices. We are your one-stop
              destination for other healthcare products as well, such as over
              the counter pharmaceuticals, healthcare devices and homeopathy and
              ayurveda medicines.
            </Text>
            <br />
            <Text>
              With Tata 1mg, you can buy medicines online and get them delivered
              at your doorstep anywhere in India! But, is ordering medicines
              online a difficult process? Not at all! Simply search for the
              products you want to buy, add to cart and checkout. Now all you
              need to do is sit back as we get your order delivered to you.
            </Text>
            <br />
            <Text>
              In case you need assistance, just give us a call and we will help
              you complete your order.
            </Text>
            <br />
            <Text>
              Don't want to go through the hassle of adding each medicine
              separately? You can simply upload your prescription and we will
              place your order for you. And there is more! At Tata 1mg, you can
              buy health products and medicines online at best discounts.
            </Text>
            <br />
            <Text>
              Now, isn't that easy? Why go all the way to the medicine store and
              wait in line, when you have Tata 1mg Pharmacy at your service.
            </Text>
            <br />
            <Heading fontSize={"16px"}>The Feathers in Our Cap</Heading>
            <br />
            <Text>
              At Tata 1mg, our goal is to make healthcare understandable,
              accessible and affordable in India. We set out on our journey in
              2015, and have come a long way since then. Along the way, we have
              been conferred with prestigious titles like
            </Text>
            <span>
              BML Munjal Award for 'Business Excellence through Learning and
              Development', Best Online Pharmacy in India Award
            </span>
            <br></br>
            <br></br>
            <Heading fontSize={"16px"}>The Services We Offer</Heading>
            <br />
            <Text>
              Tata 1mg is India's leading digital healthcare platform, where you
              can buy medicines online with discount. Buy medicine online in
              Delhi, Mumbai, Bangalore, Hyderabad, Pune, Gurgaon, Noida,
              Kolkata, Chennai, Ahmedabad, Lucknow and around a 1000 more
              cities. Besides delivering your online medicine order at your
              doorstep, we provide accurate, authoritative & trustworthy
              information on medicines and help people use their medicines
              effectively and safely.
            </Text>
            <br />
            <Text>
              We also facilitate lab tests at home. You can avail over 2,000
              tests and get tested by 120+ top and verified labs at the best
              prices. Need to consult a doctor? On our platform, you can talk to
              over 20 kinds of specialists in just a few clicks.
            </Text>
            <br />
            <Text>
              Customer centricity is the core of our values. Our team of highly
              trained and experienced doctors, phlebotomists and pharmacists
              looks into each order to give you a fulfilling experience.
            </Text>
            <br />
            <Text>
              We’ve made healthcare accessible to millions by giving them
              quality care at affordable prices. Customer centricity is the core
              of our values. Our team of highly trained and experienced doctors,
              phlebotomists and pharmacists looks into each order to give you a
              fulfilling experience.
            </Text>
            <br />
            <Text>
              Visit our online medical store now, and avail online medicine
              purchase at a discount.
            </Text>
            <Text>Stay Healthy!</Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Box>
        <Heading textAlign={"center"}>
          India Largest Healthcare Platform
        </Heading>
        <Box
          padding={"2rem 0px"}
          display="flex"
          justifyContent={"space-around"}
          textAlign="center"
        >
          <Box fontSize={"1.7rem"} fontWeight={"bold"}>
            160+ <br />
            <Text fontWeight={"400"} fontSize="1.2rem">
              Visitors
            </Text>
          </Box>
          <Box fontSize={"1.7rem"} fontWeight={"bold"}>
            27m+ <br />
            <Text fontWeight={"400"} fontSize="1.2rem">
              Visitors
            </Text>
          </Box>
          <Box fontSize={"1.7rem"} fontWeight={"bold"}>
            1800+ <br />
            <Text fontWeight={"400"} fontSize="1.2rem">
              Visitors
            </Text>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}

export default Landing;
