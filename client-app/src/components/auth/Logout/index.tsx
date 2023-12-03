import { useActions } from "../../../hooks/useActions";

const Logout = () => {
    const { LogoutUser } = useActions();
    return (
        <div className="btn text-danger" onClick={LogoutUser} >
            Logout
        </div>
    );
}

export default Logout;