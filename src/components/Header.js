import React from 'react';
import logo from '../media/img.png';
import {Route, Link, Switch} from 'react-router-dom';

const FrontendItems = (props) => 
    <div className='frontLinks'>
        <Link to='/frontend/laba1' className='linkLaba'>1.Основы построения HTML-документов и подготовка изображений для Web</Link>
        <Link to='/frontend/laba2' className='linkLaba'>2.Каскадные таблицы стилей</Link>
        <Link to='/frontend/laba3' className='linkLaba'>3.Язык создания сценариев JavaScript</Link>
        <Link to='/frontend/laba4' className='linkLaba'>4.Генерация страниц на стороне сервера</Link>
    </div>

const BackendItems = (props) =>
    <div className='backLinks'>
        <Link to='/backend/laba1' className='linkLaba'>1.Изучение расширения PDO для обеспечения абстракции доступа к базам данных</Link>
        <Link to='/backend/laba2' className='linkLaba'>2.Асинхронный обмен данными с сервером на основе технологии AJAX</Link>
        <Link to='/backend/laba3' className='linkLaba'>3.Создание веб-приложений на основе подхода MVC с использованием фреймворка AngularJS</Link>
        <Link to='/backend/laba4' className='linkLaba'>4.Полнодуплексный обмен данными на основе протокола передачи данных WebSocket</Link>
    </div>

export default function Header() {
    return (
        <header>
            <div className='mainLink'>
                <Link to='/frontend' className='linkMain'>I семестр</Link>
                <Link to='/' title='Перейти на главную'> <img style={ {height: '150px'} } src={logo} alt='Тут должна быть картинка'/> </Link>
                <Link to='/backend' className='linkMain'>II семестр</Link>
            </div>

            <Switch>
                <Route path='/frontend' component={FrontendItems} exact/>
                <Route path='/backend' component={BackendItems} />
            </Switch>
        </header>
    );
}