import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


import { logout } from "../../redux/slice/auth";

import "./style.scss";

const WarningModal = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () =>{
    navigate('/login')
    dispatch(logout())
  }

  return (
    <div className="warning-modal">
      <div className="warning-modal__content">
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui saepe unde
        tempore minus labore, id dolorum sapiente fugiat aliquid perferendis
        deserunt aspernatur ut obcaecati quas deleniti aliquam hic ducimus
        quibusdam.
        </p>
        <div>
            <button onClick={handleLogout} >Login</button>
            <button>Call Admin</button>
        </div>
      </div>
    </div>
  );
};

export default WarningModal;
