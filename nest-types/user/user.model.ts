import TypeAccount from './type-account.enum';

export default class User {
    uid: string;
    email: string;
    username: string;
    password?: string;
    firstName: string;
    lastName: string;
    account: TypeAccount;
}