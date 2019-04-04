import { PATH } from '../../constants';
import AccountList from '../AccountList';
import CreateAccount from '../CreateAccount';
import ImportAccount from '../ImportAccount';
import AccountDetail from '../AccountDetail';

export default [
  {
    component: AccountList,
    path: PATH.home,
    title: 'BitX',
  },
  {
    component: CreateAccount,
    path: PATH.createaccount,
    title: '',
  },
  {
    component: ImportAccount,
    path: PATH.importaccount,
    title: '',
  },
  {
    component: AccountDetail,
    path: PATH.accountdetail,
    title: '',
  },
];
