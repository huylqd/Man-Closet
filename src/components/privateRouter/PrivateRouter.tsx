'use client'
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
export type UserRole = 'admin' | 'member' | 'otherRole' 
type PrivateRouteProps = {
    children: ReactNode;
    allowedRoles :UserRole[],
};
const PrivateRouter = ({ children , allowedRoles  }: PrivateRouteProps) => {
    const router = useRouter();
    const isAuthenticated = JSON.parse(localStorage.getItem("user") as string);
    const userRoles = [`${isAuthenticated?.role}`]; 
  

    useEffect(() => {
        if (!allowedRoles.some(role => userRoles.includes(role))) {
            router.push('/auth');
          }
    }, [isAuthenticated]);
    return allowedRoles.some(role => userRoles.includes(role)) ? <>{children}</> : null;
    


}

export default PrivateRouter