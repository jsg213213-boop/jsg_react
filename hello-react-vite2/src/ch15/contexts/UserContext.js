import { createContext } from "react";

const UserContext = createContext({ name: '게스트', isLoggedIn: false });

export default UserContext;