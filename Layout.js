import React from 'react';
import Navbar from './Nav/Navbar';
import Footer from './Footer/Footer';
export default function Layout({ children }) {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
        </div>
    );
}