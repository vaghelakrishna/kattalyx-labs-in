
// import { useRef } from "react";
 

// export default function SuccessCardSlider() {
//   const sliderRef = useRef(null);

//   const scroll = (direction) => {
//     if (!sliderRef.current) return;
//     sliderRef.current.scrollBy({
//       left: direction === "left" ? -320 : 320,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <>
//     {/* OUR SUCCESS */}
// <section className="max-w-7xl mx-auto px-6 py-20">

//   {/* Heading */}
//   <div className="mb-14">
//     <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
//       Our Success
//     </h2>
//     <p className="mt-3 text-slate-500 max-w-sm">
//       We are shaping the ecosystem that will drive the future of education.
//     </p>
//   </div>

//   {/* Cards */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

//     {/* Card 1 */}
//     <div
//       className="group bg-slate-50 rounded-2xl p-8
//       transition-all duration-300 ease-out
//       hover:bg-black hover:-translate-y-1
//       hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
//       cursor-pointer"
//     >
//       <h3 className="text-lg font-semibold text-slate-900 group-hover:text-white">
//         High Student Engagement
//       </h3>
//       <p className="mt-3 text-slate-500 group-hover:text-slate-300 leading-relaxed">
//         90%+ positive feedback with strong learning outcomes and repeat participation.
//       </p>
//     </div>

//     {/* Card 2 */}
//     <div
//       className="group bg-slate-50 rounded-2xl p-8
//       transition-all duration-300 ease-out
//       hover:bg-black hover:-translate-y-1
//       hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
//       cursor-pointer"
//     >
//       <h3 className="text-lg font-semibold text-slate-900 group-hover:text-white">
//         School Partnerships
//       </h3>
//       <p className="mt-3 text-slate-500 group-hover:text-slate-300 leading-relaxed">
//         Multiple schools confirmed repeat sessions and long-term collaboration.
//       </p>
//     </div>

//     {/* Card 3 */}
//     <div
//       className="group bg-slate-50 rounded-2xl p-8
//       transition-all duration-300 ease-out
//       hover:bg-black hover:-translate-y-1
//       hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
//       cursor-pointer"
//     >
//       <h3 className="text-lg font-semibold text-slate-900 group-hover:text-white">
//         Scalable Growth
//       </h3>
//       <p className="mt-3 text-slate-500 group-hover:text-slate-300 leading-relaxed">
//         Pilot programs validated into scalable, high-demand education solutions.
//       </p>
//     </div>

//   </div>
// </section>
// </>
//   );
// }


 
import styled from 'styled-components';
import image1 from "@/assets/loginslider1.avif";
import image2 from "@/assets/loginslider2.avif";
import image3 from "@/assets/loginslider3.avif";
const missionCards = [
  {
    image:image1,
    title: "High Student Engagement",
    desc: "90%+ positive feedback with strong learning outcomes and repeat participation.",
  },
  {
    image:image2,
    title: "School Partnerships",
    desc: "Multiple schools confirmed repeat sessions and long-term collaboration.",
  },
  {
    image: image3,
    title: "Scalable Growth",
    desc: "Pilot programs validated into scalable, high-demand education solutions.",
  },
];
const SuccessCardSection = () => {
  return (
    <Wrapper>
     <Container>
      <Header>
          <h2>Success Stories</h2>
          <span />
        </Header>
         <Grid>
      {missionCards.map((card, index) => (
        <Card key={index}>
           <div className="image">
        <img src={card.image} alt={card.title} />
      </div>

          <div className="content">
             <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        </Card>
      ))}
      </Grid>
     </Container>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 4rem 1.5rem;
  background: #0f0f0f;

  @media (min-width: 768px) {
    padding: 6rem 1.5rem;
  }
`;


const Container = styled.div`
  max-width: 80rem; /* max-w-7xl */
  margin: 0 auto;
`;
const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;

  h2 {
    font-size: 32px;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: #ffffff;
  }

  span {
    display: block;
    width: 50px;
    height: 3px;
    margin: 14px auto 0;
    background: #1d4ed8;
    border-radius: 999px;
  }

  @media (min-width: 768px) {
    margin-bottom: 3.5rem;

    h2 {
      font-size: 56px;
    }
  }
`;


const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
`;


const Card = styled.div`
  position: relative;
  height: 260px;
  background: #151515;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.45);
  }

  .image {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none; /* ✅ IMPORTANT FIX */

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.35);
    }
  }

  .content {
    position: relative;
    z-index: 2; /* ✅ ABOVE IMAGE */
    height: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    backdrop-filter: blur(6px);
    background: rgba(0, 0, 0, 0.45);

    /* Mobile default visible */
    opacity: 1;
    transform: translateY(0);
  }

  h3 {
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    line-height: 1.6;
    color: #cfcfcf;
  }

  /* ===== DESKTOP HOVER EFFECT ===== */
  @media (min-width: 768px) {
    height: 360px;

    .content {
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.35s ease;
    }

    h3 {
      font-size: 40px;
    }

    p {
      font-size: 20px;
    }

    &:hover .content {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;


// const StyledWrapper = styled.div`
//   .card {
//     width: 210px;
//     height: 254px;
//     border-radius: 4px;
//     background: #212121;
//     display: flex;
//     gap: 5px;
//     padding: .4em;
//   }

//   .card p {
//     height: 100%;
//     flex: 1;
//     overflow: hidden;
//     cursor: pointer;
//     border-radius: 2px;
//     transition: all .5s;
//     background: #212121;
//     border: 1px solid #ff5a91;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .card p:hover {
//     flex: 4;
//   }

//   .card p span {
//     min-width: 14em;
//     padding: .5em;
//     text-align: center;
//     transform: rotate(-90deg);
//     transition: all .5s;
//     text-transform: uppercase;
//     color: #ff568e;
//     letter-spacing: .1em;
//   }

//   .card p:hover span {
//     transform: rotate(0);
//   }`;

export default SuccessCardSection;