import logo from '../assets/images/xtra-construction-logo.png'
import footerLogo from '../assets/images/xtra-construction-footer-logo.png'
import heroBuilder from '../assets/images/hero-builder.png'
import heroSlideTwo from '../assets/images/hero-slide-2-bg.jpg'
import featureBuilding from '../assets/images/feature-building-engineering.jpg'
import featureSafety from '../assets/images/feature-safety-first.jpg'
import featureRoad from '../assets/images/feature-road-construction.jpg'
import safetyIcon from '../assets/images/safety-icon.png'
import aboutImage from '../assets/images/about-company.jpg'
import serviceBuilding from '../assets/images/service-building.png'
import serviceRoad from '../assets/images/service-road.png'
import serviceMaintenance from '../assets/images/service-maintenance.png'
import processImage from '../assets/images/construction-process.jpg'
import featuresBackground from '../assets/images/features-background.jpg'
import projectRiverview from '../assets/images/project-riverview-green-building.jpg'
import projectLangham from '../assets/images/project-the-langham-hotel.jpg'
import projectVilla from '../assets/images/project-villa-rustica-renovation.jpg'
import projectLand from '../assets/images/project-land-rustica-renovation.jpg'
import projectKitchen from '../assets/images/project-kitchen-and-living-room.jpg'
import projectPalms from '../assets/images/project-house-under-the-palms.jpg'
import projectGreenHouse from '../assets/images/project-green-house.jpg'
import projectInside from '../assets/images/project-inside-renovation.jpg'
import testimonialRichard from '../assets/images/testimonial-richard-dowson.jpg'
import testimonialLisa from '../assets/images/testimonial-lisa-jordan.jpg'
import testimonialMichael from '../assets/images/testimonial-michael-anderson.jpg'
import clientLogo1 from '../assets/images/client-logo-1.png'
import clientLogo2 from '../assets/images/client-logo-2.png'
import clientLogo3 from '../assets/images/client-logo-3.png'
import clientLogo4 from '../assets/images/client-logo-4.png'
import clientLogo5 from '../assets/images/client-logo-5.png'

export const images = {
  logo,
  footerLogo,
  heroBuilder,
  heroSlideTwo,
  featuresBackground,
  safetyIcon,
  aboutImage,
  processImage,
}

export const phone = {
  display: '+1 (818) 23 45 678',
  href: 'tel:0018182345678',
}

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'FAQ', href: '#process' },
  { label: 'Blog', href: '#projects' },
  {
    label: 'Pages',
    href: '#home',
    children: [
      { label: 'Shop', href: '#services' },
      { label: 'Cart', href: '#quote' },
      { label: 'Wishlist', href: '#projects' },
      { label: 'My account', href: '#testimonials' },
      { label: 'Submenu example', href: '#about' },
      {
        label: 'Dropdown menu',
        href: '#services',
        children: [
          { label: 'Submenu 1', href: '#features' },
          { label: 'Submenu 2', href: '#process' },
        ],
      },
    ],
  },
  { label: 'Contact', href: '#quote' },
]

export const features = [
  {
    id: 'building-engineering',
    title: 'Building Engineering',
    description:
      'A Building Engineer is recognised as being expert in the use of technology for the design, construction, assessment and maintenance of the built environment.',
    image: featureBuilding,
    imageAlt: 'Building engineering site',
    href: '#services',
  },
  {
    id: 'safety-first',
    title: 'Safety First',
    description:
      'Safety First explores the challenges at the heart of needlestick and sharps safety and highlights promising efforts to ensure patient and health care worker safety in hospitals.',
    image: featureSafety,
    imageAlt: 'Construction safety equipment',
    href: '#services',
  },
  {
    id: 'road-construction',
    title: 'Road Construction',
    description:
      'The construction of a new road whether from asphalt or concrete requires the production of an bonded pavement structure, beginning with a stable base.',
    image: featureRoad,
    imageAlt: 'Road construction machinery',
    href: '#services',
  },
]

export const aboutPoints = [
  'Excellent engineering',
  'Modern & up to date',
  'Grade #1 materials',
  'Structures with long life',
]

