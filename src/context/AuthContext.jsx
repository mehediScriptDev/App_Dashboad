import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

// Dummy admin user for testing
const DUMMY_USERS = [
    {
        id: 1,
        email: 'admin@example.com',
        password: 'admin123',
        name: 'Admin',
    },
];

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Check if user is already logged in on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('authToken');

        if (storedUser && storedToken) {
            setUser(JSON.parse(storedUser));
        }

        setLoading(false);
    }, []);

    // Dummy login function
    const login = async (email, password) => {
        try {
            setLoading(true);
            setError(null);

            // Simulate API call delay
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Check if user exists in dummy data
            const foundUser = DUMMY_USERS.find(
                (u) => u.email === email && u.password === password
            );

            if (!foundUser) {
                throw new Error('Invalid email or password');
            }

            // Generate dummy token
            const dummyToken = `dummy-token-${foundUser.id}-${Date.now()}`;

            // Remove password from user object
            const { password: _, ...userWithoutPassword } = foundUser;

            // Save to localStorage
            localStorage.setItem('user', JSON.stringify(userWithoutPassword));
            localStorage.setItem('authToken', dummyToken);

            // Update state
            setUser(userWithoutPassword);

            return { success: true, user: userWithoutPassword };
        } catch (err) {
            setError(err.message);
            return { success: false, error: err.message };
        } finally {
            setLoading(false);
        }
    };

    // Logout function
    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');
        setUser(null);
        setError(null);
    };

    // Register function (dummy)
    const register = async (email, password, name) => {
        try {
            setLoading(true);
            setError(null);

            // Simulate API call delay
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Check if user already exists
            const existingUser = DUMMY_USERS.find((u) => u.email === email);

            if (existingUser) {
                throw new Error('User already exists');
            }

            // Create new user
            const newUser = {
                id: DUMMY_USERS.length + 1,
                email,
                name,
            };

            // Generate dummy token
            const dummyToken = `dummy-token-${newUser.id}-${Date.now()}`;

            // Save to localStorage
            localStorage.setItem('user', JSON.stringify(newUser));
            localStorage.setItem('authToken', dummyToken);

            // Update state
            setUser(newUser);

            return { success: true, user: newUser };
        } catch (err) {
            setError(err.message);
            return { success: false, error: err.message };
        } finally {
            setLoading(false);
        }
    };

    // Update user profile
    const updateProfile = async (updatedData) => {
        try {
            setLoading(true);
            setError(null);

            // Simulate API call delay
            await new Promise((resolve) => setTimeout(resolve, 500));

            const updatedUser = { ...user, ...updatedData };

            localStorage.setItem('user', JSON.stringify(updatedUser));
            setUser(updatedUser);

            return { success: true, user: updatedUser };
        } catch (err) {
            setError(err.message);
            return { success: false, error: err.message };
        } finally {
            setLoading(false);
        }
    };

    const value = {
        user,
        loading,
        error,
        login,
        logout,
        register,
        updateProfile,
        isAuthenticated: !!user,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use auth context
export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};

export default AuthContext;
