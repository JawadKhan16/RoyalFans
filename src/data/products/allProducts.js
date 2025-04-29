import FanProducts from './Fans/CromptonFans';
import AtomBergFans from './Fans/AtomBergFans';
import CoolerProducts from './CoolerProducts';
import WashingMachineProducts from './WashingMachineProducts';
import CromptonLights from './Lights/CromptonLights';
import SturLite from './Lights/SturLite';

const allProducts = [
  ...FanProducts,
  ...AtomBergFans,
  ...CoolerProducts,
  ...WashingMachineProducts,
  ...CromptonLights,
  ...SturLite,
];

export default allProducts;
