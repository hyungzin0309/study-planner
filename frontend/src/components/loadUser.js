import { useState } from 'react';

export const useLoadUser = () => {
    const [user, setUser] = useState(null);

    const loadUser = () => {
        const stored = localStorage.getItem('plannerUser');
        if (stored) {
            setUser(stored);
        }
    };

    return { user, loadUser };
};