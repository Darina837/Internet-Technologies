import React from 'react';
import {Link} from 'react-router-dom';

export default function AsideMenu () {
    return (
        <div className='AsideMenu'>
            <Link to='/score' className='linkScore linksAside'>Текущая успеваемость</Link>
            <hr></hr>
            <Link to='/IHW_1' className='linkIHW linksAside'>ИДЗ первого семестра</Link>
            <hr></hr>
            <Link to='/additional-tasks' className='additionalTasks linksAside'>Дополнительные задания</Link>
        </div>
    );
}