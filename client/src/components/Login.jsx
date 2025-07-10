// import React from "react";
// import { useAppContext } from "../context/AppContext";
// import toast from "react-hot-toast";

// const Login = () => {
//   const { setShowLogin, axios, setToken, navigate } = useAppContext();

//   const [state, setState] = React.useState("login");
//   const [name, setName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");

//   const onSubmitHandler = async (event) => {
//     try {
//       event.preventDefault();
//       console.log("state:in Login.jsx", state);
//       const { data } = await axios.post(`/api/user/${state}`, {
//         name,
//         email,
//         password,
//       });

//       if (data.success) {
//         navigate("/");
//         setToken(data.token);
//         localStorage.setItem("token", data.token);
//         setShowLogin(false);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <div
//       onClick={() => setShowLogin(false)}
//       className="fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center text-sm text-gray-600 bg-black/50"
//     >
//       <form
//         onSubmit={onSubmitHandler}
//         onClick={(e) => e.stopPropagation()}
//         className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white"
//       >
//         <p className="text-2xl font-medium m-auto text-black">
//           <span className="text-black">User</span>{" "}
//           {state === "login" ? "Login" : "Sign Up"}
//         </p>
//         {state === "register" && (
//           <div className="w-full">
//             <p>Name</p>
//             <input
//               onChange={(e) => setName(e.target.value)}
//               value={name}
//               placeholder="type here"
//               className="border border-gray-200 rounded w-full p-2 mt-1 outline-black"
//               type="text"
//               required
//             />
//           </div>
//         )}
//         <div className="w-full ">
//           <p>Email</p>
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             placeholder="type here"
//             className="border border-gray-200 rounded w-full p-2 mt-1 outline-black"
//             type="email"
//             required
//           />
//         </div>
//         <div className="w-full ">
//           <p>Password</p>
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             placeholder="type here"
//             className="border border-gray-200 rounded w-full p-2 mt-1 outline-black"
//             type="password"
//             required
//           />
//         </div>
//         {state === "register" ? (
//           <p>
//             Already have account?{" "}
//             <span
//               onClick={() => setState("login")}
//               className="text-[#0d9488] cursor-pointer"
//             >
//               click here
//             </span>
//           </p>
//         ) : (
//           <p>
//             Create an account?{" "}
//             <span
//               onClick={() => setState("register")}
//               className="text-[#0d9488] cursor-pointer"
//             >
//               click here
//             </span>
//           </p>
//         )}
//         <button className="bg-[#0d9488] hover:bg-[rgba(13,148,136,0.9)] transition-all text-white w-full py-2 rounded-md cursor-pointer">
//           {state === "register" ? "Create Account" : "Login"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

//

import React from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Login = () => {
  const { setShowLogin, axios, setToken, navigate } = useAppContext();

  const [state, setState] = React.useState("login");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [drivingLicense, setDrivingLicense] = React.useState("");
  const [errors, setErrors] = React.useState({});

  const validateDrivingLicense = (license) => {
    // Basic validation - adjust based on your country's license format
    const regex = /^[A-Z9]{5}\d{6}[A-Z9]{2}\d[A-Z]{2}$/; // Example format for Indian license
    return regex.test(license);
  };

  const validateForm = () => {
    const newErrors = {};

    if (state === "register") {
      if (!name.trim()) {
        newErrors.name = "Name is required";
      }

      if (!drivingLicense.trim()) {
        newErrors.drivingLicense = "Driving license is required";
      } else if (!validateDrivingLicense(drivingLicense)) {
        newErrors.drivingLicense = "Invalid driving license format";
      }
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();

      if (!validateForm()) return;

      const payload =
        state === "login"
          ? { email, password }
          : { name, email, password, drivingLicense };

      const { data } = await axios.post(`/api/user/${state}`, payload);

      if (data.success) {
        navigate("/");
        setToken(data.token);
        localStorage.setItem("token", data.token);
        setShowLogin(false);
        toast.success(`Welcome ${data.user?.name || ""}!`);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div
      onClick={() => setShowLogin(false)}
      className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center text-sm text-gray-600 bg-black/50"
    >
      <form
        onSubmit={onSubmitHandler}
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-3 m-auto items-start p-8 py-10 w-80 sm:w-[400px] rounded-lg shadow-xl border border-gray-200 bg-white"
      >
        <p className="text-2xl font-medium m-auto text-black mb-4">
          <span className="text-black">User</span>{" "}
          {state === "login" ? "Login" : "Sign Up"}
        </p>

        {state === "register" && (
          <>
            <div className="w-full">
              <label className="block mb-1">Full Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="John Doe"
                className={`border ${
                  errors.name ? "border-red-500" : "border-gray-200"
                } rounded w-full p-2 outline-black`}
                type="text"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div className="w-full">
              <label className="block mb-1">Driving License Number</label>
              <input
                onChange={(e) =>
                  setDrivingLicense(e.target.value.toUpperCase())
                }
                value={drivingLicense}
                placeholder="DL-1234567890"
                className={`border ${
                  errors.drivingLicense ? "border-red-500" : "border-gray-200"
                } rounded w-full p-2 outline-black`}
                type="text"
                required
              />
              {errors.drivingLicense && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.drivingLicense}
                </p>
              )}
              <p className="text-xs text-gray-500 mt-1">
                Format: Typically 15-16 alphanumeric characters
              </p>
            </div>
          </>
        )}

        <div className="w-full">
          <label className="block mb-1">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="user@example.com"
            className={`border ${
              errors.email ? "border-red-500" : "border-gray-200"
            } rounded w-full p-2 outline-black`}
            type="email"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div className="w-full">
          <label className="block mb-1">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="••••••••"
            className={`border ${
              errors.password ? "border-red-500" : "border-gray-200"
            } rounded w-full p-2 outline-black`}
            type="password"
            required
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        <div className="w-full text-center mt-2">
          {state === "register" ? (
            <p>
              Already have account?{" "}
              <span
                onClick={() => {
                  setState("login");
                  setErrors({});
                }}
                className="text-[#0d9488] cursor-pointer hover:underline"
              >
                Login here
              </span>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <span
                onClick={() => {
                  setState("register");
                  setErrors({});
                }}
                className="text-[#0d9488] cursor-pointer hover:underline"
              >
                Register here
              </span>
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#0d9488] hover:bg-[#0b8279] transition-all text-white w-full py-2 rounded-md cursor-pointer mt-4"
        >
          {state === "register" ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
