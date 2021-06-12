import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FETCH_ALL_NAME } from '../action/nameAgeAction'
import NameItem from './NameItem'
import nameContext from '../context/nameContext'

const NameList = () => {
    const nameages = useSelector(state => state.name.nameAges);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FETCH_ALL_NAME());
    }, []);

    return (
        <nameContext.Provider value="abcd">
            <div>
                <Link to="/newname">New Name</Link>
                {nameages && nameages.map(n => <NameItem key={n.id} name={n.name} />)}
            </div>
        </nameContext.Provider>
    );
}

export default NameList;