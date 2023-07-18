import { useState } from 'react';

export const useLoadUser = () => {
    const [user, setUser] = useState(null);

    const loadUser = () => {
        const stored = JSON.parse(localStorage.getItem('plannerAppUser') || '{}');
        if (stored && stored.username) {
            setUser(stored);
        }
    };

    return { user, loadUser };
};