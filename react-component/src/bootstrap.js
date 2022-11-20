import { ProfileReactComponent } from './ProfileReactComponent';

import React from 'react';
import { createRoot } from 'react-dom/client';

const user = {
    user: "Adam",
    email: "fsdagda@bdfshd.com",
    onClick: () => { }
};

const root = createRoot(document.getElementById("root"));
root.render(<ProfileReactComponent value={user} />);