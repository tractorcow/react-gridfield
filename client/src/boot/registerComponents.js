import Injector from 'lib/Injector';
import GridField from 'components/GridField/GridField';

const registerComponents = () => {
  Injector.component.registerMany({
    GridField,
  });
};

export default registerComponents;
