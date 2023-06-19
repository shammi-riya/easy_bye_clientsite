import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UseCarts = () => {
    const {user} = useContext(AuthContext)

    const { refetch, data: carts = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return res.json();
        }


    })

    return [carts, refetch]

};

export default UseCarts;