import React, { createContext, useContext, useEffect, useState, useSyncExternalStore } from 'react'
import OT from '@opentok/client';

const VideoSessionContext = createContext();

export const useVideoSession = () => useContext(VideoSessionContext);

export const VideoSessionProvider = ({ children }) => {
    const [session, setSession] = useState(null);

    useEffect(() => {
        const createSession = async () => {
            try {
                const sessionIdResponse = await fetch('/api/create-session');
                const { sessionId } = await sessionIdResponse.json();
            
                const tokenResponse = await fetch(`/api/generate-token?sessionId=${sessionId}`);
                const { token } = await tokenResponse.json();

                const session = OT.initSession({ apiKey: process.env.VONAGE_API_KEY, sessionId });
                session.connect(token, (error) => {
                    if (error) {
                        console.error('Connection failed:', error);
                    } else {
                        console.log('Connected to the session:', sessionId);
                        setSession(session);
                    }
                });
    } catch (error) {
        console.error('failed to create and connect to session:', error);
    }
};
createSession();
    }, []);

    return (
        <VideoSessionContext.Provider value={{ session }}>
            {children}
            </VideoSessionContext.Provider>
    );
    
};