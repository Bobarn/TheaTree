import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { thunkGetCsv } from '../../redux/csv';
import "./HomePage.css"

export default function HomePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currUser = useSelector((state) => state.session.user);
    const data = useSelector((state) => state.csv.data);

    useEffect(() => {
        dispatch(thunkGetCsv());
        console.log('HomePage: thunkGetCsv()', )
    }, [dispatch])

    if(!currUser) navigate('/')

    console.log('HomePage: currUser', currUser)

    console.log('HomePage: data', data)

    return (
        <>
        <div className='fader main-shelf'>
            <h1>
                Welcome to TheaTree~!
            </h1>
            <div>
                {data && data.map((row, idx) => (
                    <div key={idx}>
                        <p>{row}</p>
                    </div>
                ))
                }
            </div>
        </div>
        </>
    )
}
