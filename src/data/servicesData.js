import {
  faWordpressSimple,
  faReact,
  faNodeJs,
  faShopify,
  faFontAwesomeLogoFull,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLaptopCode,
  faMobileAlt,
  faCheck,
  faFileVideo,
} from "@fortawesome/free-solid-svg-icons";

let ServicesData = [
  {
    serviceID: 1,
    serviceName: "Frontend Website Development",
    serviceIcon: faLaptopCode,
  },

  {
    serviceID: 2,
    serviceName: "WordPress Development",
    serviceIcon: faWordpressSimple,
  },

  {
    serviceID: 3,
    serviceName: "Web Application Development(ReactJS)",
    serviceIcon: faReact,
  },

  {
    serviceID: 4,
    serviceName: "Responsive Static site Development",
    serviceIcon: faMobileAlt,
  },

  {
    serviceID: 5,
    serviceName: "API Development (Node.js,Express.js)",
    serviceIcon: faNodeJs,
  },

  {
    serviceID: 6,
    serviceName: "Shopify site Development",
    serviceIcon: faShopify,
  },

  {
    serviceID: 7,
    serviceName: "Logo & Brochure Designing (Photoshop/CorelDraw)",
    serviceIcon: faFontAwesomeLogoFull,
  },

  {
    serviceID: 8,
    serviceName: "Site Speed Optimization",
    serviceIcon: faCheck,
  },

  {
    serviceID: 9,
    serviceName: "Video Editing ",
    serviceIcon: faFileVideo,
  },
];

export default ServicesData;
