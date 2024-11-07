import {
  Avatar,
  Container,
  Flex,
  Img,
  useToast,
} from "@chakra-ui/react";
import "./nav.css";

import { useDisclosure, Button, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoginModal from "../../modals/loginModal";
import RegisterModal from "../../modals/registerModal";

import {MdVideoLibrary} from 'react-icons/md';

export default () => {
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  const {
    isOpen: isRegisterOpen,
    onOpen: onRegisterOpen,
    onClose: onRegisterClose,
  } = useDisclosure();

  const logged = useSelector((state) => state.auth);

  const toast = useToast({
    isClosable: true,
    duration: 3000,
    position: "top-right",
  });

  return (
    <header style={{ padding: "10px" }}>
      <Container maxWidth={"1500px"}>
        <Flex justifyContent={"space-between"}>
          <Flex alignItems={"center"} gap={3}>
            <Link to="/">
              <MdVideoLibrary size={32} />
            </Link>
          </Flex>
          <Flex alignItems={"center"} gap={3}>
            <input
              style={{ width: "100%" }}
              className="melancholy__search"
              type="search"
              placeholder="Wyszukaj film..."
            />
            {logged?.isLoggedIn ? (
              <Link to={`/profile/${logged?.username}`}>
                <Avatar />
              </Link>
            ) : (
              <Button onClick={onLoginOpen}>Zaloguj się</Button>
            )}
          </Flex>
        </Flex>
      </Container>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={onLoginClose}
        onOpen={onLoginOpen}
        registerOpen={onRegisterOpen}
        toast={toast}
      />
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={onRegisterClose}
        onOpen={onRegisterOpen}
        toast={toast}
      />
    </header>
  );
};
