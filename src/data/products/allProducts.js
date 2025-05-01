import FanProducts from './Fans/CromptonFans';
import AtomBergFans from './Fans/AtomBergFans';
import OtherFans from './Fans/OtherFans';

import CromptonLights from './Lights/CromptonLights';
import SturLite from './Lights/SturLite';
import Bulbs from './Lights/Bulbs';

import CoolerProducts from '../HomeAplliances/CoolerProducts';
import WashingMachineProducts from '../HomeAplliances/WashingMachineProducts';
import Geysers from '../HomeAplliances/Geysers';
import Irons from '../HomeAplliances/Irons';
import OtherProducts from '../HomeAplliances/Other/OtherProducts';
import KitchenProducts from '../HomeAplliances/Kitchen/KitchenProducts';

const allProducts = [
  ...FanProducts,
  ...AtomBergFans,
  ...OtherFans,
  ...CoolerProducts,
  ...WashingMachineProducts,
  ...CromptonLights,
  ...SturLite,
  ...Bulbs,
  ...Geysers,
  ...Irons,
  ...OtherProducts,
  ...KitchenProducts,
];

export default allProducts;
