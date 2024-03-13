import React, { useContext } from "react";
import { Box, Button, Grid, Stack } from "@mui/material";
import { AppContext } from "../../../../contexts/AppContext";
import {
  CalendarMonthRounded,
  KeyboardDoubleArrowRightRounded,
} from "@mui/icons-material";

function StartUps() {
  const { maxWidth } = useContext(AppContext);

  // Lists

  const MissionList = [
    "To ignite ingenuity, creativity and innovation in the hearts of our researchers to explore their inner soul and make their dreams a reality.",
    "To become the hub for innovative ideas and their implementation.",
    "To provide a launching pad for the brilliant students, faculty and professionals to market their research; where every passing day promises a better tomorrow",
    "To be a hi-tech incubation centre for assisting innovators and students with entrepreneurial mindset of their ideas and promoting innovative solutions to real life problems.",
    "To cultivate fear free, open, collaborative culture of Innovation within University Ecosystem.",
    "To encourage risk taking and equity partnerships with incubatees to create mutual win -win situations.",
    "To collaborate with world class technical and commercialization experts and bring them on platform through, awareness, trainings, coaching and mentoring programs.",
    "Forging strong active partnerships with local industry partners.",
    "To provide best in class Infrastructure, mentorship, angel investment and venture capitalist based financial support.",
  ];

  const AccomplishmentsList = [
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708409455/KPGU/Startups/Industries-Commissionerate-Government-of-Gujarat.svg",
      title: "Industries Commissionerate Government of Gujarat",
      des: "Krishna School of Emerging Technologies & Applied Researchreceived approval as NODAL INSTITUTE Under Scheme forAssistance to Startups/Innovation 2020.",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708412026/KPGU/Startups/gsbtm_transcription_brighter_bio_future.svg",
      title: "Gsbtm Transcription Brighter Bio Future",
      des: "Krishna School of Pharmaceutical Science & Research received approval as NODAL INSTITUTE Under Scheme forAssistance for BT Industry under the Gujarat Biotechnology Policy 2016-21.",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708413867/KPGU/Startups/Center-entrepreneurship-development.svg",
      title: "Center Entrepreneurship Development Government Of Gujarat",
      des: "Krishna School of Emerging Technologies Applied Research Established Entrepreneurship Development Cell In Collaboration.",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708418898/KPGU/Startups/Wadhawani-Foundation-National-Entrepreneurship-Network.svg",
      title: "Wadhawani Foundation National Entrepreneurship Network",
      des: "Krishna School of Emerging Technologies & Applied Research has Signed MOU with Wadhawani Foundation National Entrepreneurship Network, to accelerate entrepreneurship, innovation & skills development among students.",
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708418638/KPGU/Startups/cetiba.svg",
      title:
        "Centre for Entrepreneurship Technology Incubation and Business Acceleration",
      des: "Krishna School of Emerging Technologies & Applied Research has established Centre for Entrepreneurship,Technology Incubation and Business Acceleration (CETIBA), an incubation centre to enable start-ups with an efficientmentoring program, relevant training and a convenient co-working hub. The centre is approved by Ministry of Micro,Small & Medium Enterprise, Government of India",
    },
  ];

  const EntrepreneurshipEventsList = [
    {
      title:
        "Workshop on 3D - Printing: Print Your Imagination, by Mr. Ronak Sinh Parmar, CEO Devine Labs, Ahmedabad",
      date: "1-5-2020",
      points: false,
    },

    {
      title: "Idea Validation by Mr. Haituk Shah",
      date: "4-8-2018",
      points: false,
    },
    {
      title: "Patel, Kiran Mr. by Design Product",
      date: "9-8-2018",
      points: false,
    },
    {
      title: "Barai, Dipen Mr. by Development Product",
      date: "10-8-2018",
      points: false,
    },
    {
      title: "Innovation and IPR by Mr. Kirti Patel",
      date: "14-8-2018",
      points: false,
    },
    {
      title: "Product Validation by Mr. Rohit Dave",
      date: "16-8-2018",
      points: false,
    },
    {
      title: "Market Analysis & Strategies by Mr. Harsh Shah",
      date: "29-8-2018",
      points: false,
    },
    {
      title: `"Vibrant Gujarat Start-up Summit 2018" Road Show`,
      date: "31-8-2018",
      points: false,
    },
    {
      title: `Workshop on IPR by MyCrave Consultancy services`,
      date: "12-12-2018",
      points: false,
    },
    {
      title: `Innovative IDP UDP project exhibition: ExhiBITS`,
      date: "2018",
      points: false,
    },
    {
      title: `Aahvan GTU Student's Annual Tech-Fest`,
      date: "2019",
      points: ["Tech-Pitch", "IDP Expo", "Patent Clinic"],
    },
    {
      title: `Workshop on Patent filing & its Application by GTU Innovation Council`,
      date: "9-4-2019",
      points: false,
    },
    {
      title: `Innovative IDP UDP project exhibition: ExhiBITS`,
      date: "2019",
      points: false,
    },
    {
      title: `BITS Hackathon`,
      date: "17-8-2019",
      points: false,
    },
    {
      title: `GTU Start-up Demo`,
      date: "25-6-2019",
      points: false,
    },
    {
      title: `GTU Start-up Demo`,
      date: "14-9-2019",
      points: false,
    },
    {
      title: `Smart Gujarat for New India Hackathon`,
      date: "24-2-2020",
      points: false,
    },
    {
      title: `Start-up Talks on Augmented Reality (AR) & Virtual Reality (VR) by Sanket Kale`,
      date: "2020",
      points: false,
    },
    {
      title: `Start-up Talks on e-bicycles : By Mr Vivek Page`,
      date: "2020",
      points: false,
    },
    {
      title: `Webinar on "3D Printing: Entrepreneurship`,
      date: "1-5-2020",
      points: false,
    },
    {
      title: `Webinar on: "How to Initiate a Startup & Develop necessary skills for better employment" by Mr. Rohit Swarup`,
      date: "2021",
      points: false,
    },
    {
      title: `One Week Online Capacity Building Program on "Idea to Enterprise"`,
      date: "31-3-2021",
      points: false,
    },
    {
      title: `3 Days Entrepreneurship Awareness Camp Sponsored by EDII and NSTEDB, DST.`,
      date: "2-6-2021",
      points: false,
    },
  ];

  // const StudentStartUps = [
  //   {
  //     company: "Berry Nature Care Private Limited",
  //     logo: "",
  //     founder: "Tagore Berry",
  //     des: "Stained teeth have become an epidemic and a socialembarrassment. Product lead to white stain freeteeth at home without visiting a Dentist or usingharsh chemicals or expensive procedures",
  //     websiteLink: "https://berrynaturecare.com",
  //   },
  //   {
  //     company: "Cubesat Aerospace LLP",
  //     logo: "",
  //     founder: "Ms. Bansi Attara",
  //     des: "Our CubeSats are made to be affordable,customizable, and portable so that they are availableto a wider range of consumers. They are ideal for avariety of uses, including scientific research, earthobservation, remote sensing, and more.",
  //     websiteLink: "https://cubesataero.com",
  //   },
  //   {
  //     company: "Microbeam Laser System",
  //     logo: "",
  //     founder: "Jatinkumar Manharlal Panchal",
  //     des: "Microbeam laser systems designs and manufacturesnanosecond solid-state laser systems for ultra-hardmaterials such as PCD, CVD, Natural Diamond, andSemiconductor material, among others. MICROBEAMLASER SYSTEM is the industry leader in theproduction of laser systems for a variety ofindustries.",
  //     websiteLink: "http://microbeamlasersystem.com",
  //   },
  //   {
  //     company: "Sankul Capital Services Private Limited",
  //     logo: "",
  //     founder: "Prashant Kumar",
  //     des: "SankulCapital builds a foundation for financialindependence. It is implementing a proven modelwith the support of largest not for profitMicrofinance institutes",
  //     websiteLink: "https://sankulcapitalservices.co.in",
  //   },
  //   {
  //     company: "Groskill Learning Private Limited",
  //     logo: "",
  //     founder: "Mugdha Galundia",
  //     des: "Hunar attempts to provide a platform to help thelearner choose their profession as well as developbetter job and life-skills which will lead to theirpersonal and professional growth",
  //     websiteLink: "https://www.groskill.com",
  //   },
  //   {
  //     company: "Cosmo Kundli Private Limited",
  //     logo: "",
  //     founder: "Maulik Bhatt",
  //     des: "In order to create the precise exercise of theastrology we are under process of making a softwarewhich will have the technology advancement of AL.This software will be able to predict future for theprecise prediction for the better planning assuggested in vedas.",
  //     websiteLink: "https://cosmokundli.com",
  //   },
  //   {
  //     company: "Ravens Defence System Private Limited",
  //     logo: "",
  //     founder: "Sameer Ravindra Kulkarni",
  //     des: "The Ravens Defense System company's first productis IS&WS. It has a multifunctional, easy HumanMachine Interface (HMI) embedded system thatoutperforms the global market with innovativedesign.",
  //     websiteLink: "https://www.ravendefense.com",
  //   },
  //   {
  //     company: "Tatved Herbal",
  //     logo: "",
  //     founder: "Samiksha Dixit",
  //     des: "Providing safe skin care and hair care formulationswhich are result oriented and value added.Affordable range of the products.",
  //     websiteLink: "https://tatvedherbal.com",
  //   },
  //   {
  //     company: "Truewholesale LLP",
  //     logo: "",
  //     founder: "Madhup Bansal",
  //     des: "The Ravens Defense System company's first productis IS&WS. It has a multifunctional, easy HumanMachine Interface (HMI) embedded system thatoutperforms the global market with innovativedesign.",
  //     websiteLink: "https://truewholesale.in",
  //   },
  //   {
  //     company: "Excelsus Global Private Limited",
  //     logo: "",
  //     founder: "Chintan Chaudhary",
  //     des: "Acquires left over wheat stubble waste form thefarmers & turn them into useful products such asEco-friendly 'drinking straws' & 'stirrers'. With thisinitiative we are not only preventing the air pollutionbut are also promoting the reduction in the use ofplastics.",
  //     websiteLink: "https://www.excelsus-global.com",
  //   },
  //   {
  //     company: "Gyanme EduTech Pvt Ltd",
  //     logo: "",
  //     founder: "Mr. Raghvendra Singh Chauhan",
  //     des: "GyanMe is an EdTech setup that offers students infact entire educational community, real-time doubtsolving, and practical learning by means of the virtualplatform.",
  //     websiteLink: "https://gyanme.in",
  //   },
  //   {
  //     company: "",
  //     logo: "",
  //     founder: "",
  //     des: "",
  //     websiteLink: "",
  //   },
  //   {
  //     company: "",
  //     logo: "",
  //     founder: "",
  //     des: "",
  //     websiteLink: "",
  //   },
  //   {
  //     company: "",
  //     logo: "",
  //     founder: "",
  //     des: "",
  //     websiteLink: "",
  //   },
  //   {
  //     company: "",
  //     logo: "",
  //     founder: "",
  //     des: "",
  //     websiteLink: "",
  //   },
  //   {
  //     company: "",
  //     logo: "",
  //     founder: "",
  //     des: "",
  //     websiteLink: "",
  //   },
  //   {
  //     company: "",
  //     logo: "",
  //     founder: "",
  //     des: "",
  //     websiteLink: "",
  //   },
  //   {
  //     company: "",
  //     logo: "",
  //     founder: "",
  //     des: "",
  //     websiteLink: "",
  //   },
  //   {
  //     company: "",
  //     logo: "",
  //     founder: "",
  //     des: "",
  //     websiteLink: "",
  //   },
  //   {
  //     company: "",
  //     logo: "",
  //     founder: "",
  //     des: "",
  //     websiteLink: "",
  //   },
  //   {
  //     company: "",
  //     logo: "",
  //     founder: "",
  //     des: "",
  //     websiteLink: "",
  //   },
  //   {
  //     company: "",
  //     logo: "",
  //     founder: "",
  //     des: "",
  //     websiteLink: "",
  //   },
  //   {
  //     company: "",
  //     logo: "",
  //     founder: "",
  //     des: "",
  //     websiteLink: "",
  //   },
  //   {
  //     company: "",
  //     logo: "",
  //     founder: "",
  //     des: "",
  //     websiteLink: "",
  //   },
  //   {
  //     company: "",
  //     logo: "",
  //     founder: "",
  //     des: "",
  //     websiteLink: "",
  //   },
  // ];

  // Components

  const StudentStartUps = [
    {
      founderName: "Mr. Tagore Berry",
      companyName: "BERRY NATURE CARE PRIVATE LIMITED",
      companyDes: "Berry Nature Care prioritizes sustainability, offering eco-friendly products infused with Ayurveda and modern research. Their patented materials combat pollution, support farmers, and reduce plastic waste. Purchases contribute to environmental protection and future savings for children.",
      websiteLink: "https://berrynaturecare.com",
    },
    {
      founderName: "Ms. Bansi Attara",
      companyName: "CUBESAT AEROSPACE LLP",
      companyDes: "Cubesat Aerospace pioneers innovative technology, including Small Satellites, UAVs, and Robots, aiming to revolutionize various fields. Driven by exploration and excellence, they envision technology's positive impact on the world.",
      websiteLink: "https://cubesataero.com",
    },
    {
      founderName: "Mr. Jatinkumar Manharlal Panchal",
      companyName: "MICROBEAM LASER SYSTEM",
      companyDes: "Microbeam Laser System, led by entrepreneur Jatin Panchal, adapts to laser technology advancements driven by diamond industries. Offering repair services for various DPSS laser systems, specializing in Nd:YAG and Fiber lasers across different wavelengths and configurations, ensuring comprehensive optical assembly handling.",
      websiteLink: "http://microbeamlasersystem.com",
    },
    {
      founderName: "Mr. Prashant Kumar",
      companyName: "SANKUL CAPITAL SERVICES PRIVATE LIMITED",
      companyDes: "Sankul Capital Services Private Limited aims to offer financial services to underprivileged communities in remote villages, where traditional credit avenues are scarce. With a team of experienced development professionals, they focus on holistic poverty eradication through community empowerment and sustainable practices.",
      websiteLink: "https://sankulcapitalservices.co.in",
    },

    {
      founderName: "Ms. Mugdha Galundia",
      companyName: "GROSKILL LEARNING PRIVATE LIMITED",
      companyDes: "GROSKILL LEARNING PRIVATE LIMITED strives to empower learners with job and life skills, enhancing personal growth and professional development. By providing certifications, promoting job safety, and facilitating job placements, it contributes to India's workforce development and #AATMANIRBHAR initiative.",
      websiteLink: "https://www.hunarindia.co.in",
    },
    {
      founderName: "Mr. Maulik Bhatt",
      companyName: "COSMO KUNDLI PRIVATE LIMITED",
      companyDes: "Cosmo Kundli pioneers technological advancements in astrology, aiming to revolutionize the field by merging Vedic knowledge with scientific approaches. With over 100 connected astrologers, their software seeks to bring precision and clarity to the market.",
      websiteLink: "https://cosmokundli.com/",
    },
    {
      founderName: " Mr. Sameer Ravindra Kulkarni",
      companyName: "RAVENS DEFENCE SYSTEM PRIVATE LIMITED",
      companyDes: "Raven Defense, based in Albuquerque, NM, delivers top-tier engineering services, program consultation, and specialized technical equipment for satellite communications, ground stations, sensors, and R&D systems. With a focus on agility and responsiveness, they ensure mission success for government clients.",
      websiteLink: "https://www.ravendefense.com",
    },
    {
      founderName: "Ms. Samiksha Sanjay Dixit",
      companyName: "SMARTIK HERBS (OPC) PRIVATE LIMITED",
      companyDes: "Tatved Herbal is not just a personal care brand, but a labour so love and dedication that started from scratch. The founder, Ms. Samiksha Dixit, with background of Pharmacy and genuine passion for research is not only the driving force behind our products but also the formulator.",
      websiteLink: "http://tatvedherbal.com",
    },
    {
      founderName: "Mr. Madhup Bansal",
      companyName: "TRUEWHOLESALE LLP",
      companyDes: "TrueWholesale is at the forefront of India's wholesale market, offering a comprehensive online platform tailored for shop owners and businesses to efficiently source a diverse range of products including stationery, sports equipment, and general inventory.",
      websiteLink: "https://truewholesale.in",
    },
    {
      founderName: "Mr. Chintan Chaudhary",
      companyName: "EXCELSUS GLOBAL PRIVATE LIMITED",
      companyDes: "Excelsus Global Private Limited excels in exporting high-quality agricultural and industrial products globally, offering competitive rates. With a commitment to tailored and seamless transactions, we prioritize understanding clients' needs to deliver superior market offerings consistently, particularly in the Indian market.",
      websiteLink: "https://www.excelsus-global.com",
    },
    {
      founderName: "Mr. Fredrick Thomson Bula",
      companyName: "VARTECH WEIGHING SYSTEMS PRIVATE LIMITED",
      companyDes: "Vartech proudly collaborates with Dos Santos, USA, to deliver cutting-edge solutions, including high-angle sandwich conveyors, catering specifically to the unique demands of the Indian mining industry.",
      websiteLink: "https://vartechweighing.com",
    },
    {
      founderName: "Ms. Riddhi Bhatt ",
      companyName: "SOUL MANTRA ORGANICS LLP",
      companyDes: "Soul Mantra Organics, inspired by Ayurveda, crafts skin and hair care products rooted in ancient Santana Scriptures. Founder Riddhi Bhatt preserves tradition while innovating to offer effective, natural solutions. Committed to excellence, they prioritize customer satisfaction, blending tradition with innovation for premium organic beauty products.",
      websiteLink: "https://soulmantraorganics.com",
    },
    {
      founderName: "Dr.Avani Desai ,Mr.Karan Shah, Mr.Ankit Desai",
      companyName: "AVAN MEDITECH PVT LTD",
      companyDes: "Avan Meditech pioneers product innovation, customer service, and quality manufacturing in the medical industry. Our team, comprising skilled engineers, innovators, and doctors, blends youth and experience to produce high-standard medical equipment at competitive prices.",
      websiteLink: "http://avanmeditech.com",
    },
    {
      founderName: "Ms.Amrit Chhabra",
      companyName: "ANANDASHRAM AYURVED PVT LTD",
      companyDes: "Wellness Mantra, a subsidiary of Anand Ashram Ayurved Private Limited, operates on the principles of Social Entrepreneurship. Committed to serving humanity, we offer authentic Ayurvedic medications and healthcare products, targeting lifestyle-induced ailments with efficacy and authenticity.",
      websiteLink: "https://wellnessmantra.co.in",
    },
    {
      founderName: "Mr. Raghvendra Singh Chauhan",
      companyName: "GYANME EDUTECH PVT LTD",
      companyDes: "GyanMe, an EdTech platform, provides real-time doubt solving and practical learning for students and the wider educational community through virtual means. Embracing change, we prioritize user feedback, continuous improvement, and the synergy of technology, content, and intent to empower the bright minds of the future.",
      websiteLink: "https://gyanme.in",
    },
    {
      founderName: "Mr Aliasgar Poonawalla",
      companyName: "CURATY PRIVATE LIMITED",
      companyDes: "curaty is your dedicated partner in transforming the talent landscape of the film and creative industry. Elevate your talent discovery process, harness cutting-edge machine learning and artificial intelligence, and make informed decisions that shape the future of your projects.",
      websiteLink: "https://curaty.in",
    },
    {
      founderName: "Mr. Varun Saikia",
      companyName: "OCEAN CLEANERZ TECHNOLOGIES PVT LTD",
      companyDes: "Oceancleanerz, spearheaded by 15-year-old Varun Saikia, pioneers AI-enhanced devices like Flipper and Makara to clean the Ganga River and Indian Ocean Gyre. Joining forces with volunteers across Asia, they collaborate with governments for cleaner waterbodies.",
      websiteLink: "https://oceancleanerz.com",
    },
    {
      founderName: "Mr. Yash Deshmukh",
      companyName: "AUTOVOLTZ ROBOTICS PRIVATE LIMITED",
      companyDes: "Autovoltz Robotics Pvt Ltd reimagines firefighting with a focus on swift and efficient response. Embracing a human-centric approach, we engineer intelligent fire safety devices to enhance interaction and combat fire emergencies effectively.",
      websiteLink: "https://www.autovoltz.com/",
    },
    {
      founderName: "Mr. Karmit Goswami",
      companyName: "COMPUCARE INDIA PVT LTD",
      companyDes: "Compucare is a leading IT services firm headquartered in India. Specializing in biometric and card-based time attendance solutions, we offer cutting-edge IT solutions in software, hardware, and office automation. With a commitment to quality, service, and reliability, we excel in providing value-driven technology solutions worldwide.",
      websiteLink: "https://compucareindia.com/",
    },
    {
      founderName: "Mr. Rishil Gaur",
      companyName: "TELIDOX SYSTEMS",
      companyDes: "Telidox provides comprehensive healthcare solutions through its clinically-researched online platform. Users can access qualified doctors, book appointments, view test results, and utilize pharmacy, laboratory, and diagnostic center services conveniently, anytime and from anywhere.",
      websiteLink: "https://telidox.com/",
    },
    {
      founderName: "Ms. Ruchira Saikia",
      companyName: "RTEFACTS EREATIL PVT LTD",
      companyDes: "Rtefacts.com, pronounced Artefacts, fosters indigenous artistry, showcasing heirlooms crafted by master artisans. We aim to revive traditional Indian arts, offering a platform for artists nationwide and empowering artisan communities with each purchase.",
      websiteLink: "https://rtefacts.com/",
    },
    {
      founderName: "Mr. Gurpreet Singh Batra",
      companyName: "JKB FITNESS PRIVATE LIMITED",
      companyDes: "GSBPathy, India's pioneer in non-drug gut disorder treatment, led by Mr. Gurpreet Singh Batra and industry experts, offers holistic solutions for various health conditions like PCOS, Psoriasis, and Diabetes, with modern painless technology and full confidentiality.",
      websiteLink: "https://www.gsbfit.com",
    },
    {
      founderName: "Mr. Rachhadiya Jaydeep",
      companyName: "EXAMEN FORMA PRIVATE LIMITED",
      companyDes: "Examen Forma Private Limited specializes in CNC and VMC job work services, dedicated to delivering precision and innovation to industries, particularly automotive manufacturing. With cutting-edge technology and a skilled team, we ensure superior workmanship, consistently exceeding industry standards.",
      websiteLink: "https://examen.in",
    },
    {
      founderName: "Dr Krunal Ramteke",
      companyName: "GOOD4HEALTH LIFECARE TECHNOLOGY PRIVATE LIMITED",
      companyDes: "DQcare strives to empower individuals by providing a comprehensive platform for managing health and fitness data, utilizing technology to enhance healthcare delivery. Our vision is to revolutionize health management, ensuring access to reliable information and tools for informed well-being decisions.",
      websiteLink: "https://dqcare.in",
    },
    {
      founderName: "Mr. Swapneel Patel",
      companyName: "JUPISOL POWER INDIA PRIVATE LIMITED",
      companyDes: "Jupisol Power India Private Limited leads the shift towards sustainable, reliable, and affordable energy systems. Through innovative technologies, we aim to energize society and drive positive change in the energy landscape.",
      websiteLink: "https://jupisolpower.com",
    },
    // {
    //   founderName: "Mr. Sanket Shah",
    //   companyName: "FICUS FOOD LAB",
    //   companyDes: "",
    //   websiteLink: "https://ficusfoods.com",
    // },
    // {
    //   founderName: "Mr. Maneesh Adari",
    //   companyName: "ADTIP (OPC) PRIVATE LIMITED",
    //   companyDes: "",
    //   websiteLink: "https://adtip.in",
    // },
    // {
    //   founderName: "Mr. Vecham Sathyanarayana Supradesh",
    //   companyName: "GAVIGAN TECHNOLOGY PRIVATE LIMITED",
    //   companyDes: "",
    //   websiteLink: "NA",
    // },
    // {
    //   founderName: "Mr. Henish Anilbhai Viradiya, Dev Patel & Sarthak Das",
    //   companyName: "DRAI FUTUREGEN LLP",
    //   companyDes: "",
    //   websiteLink: "NA",
    // },
    // {
    //   founderName: "Mr. Harsh Patel",
    //   companyName: "JAGAJI FARM PVT LTD",
    //   companyDes: "",
    //   websiteLink: "NA",
    // },
    // {
    //   founderName: "Mr. Gagan Malhotra",
    //   companyName: "TRITONE MUSIC LLP",
    //   companyDes: "",
    //   websiteLink: "https://museekh.com",
    // },
    // {
    //   founderName: "Mr. abdul sameer k k ",
    //   companyName: "EZIDY ENTERPRISES OPC PRIVATE LIMITED ",
    //   companyDes: "",
    //   websiteLink: "https://eziday.in",
    // },
    // {
    //   founderName: "Mr. Bhavna Gupta",
    //   companyName: "RAJISHWAR BHIMAASHA FOODS PRIVATE LIMITED",
    //   companyDes: "",
    //   websiteLink: "https://www.instagram.com/thatssovegan_/",
    // },
    // {
    //   founderName: "Mr. Ashish Gajera ",
    //   companyName: "AVENCIA MOLECULES PVT LTD",
    //   companyDes: "",
    //   websiteLink: "https://www.avenciamolecules.com",
    // },
    // {
    //   founderName: "Mr. Gaurav Vyas",
    //   companyName: "AMPX MOTORS PVT LTD",
    //   companyDes: "",
    //   websiteLink: "NA",
    // },
    // {
    //   founderName: "Dr.R.K Jani",
    //   companyName: "INDO MEDEVICES PVT LTD.",
    //   companyDes: "",
    //   websiteLink: "NA",
    // },
    // {
    //   founderName: "Mr.Mihir Otia",
    //   companyName: "MIDEHAR MEDCARE LLP",
    //   companyDes: "",
    //   websiteLink: "NA",
    // },
    // {
    //   founderName: "Mr. Urjit Naik",
    //   companyName: "UNICKBHARAT LIFESTYLE PVT. LTD.",
    //   companyDes: "",
    //   websiteLink: "NA",
    // },
    // {
    //   founderName: "Milan Viradia",
    //   companyName: "ZENON LIFESCIENCES PRIVATE LIMITED",
    //   companyDes: "",
    //   websiteLink: " NA",
    // },
    // {
    //   founderName: "Mr. Sachin Kaluskar",
    //   companyName: " INFINE ART VENTURES LLP",
    //   companyDes: "",
    //   websiteLink: "https://infineart.in",
    // },
    // {
    //   founderName: "Mr. Gaurav Parmar",
    //   companyName: "ORGRO FIBRE LLP",
    //   companyDes: "",
    //   websiteLink: "http://orgrofibre.com/",
    // },
    // {
    //   founderName: "Mr. Karan Shilpa Chavda",
    //   companyName: "IPSUM POWER PVT. LTD",
    //   companyDes: "",
    //   websiteLink: "",
    // },
    // {
    //   founderName: "Mr. Sharad Patel",
    //   companyName: "ECOMOBILITY INNOVATIONS LLP",
    //   companyDes: "",
    //   websiteLink: "",
    // },
    // {
    //   founderName: "Dr Sushil Patel",
    //   companyName: "DOCX SYSTEMS PRIVATE LIMITED",
    //   companyDes: "",
    //   websiteLink: "",
    // },
    // {
    //   founderName: "Mr. Vijay Mamtani",
    //   companyName: "PRAYOGIK ENERGY PRIVATE LIMITED",
    //   companyDes: "",
    //   websiteLink: "NA",
    // },
  ]

  const MissionListComponent = ({ des }) => (
    <h5 className="fw-bold mb-3">
      <Stack
        pl={"2%"}
        direction={"row"}
        alignItems={"start"}
        color={"secondary.main"}
      >
        <KeyboardDoubleArrowRightRounded sx={{ fontSize: "27px" }} />
        {des}
      </Stack>
    </h5>
  );

  const StudentStartUpsComponents = ({ founderName, companyName, companyDes, websiteLink }) => (
    <Grid item xs={12} sm={6} md={4} >
      <Box className="smooth-shadow-card h-100" position={"relative"} borderRadius={4}>
        {/* <Box>
          <img src="" alt="" />
        </Box> */}
        <Box p={2} mb={5}>
          <h3 className="mb-0 fw-semibold ">{founderName}</h3>
          <h6 className="fw-bold ">Founder of <span className="color-secondary">{companyName}</span></h6>
          <h6 className="text-secondary">{companyDes}</h6>
        </Box>
        <Stack direction={"row"}
          sx={{ position: "absolute", bottom: 16 }}
          spacing={1}
          px={2}
        >
          <Button color="secondary" disableElevation variant="contained" endIcon={<KeyboardDoubleArrowRightRounded />} href={websiteLink} target="_blank">website</Button>
        </Stack>

      </Box>
    </Grid>
  );

  const AccomplishmentsListComponent = ({ img, title, des }) => (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        className="smooth-shadow-card h-100"
        position={"relative"}
        borderRadius={4}
      >
        <Box>
          <img
            src={img}
            alt="Industries Commissionerate Government of Gujarat"
            className="w-100"
          />
        </Box>
        <Box p={2}>
          <h5 className="fw-bold color-secondary">{title}</h5>
          <p className="text-gray fw-bold">{des}</p>
        </Box>
      </Box>
    </Grid>
  );

  const EntrepreneurshipEventsListComponent = ({ title, date, points }) => (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        className="smooth-shadow-card h-100"
        position={"relative"}
        borderRadius={4}
      >
        <Box p={2}>
          <h5 className={`fw-bold color-secondary ${points ? "" : "mb-5"}`}>
            {title}
          </h5>
          <Box mb={6}>
            {points
              ? points.map((des) => (
                <p
                  className="text-gray fw-bold mb-2 fw-bolder  text-uppercase  ps-2 d-flex align-items-center color-secondary"
                  style={{ fontSize: "14px" }}
                >
                  <KeyboardDoubleArrowRightRounded
                    sx={{ fontSize: "20px" }}
                  />{" "}
                  {des}
                </p>
              ))
              : ""}
          </Box>
        </Box>
        <Stack position={"absolute"} bottom={16} left={16}>
          <Button
            color="secondary"
            variant="contained"
            disableElevation
            startIcon={<CalendarMonthRounded />}
          >
            {date}
          </Button>
        </Stack>
      </Box>
    </Grid>
  );

  return (
    <>
      <Box
        maxWidth={maxWidth}
        mx={"auto"}
        p={"5%"}
        bgcolor={"#fff"}
        mt={7}
        borderRadius={4}
        className="smooth-shadow"
      >
        <h4 className="fw-semibold color-secondary">
          Krishna Centre of Startup & Entrepreneurship has been established to
          nurture and support innovative ideas from Students and to convert them
          into successful Start-ups and develop entrepreneurship skills.{" "}
        </h4>
      </Box>
      <Box
        maxWidth={maxWidth}
        mx={"auto"}
        p={"5%"}
        bgcolor={"#fff"}
        mt={7}
        borderRadius={4}
        className="smooth-shadow"
      >
        <h2 className="fw-semibold color-secondary mb-4">MISSION</h2>
        {MissionList.map((des, index) => (
          <MissionListComponent des={des} key={index} />
        ))}
      </Box>
      <Box
        maxWidth={maxWidth}
        mx={"auto"}
        p={"5%"}
        bgcolor={"#fff"}
        mt={7}
        borderRadius={4}
        className="smooth-shadow"
      >
        <h2 className="fw-semibold color-secondary mb-5">
          Krishna Centre of Start Ups & Entrepreneurship has successfully
          completed following accomplishments
        </h2>
        <Grid container spacing={4}>
          {AccomplishmentsList.map(({ img, title, des }, index) => (
            <AccomplishmentsListComponent
              img={img}
              des={des}
              title={title}
              key={index}
            />
          ))}
        </Grid>
      </Box>
      <Box
        maxWidth={maxWidth}
        mx={"auto"}
        p={"5%"}
        bgcolor={"#fff"}
        mt={7}
        borderRadius={4}
        className="smooth-shadow"
      >
        <h2 className="fw-semibold color-secondary mb-4">
          Events Related to Start-ups and Entrepreneurship
        </h2>
        <Grid container spacing={4}>
          {EntrepreneurshipEventsList.map(({ title, date, points }, index) => (
            <EntrepreneurshipEventsListComponent
              title={title}
              date={date}
              key={index}
              points={points}
            />
          ))}
        </Grid>
      </Box>
      <Box
        maxWidth={maxWidth}
        mx={"auto"}
        p={"5%"}
        bgcolor={"#fff"}
        mt={7}
        borderRadius={4}
        className="smooth-shadow"
      >
        <h2 className="fw-semibold color-secondary mb-4">
          Startups From KPGU
        </h2>
        <Grid container spacing={4}>
          {
            StudentStartUps.map(({ companyDes, companyName, founderName, websiteLink }, index) => <StudentStartUpsComponents companyDes={companyDes} companyName={companyName} founderName={founderName} websiteLink={websiteLink} key={index} />)
          }
        </Grid>
      </Box>
    </>
  );
}

export default StartUps;
