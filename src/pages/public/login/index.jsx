import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { TOKEN, USER } from "../../../consts";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { setAuth } from "../../../redux/slice/auth";

import request from "../../../server/request";
import loginSchema from "../../../schemas/login";

import "./style.scss";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      const {
        data: { token, user },
      } = await request.post("auth/login", values);
      console.log(token, user);
      navigate("/admin/dashboard");
      Cookies.set(TOKEN, token);
      localStorage.setItem(USER, JSON.stringify(user));
      dispatch(setAuth(user));
      // reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login">
      <div className="login__container">
        <h1 className="login__title">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="login__form">
          <input
            className={`login__form__input ${
              errors.username ? "login__form__input__valid" : null
            } `}
            type="text"
            placeholder="Username"
            {...register("username")}
          />
          <p>{errors.username?.message}</p>
          <input
            className={`login__form__input ${
              errors.password ? "login__form__input__valid" : null
            } `}
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
          <button disabled={loading} className="login__form__btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