export const services = [
  {
    id: 'building',
    title: 'Building',
    description: 'A building, or edifice, is a structure with a roof and walls standing.',
    icon: serviceBuilding,
    iconAlt: 'Building service',
  },
  {
    id: 'road-construction',
    title: 'Road Construction',
    description:
      'Road construction involves the use of asphalt, liquid asphalt, concrete, soil stabilization, rebar, paving and pavement recycling machines, and other road repair materials.',
    icon: serviceRoad,
    iconAlt: 'Road construction service',
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description: 'All are assigned responsibilities relate to the maintenance mode.',
    icon: serviceMaintenance,
    iconAlt: 'Maintenance service',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Agency / Bidding',
    description: 'Ensure design documents are reviewed and permitted',
  },
  {
    number: '02',
    title: 'Construction',
    description: 'Helps to coordinate furnishings and move-in process',
  },
  {
    number: '03',
    title: 'Project Execution',
    description: 'Client directs move in of equipment, operations & staff',
  },
]

export const projects = [
  {
    id: 'riverview-green-building',
    title: 'Riverview Green Building',
    categories: 'Building, Road Construction',
    image: projectRiverview,
  },
  {
    id: 'the-langham-hotel',
    title: 'The Langham Hotel',
    categories: 'Building, Construction',
    image: projectLangham,
  },
  {
    id: 'villa-rustica-renovation',
    title: 'Villa Rustica Renovation',
    categories: 'Construction, Road Construction',
    image: projectVilla,
  },
  {
    id: 'land-rustica-renovation',
    title: 'Land Rustica Renovation',
    categories: 'Building, Maintenance',
    image: projectLand,
  },
  {
    id: 'kitchen-and-living-room',
    title: 'Kitchen And Living Room',
    categories: 'Architecture, Building',
    image: projectKitchen,
  },
  {
    id: 'house-under-the-palms',
    title: 'House Under The Palms',
    categories: 'Construction, Road Construction',
    image: projectPalms,
  },
  {
    id: 'green-house',
    title: 'Green House',
    categories: 'Construction, Road Construction',
    image: projectGreenHouse,
  },
  {
    id: 'inside-renovation',
    title: 'Inside renovation',
    categories: 'Construction, Road Construction',
    image: projectInside,
  },
]

export const testimonials = [
  {
    id: 'richard-dowson',
    quote:
      '"Great Experience!! Michael has made the whole process easy from the planning stage to the final plant going in. Steve & his crew did a great job. I felt like Lavish Gardens really listened to what I wanted, gave me ideas, and helped me decide how to make my backyard a place to relax and enjoy the view.',
    author: '- Richard Dowson',
    avatar: testimonialRichard,
  },
  {
    id: 'lisa-jordan',
    quote:
      '\u201cI just wanted to say thank you to all of you for being so fun to work with and being rock stars with the best attitudes EVER on this 16th floor build for SPS. It means a great deal to me that you all come to the table every week with smiles on your faces and ready to solve whatever issue.\u201d',
    author: '- Lisa Jordan',
    avatar: testimonialLisa,
  },
  {
    id: 'michael-anderson',
    quote:
      '"Greiner has been a critical partner to us on the redevelopment of West End Center Office Park. The team of project managers, supervisors, and their support teams can\'t be rivaled by any other contractor I have worked with over the past 15 years."',
    author: '- Michael Anderson',
    avatar: testimonialMichael,
  },
]

export const clientLogos = [
  { id: 'logo-4', src: clientLogo4, width: 130, height: 80, alt: 'Construction Company logo' },
  { id: 'logo-5', src: clientLogo5, width: 218, height: 70, alt: 'Construction Company logo' },
  { id: 'logo-3', src: clientLogo3, width: 163, height: 79, alt: 'Construction Company logo' },
  { id: 'logo-1', src: clientLogo1, width: 193, height: 80, alt: 'Construction Company logo' },
  { id: 'logo-2', src: clientLogo2, width: 141, height: 80, alt: 'Construction Company logo' },
]

export const departments = [
  'Business Departemant',
  'Personal Departemant',
  'Support Departemant',
  'Others',
]
