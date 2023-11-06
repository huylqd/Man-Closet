'use client'
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

type PrivateRouteProps = {
    children: ReactNode;
};
const PrivateRouter = ({ children }: PrivateRouteProps) => {
    const router = useRouter();

    const isAuthenticated = JSON.parse(localStorage.getItem("user") as string);
    console.log(isAuthenticated);

    if (!isAuthenticated) {
        router.push('/auth'); // Điều hướng đến trang đăng nhập
    }
    else {
        return children;
    }


}

export default PrivateRouter