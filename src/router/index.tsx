import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import OutGoingcall from '../pages/OutGoingcall';
import CallHistory from '../pages/CallHistory';
import AddContact from '../pages/AddContact';
import Setting from '../pages/Setting';
import Battery from '../pages/Battery';

export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/outgoing-call" element={<OutGoingcall />} />
                <Route path="/call-history" element={<CallHistory />} />
                <Route path="/add-contact" element={<AddContact />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/battery" element={<Battery />} />
            </Routes>
        </BrowserRouter>
    )
}
