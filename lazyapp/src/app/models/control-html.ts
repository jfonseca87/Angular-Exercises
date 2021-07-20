import { ControlTypesEnum } from './control-types-enum';

export interface ControlHTML {
  id: string;
  name: string;
  label?: string;
  type?: ControlTypesEnum;
  checked?: boolean;
  value?: any;
  placeholder?: string;
  options?: any[];
}
