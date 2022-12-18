import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./Newnavbar.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export default function Newnavbar() {
  const [login, setlogin] = useState(false);
  const [signup, setsingup] = useState(false);
  const [change, setchange] = useState("");
  const [loginName, setLoginName] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [logindata, setLogindata] = useState([]);
  const originEmail = "ayush@gmail.com";
  const originPass = "123456";
  // const [isLogin, setIsLogin] = useState(false);

  console.log(loginName, loginPass);
  let navigate = useNavigate();

  const checkLogin = () => {
    //return axios.get(`http://localhost:3001/login`);
    if (loginName == originEmail && loginPass == originPass) {
      setlogin(true);
    }
  };
  // useEffect(() => {
  //   checkLogin()
  //     .then((res) => {
  //       setLogindata(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  function LoginModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    return (
      <>
        <Button varient="ghost" onClick={onOpen}>
          Login
        </Button>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent style={{ backgroundColor: "white" }}>
            <ModalHeader>Login Your account</ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel> Name</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Name"
                  onChange={(e) => setLoginName(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  placeholder="Password"
                  onChange={(e) => setLoginPass(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button onClick={() => checkLogin()} colorScheme="blue" mr={3}>
                Login
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  return (
    <>
      <div>
        <div className={style.big_container}>
          <div className={style.nav_bar}>
            <div className={style.upper}>
              <div className={style.logo}>
                <img
                  onClick={() => {
                    navigate("/");
                  }}
                  src="https://www.1mg.com/images/tata_1mg_logo.svg"
                  alt=""
                />
              </div>

              <div className={style.navmid}>
                <div className={style.leftnav}>
                  <div
                    onClick={() => {
                      navigate("/medicine");
                    }}
                    className={style.medicine}
                  >
                    MEDICINES
                  </div>
                  <div className={style.medicine}>LABTEST</div>
                  <div className={style.medicine}>ASK DOCTOR</div>
                  {/* <div className={style.medicine}>COVID-19</div>
                  <div className={style.medicine}>AYURVEDA</div> */}
                </div>

                <div className={style.rightnav}>
                  {change == "" ? (
                    <>
                      <div className={style.login}>
                        {/* <p
                          className={[style.p_top, style.login]}
                          onClick={() => {
                            BasicUsage();
                            setlogin(true);
                          }}
                        >
                          Login
                        </p> */}
                        {login ? <p>{originEmail}</p> : LoginModal()}
                      </div>
                      <div className={[style.line, style.linein]}></div>
                      <div className={[style.sign, style.profileicone]}>
                        <p
                          id="signup"
                          className={style.signupf}
                          onClick={() => setsingup(true)}
                        >
                          signup
                        </p>
                      </div>
                    </>
                  ) : (
                    <div>{change}</div>
                  )}
                  <div className={style.offer}>
                    <p className={style.p_top}>offer</p>
                  </div>
                  <div
                    onClick={() => {
                      navigate("/cart");
                    }}
                    className={style.cart}
                  >
                    <img
                      src="https://static.cure.fit/assets/images/cart-image.svg"
                      alt=""
                    />
                  </div>
                  <div className={style.halp}>
                    <p className={style.needhelp}>Need Help</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.middle}>
              <div className={style.location}>
                <input
                  style={{
                    border: "none",
                    background: "#F1F4F6",
                    height: "30px",
                  }}
                  type="text"
                  className={[style.locsearch, style.marginforin]}
                  placeholder="New Delhi"
                />
              </div>
              <div className={style.serach}>
                <input
                  type="text"
                  style={{
                    border: "none",
                    background: "#F1F4F6",
                    height: "30px",
                  }}
                  className={[style.searchprod, style.marginforin]}
                  placeholder="Search for medicine and Health product"
                />
              </div>
              <div className={style.quick}>
                QUICK BUY! Get up to 25% off on medicines
              </div>
              <div
                className={style.but}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={{ marginRight: "17px" }} className={style.uploa}>
                  Quick order
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <Login toggle={login} settoggle={setlogin} /> */}
        {/* <Signup
          toggle={signup}
          settoggle={setsingup}
          change={setlogin}
          setchange={setchange}
        /> */}
      </div>
    </>
  );
}
