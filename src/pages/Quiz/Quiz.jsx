import React, { useEffect } from 'react';
import { reference } from '../../index';
import { onValue} from "firebase/database";


const Quiz = () => {
    useEffect(() => {
        onValue(reference, (snapshot) => {
            const data = snapshot.val();
            console.log(data)
        })
    })
    return (
        <main style={{ flex: "1 1 auto" }}>
            hi!
        </main>
    );
};

export default Quiz;