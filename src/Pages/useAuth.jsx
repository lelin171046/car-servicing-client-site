import React, { useContext } from 'react';
import { AuthContent } from '../FibreBase/FirebaseProvider';

const useAuth = () => {

    const all = useContext(AuthContent)
    return all
};

export default useAuth;