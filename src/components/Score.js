import React from 'react';
import {Link} from 'react-router-dom';

export function Score () {
    return (
        <div className='score'>
            <h2>Успеваемость студентов</h2>
            <span>Данные актуальны на 14.12.2019</span>
            <br />
            <Link to='score/kiuki-17-1'>КИУКИ-17-1</Link>
            <br />
            <Link to='score/kiuki-17-2'>КИУКИ-17-2</Link>
            <br />
            <Link to='score/kiuki-17-3'>КИУКИ-17-3</Link>
            <br />
            <Link to='score/kiuki-17-4'>КИУКИ-17-4</Link>
            <br />
            <Link to='score/kiuki-17-5'>КИУКИ-17-5</Link>
            <br />
            <Link to='score/kiukiu-18-1'>КИУКИу-18-1</Link>
            <br />
            <Link to='score/kiukiu-18-2'>КИУКИу-18-2</Link>
        </div>
    );
}

export function KIUKI3 () {
    return (
        <div className='table'>
            <h3>КИУКИ-17-3 Дедлайн 24.12.2019</h3>
            <table>
                <tr>
                    <th>Ф.И.О.</th>
                    <th>Л/р №1</th>
                    <th>Л/р №2</th>
                    <th>Л/р №3</th>
                    <th>Л/р №4</th>
                    <th>Л/р до дедлайна</th>
                    <th>Тест</th>
                    <th>Идз</th>
                    <th>Доп. задание</th>
                    <th>Итоговый балл</th>
                </tr>

                <tr>
                    <td>Антонов Даниил Олегович</td>
                    <td title='Л/р №1'>14</td>
                    <td title='Л/р №2'>11</td>
                    <td title='Л/р №3'>14</td>
                    <td title='Л/р №4'></td>
                    <td title='Л/р до дедлайна'></td>
                    <td title='Тест'></td>
                    <td title='ИДЗ'></td>
                    <td title='Доп. задание'></td>
                    <td title='Итоговый балл'>39</td>
                </tr>

                <tr>
                    <td>Бова Иван Владимирович</td>
                    <td title='Л/р №1'>12</td>
                    <td title='Л/р №2'>9</td>
                    <td title='Л/р №3'>9</td>
                    <td title='Л/р №4'></td>
                    <td title='Л/р до дедлайна'></td>
                    <td title='Тест'></td>
                    <td title='ИДЗ'></td>
                    <td title='Доп. задание'></td>
                    <td title='Итоговый балл'>30</td>
                </tr>

                <tr>
                    <td>Бондаренко Дмитрий Владимирович</td>
                    <td title='Л/р №1'>12</td>
                    <td title='Л/р №2'>11</td>
                    <td title='Л/р №3'>11</td>
                    <td title='Л/р №4'>9</td>
                    <td title='Л/р до дедлайна'>10</td>
                    <td title='Тест'></td>
                    <td title='ИДЗ'>9</td>
                    <td title='Доп. задание'></td>
                    <td title='Итоговый балл'>62</td>
                </tr>

                <tr>
                    <td>Вишнивский Даниил Валерьевич</td>
                    <td title='Л/р №1'>11</td>
                    <td title='Л/р №2'>11</td>
                    <td title='Л/р №3'></td>
                    <td title='Л/р №4'></td>
                    <td title='Л/р до дедлайна'></td>
                    <td title='Тест'></td>
                    <td title='ИДЗ'></td>
                    <td title='Доп. задание'></td>
                    <td title='Итоговый балл'>22</td>
                </tr>

                <tr>
                    <td>Гайдыло Дмитрий Алексеевич</td>
                    <td title='Л/р №1'>11</td>
                    <td title='Л/р №2'>11</td>
                    <td title='Л/р №3'>11</td>
                    <td title='Л/р №4'>12</td>
                    <td title='Л/р до дедлайна'>10</td>
                    <td title='Тест'></td>
                    <td title='ИДЗ'>14</td>
                    <td title='Доп. задание'></td>
                    <td title='Итоговый балл'>69</td>
                </tr>

                <tr>
                    <td>Дашков Дмитрий Евгеньевич</td>
                    <td title='Л/р №1'>11</td>
                    <td title='Л/р №2'>11</td>
                    <td title='Л/р №3'>12</td>
                    <td title='Л/р №4'></td>
                    <td title='Л/р до дедлайна'></td>
                    <td title='Тест'></td>
                    <td title='ИДЗ'></td>
                    <td title='Доп. задание'></td>
                    <td title='Итоговый балл'>34</td>
                </tr>

                <tr>
                    <td>Дикий Станислав Андреевич</td>
                    <td title='Л/р №1'>13</td>
                    <td title='Л/р №2'>11</td>
                    <td title='Л/р №3'>13</td>
                    <td title='Л/р №4'></td>
                    <td title='Л/р до дедлайна'></td>
                    <td title='Тест'></td>
                    <td title='ИДЗ'></td>
                    <td title='Доп. задание'></td>
                    <td title='Итоговый балл'>37</td>
                </tr>

                <tr>
                    <td>Дудка Денис Алексеевич</td>
                    <td title='Л/р №1'>12</td>
                    <td title='Л/р №2'>11</td>
                    <td title='Л/р №3'>11</td>
                    <td title='Л/р №4'>12</td>
                    <td title='Л/р до дедлайна'>10</td>
                    <td title='Тест'></td>
                    <td title='ИДЗ'>12</td>
                    <td title='Доп. задание'></td>
                    <td title='Итоговый балл'>68</td>
                </tr>

                <tr>
                    <td>Закаблук Максим Владимирович</td>
                    <td title='Л/р №1'>9</td>
                    <td title='Л/р №2'></td>
                    <td title='Л/р №3'></td>
                    <td title='Л/р №4'></td>
                    <td title='Л/р до дедлайна'></td>
                    <td title='Тест'></td>
                    <td title='ИДЗ'></td>
                    <td title='Доп. задание'></td>
                    <td title='Итоговый балл'>9</td>
                </tr>

                <tr>
                    <td>Змиёва Елена Валерьевна</td>
                    <td title='Л/р №1'>12</td>
                    <td title='Л/р №2'>12</td>
                    <td title='Л/р №3'>9</td>
                    <td title='Л/р №4'></td>
                    <td title='Л/р до дедлайна'></td>
                    <td title='Тест'></td>
                    <td title='ИДЗ'></td>
                    <td title='Доп. задание'></td>
                    <td title='Итоговый балл'>33</td>
                </tr>

                <tr>
                    <td>Кись Александр Викторович</td>
                    <td title='Л/р №1'>13</td>
                    <td title='Л/р №2'>14</td>
                    <td title='Л/р №3'></td>
                    <td title='Л/р №4'></td>
                    <td title='Л/р до дедлайна'></td>
                    <td title='Тест'></td>
                    <td title='ИДЗ'></td>
                    <td title='Доп. задание'></td>
                    <td title='Итоговый балл'>27</td>
                </tr>

                <tr>
                    <td>Колода Дарина Дмитриевна</td>
                    <td title='Л/р №1'>13</td>
                    <td title='Л/р №2'>14</td>
                    <td title='Л/р №3'>12</td>
                    <td title='Л/р №4'></td>
                    <td title='Л/р до дедлайна'></td>
                    <td title='Тест'></td>
                    <td title='ИДЗ'>14</td>
                    <td title='Доп. задание'></td>
                    <td title='Итоговый балл'>53</td>
                </tr>

                <tr>
                    <td>Кондратенко Игорь Владимирович</td>
                    <td title='Л/р №1'>9</td>
                    <td title='Л/р №2'></td>
                    <td title='Л/р №3'></td>
                    <td title='Л/р №4'></td>
                    <td title='Л/р до дедлайна'></td>
                    <td title='Тест'></td>
                    <td title='ИДЗ'></td>
                    <td title='Доп. задание'></td>
                    <td title='Итоговый балл'>9</td>
                </tr>

                <tr>
                    <td>Литвинова Анастасия Юрьевна</td>
                    <td title='Л/р №1'>11</td>
                    <td title='Л/р №2'>10</td>
                    <td title='Л/р №3'>11</td>
                    <td title='Л/р №4'>12</td>
                    <td title='Л/р до дедлайна'>10</td>
                    <td title='Тест'></td>
                    <td title='ИДЗ'>9</td>
                    <td title='Доп. задание'></td>
                    <td title='Итоговый балл'>63</td>
                </tr>

                <tr>
                    <td>Ложка Дмитрий Павлович</td>
                    <td title='Л/р №1'>12</td>
                    <td title='Л/р №2'>13</td>
                    <td title='Л/р №3'></td>
                    <td title='Л/р №4'></td>
                    <td title='Л/р до дедлайна'></td>
                    <td title='Тест'></td>
                    <td title='ИДЗ'></td>
                    <td title='Доп. задание'></td>
                    <td title='Итоговый балл'>25</td>
                </tr>

                <tr>
                    <td>Новикова Карина Анатольевна</td>
                    <td title='Л/р №1'>12</td>
                    <td title='Л/р №2'>11</td>
                    <td title='Л/р №3'>11</td>
                    <td title='Л/р №4'>12</td>
                    <td title='Л/р до дедлайна'>10</td>
                    <td title='Тест'></td>
                    <td title='ИДЗ'>13</td>
                    <td title='Доп. задание'></td>
                    <td title='Итоговый балл'>69</td>
                </tr>

                <tr>
                    <td>Овчаренко Евгений Сергеевич</td>
                    <td title='Л/р №1'>10</td>
                    <td title='Л/р №2'>9</td>
                    <td title='Л/р №3'></td>
                    <td title='Л/р №4'></td>
                    <td title='Л/р до дедлайна'></td>
                    <td title='Тест'></td>
                    <td title='ИДЗ'></td>
                    <td title='Доп. задание'></td>
                    <td title='Итоговый балл'>19</td>
                </tr>

                <tr>
                    <td>Плеханов Денис Витальевич</td>
                    <td title='Л/р №1'>13</td>
                    <td title='Л/р №2'>13</td>
                    <td title='Л/р №3'>14</td>
                    <td title='Л/р №4'>14</td>
                    <td title='Л/р до дедлайна'>10</td>
                    <td title='Тест'></td>
                    <td title='ИДЗ'>9</td>
                    <td title='Доп. задание'>13</td>
                    <td title='Итоговый балл'>86</td>
                </tr>

                <tr>
                    <td>Рудницкий Сергей Анатольевич</td>
                    <td title='Л/р №1'>12</td>
                    <td title='Л/р №2'>12</td>
                    <td title='Л/р №3'>9</td>
                    <td title='Л/р №4'>9</td>
                    <td title='Л/р до дедлайна'>10</td>
                    <td title='Тест'></td>
                    <td title='ИДЗ'>9</td>
                    <td title='Доп. задание'></td>
                    <td title='Итоговый балл'>61</td>
                </tr>

                <tr>
                    <td>Ткачук Александр Костянтинович</td>
                    <td title='Л/р №1'>11</td>
                    <td title='Л/р №2'>10</td>
                    <td title='Л/р №3'>11</td>
                    <td title='Л/р №4'>12</td>
                    <td title='Л/р до дедлайна'>10</td>
                    <td title='Тест'></td>
                    <td title='ИДЗ'>9</td>
                    <td title='Доп. задание'></td>
                    <td title='Итоговый балл'>63</td>
                </tr>

                <tr>
                    <td>Усаров Александр Витальевич</td>
                    <td title='Л/р №1'>9</td>
                    <td title='Л/р №2'></td>
                    <td title='Л/р №3'></td>
                    <td title='Л/р №4'></td>
                    <td title='Л/р до дедлайна'></td>
                    <td title='Тест'></td>
                    <td title='ИДЗ'></td>
                    <td title='Доп. задание'></td>
                    <td title='Итоговый балл'>9</td>
                </tr>

                <tr>
                    <td>Ушаков Матвей Романович</td>
                    <td title='Л/р №1'>11</td>
                    <td title='Л/р №2'>9</td>
                    <td title='Л/р №3'></td>
                    <td title='Л/р №4'></td>
                    <td title='Л/р до дедлайна'></td>
                    <td title='Тест'></td>
                    <td title='ИДЗ'></td>
                    <td title='Доп. задание'></td>
                    <td title='Итоговый балл'>20</td>
                </tr>

                <tr>
                    <td>Федяк Игорь Игоревич</td>
                    <td title='Л/р №1'>13</td>
                    <td title='Л/р №2'>13</td>
                    <td title='Л/р №3'></td>
                    <td title='Л/р №4'></td>
                    <td title='Л/р до дедлайна'></td>
                    <td title='Тест'></td>
                    <td title='ИДЗ'></td>
                    <td title='Доп. задание'></td>
                    <td title='Итоговый балл'>26</td>
                </tr>

                <tr>
                    <td>Цупиков Евгений Михайлович</td>
                    <td title='Л/р №1'>12</td>
                    <td title='Л/р №2'></td>
                    <td title='Л/р №3'></td>
                    <td title='Л/р №4'></td>
                    <td title='Л/р до дедлайна'></td>
                    <td title='Тест'></td>
                    <td title='ИДЗ'></td>
                    <td title='Доп. задание'></td>
                    <td title='Итоговый балл'>12</td>
                </tr>

                <tr>
                    <td>Чапарин Илья Николаевич</td>
                    <td title='Л/р №1'>13</td>
                    <td title='Л/р №2'>14</td>
                    <td title='Л/р №3'>13</td>
                    <td title='Л/р №4'>12</td>
                    <td title='Л/р до дедлайна'>10</td>
                    <td title='Тест'></td>
                    <td title='ИДЗ'>14</td>
                    <td title='Доп. задание'></td>
                    <td title='Итоговый балл'>76</td>
                </tr>

                <tr>
                    <td>Шатунова Маргарита Сергеевна</td>
                    <td title='Л/р №1'>11</td>
                    <td title='Л/р №2'>12</td>
                    <td title='Л/р №3'>9</td>
                    <td title='Л/р №4'></td>
                    <td title='Л/р до дедлайна'></td>
                    <td title='Тест'></td>
                    <td title='ИДЗ'></td>
                    <td title='Доп. задание'></td>
                    <td title='Итоговый балл'>32</td>
                </tr>
            </table>
        </div>
        
    );
}