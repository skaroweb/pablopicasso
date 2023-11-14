import { createContext } from 'react';
import ServicesData from '../data/servicesData';

const ServicesContext = createContext(ServicesData);

export default ServicesContext;