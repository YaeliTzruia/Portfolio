import { Flex } from "@chakra-ui/react";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react"
import { useSwiper } from 'swiper/react';
import "../styles/style.css"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/bundle'

import Tom from "../assets/tom.png"
import Isabella from "../assets/isabella.jpeg"
import TomLeviRecomendation from "../assets/Yael letter.pdf"

import AppTestimonial from "../components/AppTestimonial";
import AppHeader from "../components/AppHeader";
import AppLink from "../components/AppLink";
import { colors } from "../styles/colors";


export default function Testimonials() {

    const swiper = useSwiper();
    // const randomId = Math.floor(Math.random() * 100)


    const recomends = [
        { id: 44, src: Tom, alt: "Tom CEO Sue App", text: 'My name is Tom Lavi and proud to offer my recommendation of Yael Tzruia to whom I have personally known. Yael worked as a front-end developer intern at my company – SueApp LTD. A legal-tech data-driven smart-application for small claims filing. Yael focused on building our website from scratch, including form building and responsive design. During recent months with Yael, I have experienced an individual who works hard, and carries herself in a polite, respectable manner. In addition, Yael is a talented individual with innate capabilities who has always presented herself with levelheadedness and grace. Please do not hesitate to contact me if you should require any further information.', name: 'Tom Lavi', title: 'CEO - SueApp', downloadFile: true, download: "Recomendation Tom Lavi for Yael Tzruia", href: TomLeviRecomendation },
        { id: 90, src: Isabella, alt: "Isabella Lindblom", text: 'I had the pleasure to work with Yael at Talentsoft, where we both worked as Sales Development Representatives for the Nordic market. Yael showed from the start a strong engagement and efficiency towards her work and the company, and learned very fast thanks to her curiosity and skill to work independently. Her presence was very much appreciated at the office by the colleagues, as she is a team player who makes sure to get to know everyone. With her social and analytical skills, she created a very pleasant atmosphere at the office. I warmly want to recommend Yael, and I’m sure she’ll bring good vibes, professionalism and value to her future workplace.', name: 'Isabella Lindblom', title: 'Demand Generation & Digital Marketing At Pentera', downloadFile: false }
    ]

    return (

        <Flex w={["90%", "86%", "75%", "60%"]} justifyContent="center" height={["100vh", "100vh", "68vh", "100%"]}
            position="absolute" flexDir="column" display="column" top={["303rem", "288rem", "225rem", "245rem"]} id="testimonials">
            <Flex marginTop="2rem" marginBottom={["2rem", "2rem", "5rem", "5rem"]} flexDir="column" textAlign="center">
                <AppHeader marginBottom="0.5rem" color={colors.light} size="10px" text="Review Testimonials" type="h5" />
                <AppHeader color={colors.primary} text="Recomendations" type="h2" />
            </Flex>
            <Flex justifyContent="center">

                <Swiper
                    className="swiper-pointer-events"
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    transition="all 600ms ease"
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}

                >
                    <Flex width={["98%", "98%", "70%", "60%"]} flexDir="column">
                        {recomends.map((data) =>
                            <SwiperSlide key={data.id} className="slider"  >
                                <Flex onClick={() => swiper.slideNext()} gap="1.5rem" alignItems="center" backgroundColor={colors.backgroundVariant} height={["43rem", "40rem", "30rem", "28rem"]} textAlign="center" padding="1.5rem" borderRadius="1rem" userSelect="none" flexDir="column">
                                    <AppTestimonial key={data.id} alt={data.alt} src={data.src} text={data.text} name={data.name} title={data.title} />
                                    {data.downloadFile ? <AppLink paddingX="0.6rem" paddingY="0.6rem" fontSize="12px" color={colors.primary} backgroundColor={colors.background} hoverColor={colors.background} backHoverColor={colors.white} text="Download Recomendation" href={data.href} download={data.download} /> : null}

                                </Flex>
                            </SwiperSlide>
                        )}
                    </Flex>
                </Swiper>


            </Flex>
        </Flex>


    )
}