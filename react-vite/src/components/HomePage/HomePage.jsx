import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { thunkGetCsv } from '../../redux/csv';
import "./HomePage.css"

export default function HomePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currUser = useSelector((state) => state.session.user);

    useEffect(() => {
        dispatch(thunkGetCsv());
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
