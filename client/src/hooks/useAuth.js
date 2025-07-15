import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";


export default function useAuth() {
    const { _id, accessToken, email } = useContext(UserContext);

    return {
        accessToken,
        _id,
        email,
        isAuthenticated: !!accessToken
    }
}