import Vue from "vue";
import {
  Select,
  Option,
  OptionGroup,
  Loading,
  Button,
  Input,
  Form,
  FormItem,
  Card,
  Col,
  Row,
  Pagination,
  Message,
  Dialog,
  CheckboxGroup,
  Checkbox,
  DatePicker,
  Radio,
  RadioGroup,
  Tag,
  Badge,
  Icon,
  Switch,
  Tabs,
  TabPane
} from "element-ui";

import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";

Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Card);
Vue.use(Col);
Vue.use(Row);
Vue.use(Pagination);
Vue.use(Loading);
Vue.use(Message);
Vue.use(Dialog);
Vue.use(Checkbox);
Vue.use(DatePicker);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Tag);
Vue.use(Badge);
Vue.use(Icon);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Tabs);
Vue.use(TabPane);

locale.use(lang);
// Vue.prototype.$ELEMENT = {
//   size: "medium"
// };
Vue.prototype.$ELEMENT = { size: 'mini', zIndex: 3000 };
Vue.prototype.$message = Message;
