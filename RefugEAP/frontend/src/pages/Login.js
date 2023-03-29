import { useState, useEffect, React } from "react";
import FormRow from "../components/FormRow"
import Wrapper from "../wrappers/LoginPage";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser} from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";


const initialState = {
  name: "",
  password: "",
};

const Login = () => {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, password } = values;
    if (!name || !password) {
      toast.error("Please fill out all fields");
      return;
    }
    dispatch(loginUser({ name: name, password: password }));
    return;
  };

  const toggleMember = () => {
    setValues({ ...values });
  };
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  }, [user]);
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <h3>Login</h3>
        {/* name field */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button
          type="submit"
          className="btn btn-block"
          onClick={toggleMember}
          disabled={isLoading}
        >
          {isLoading ? "loading..." : "submit"}
        </button>
      </form>
    </Wrapper>
  );
}

export default Login