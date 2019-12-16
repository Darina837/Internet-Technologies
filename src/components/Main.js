import React from 'react';
import {Route, Switch} from 'react-router-dom';
import FrontendLaba1 from './FrontendLaba1';
import AsideMenu from './AsideMenu';
import {Score, KIUKI3} from './Score';
import AsideLections from './AsideLections';

const MainText = (props) => <h1>Добро пожаловать на главную страницу предмета кафедры ЭВМ INTERNET-технологии</h1>

export default function Main () {
    return (
    <div className='content'>
        <aside>
            <AsideLections />
        </aside>
        <main>
            <Switch>
                <Route path='/' component={MainText} exact/>
                <Route path='/frontend' component={MainText} exact/>
                <Route path='/backend' component={MainText} exact/>
                <Route path='/frontend/laba1' component={FrontendLaba1} />
                <Route path='/score' component={Score} exact/>
                <Route path='/score/kiuki-17-3' component={KIUKI3} />
            </Switch>
        </main>
        <aside>
            <AsideMenu />
        </aside>
    </div>
    );
}