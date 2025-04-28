import FanProducts from './Fans/CromptonFans';
import AtomBergFans from './Fans/AtomBergFans';
import CoolerProducts from './CoolerProducts';
import WashingMachineProducts from './WashingMachineProducts';
import MixerProducts from './MixerProducts';

const allProducts = [
  ...FanProducts,
  ...AtomBergFans,
  ...CoolerProducts,
  ...WashingMachineProducts,
  ...MixerProducts,
];

export default allProducts;
