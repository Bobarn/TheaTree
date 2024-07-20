import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./HomePage.css"

export default function HomePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currUser = useSelector((state) => state.session.user);

    useEffect(() => {
        // Add in code to send fetch and retrieve information from the movies database
    }, [dispatch])

    if(!currUser) navigate('/')

    return (
        <>
        <div className='fader main-shelf'>
            <h1>
                Welcome to TheaTree~!
            </h1>
        </div>
        </>
    )
}
