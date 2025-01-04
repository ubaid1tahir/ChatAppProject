import { Socket } from "socket.io-client";
import { createContext, useContext } from "react";

const SocketContext = createContext<Socket | null>(null);

export const useSocket = () => {
    const socket = useContext(SocketContext);
    return socket;
}

export default SocketContext;