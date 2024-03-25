
import { useState } from 'react';

function NavMenu() {

   
   return (
    <nav>
    <menu>
        <li id="demo1">
            <a id="drop"><span>Меню</span> <span className="white"><i className="fa-solid fa-bars"></i></span></a>
            <menu>
            
                <li>
                   <a>О компании</a>
                   <menu>
                      <li><a>Информация</a></li>
                      <li><a>Наш коллектив</a></li>
                      <li><a>Карьера</a></li>
                      <li><a>Обратная связь</a></li>
                   </menu>  
                </li>

                <li id="demo2">
                    <a>Продукты</a>
                    <menu>
                        <li><a>1С BAIM: Бухгалтерия для Азербайджана</a></li>
                        <li><a>1С BAIM: Комплексная Автоматизация для Азербайджана</a></li>
                        <li><a>1С BAIM: ERP для Азербайджана</a></li>
                        <li><a>Все продукты 1С</a></li>
                        <li><a>Какой продукт выбрать</a></li>
                    </menu>
                </li>

                <li id="demo2">
                    <a>Услуги</a>
                    <menu>
                        <li><a>Сопровождение 1С: ИТС</a></li>
                        <li><a>Абонентское обслуживание 1С</a></li>
                        <li><a>Предпроектное обследование</a></li>
                        <li><a>Установка серверного ПО</a></li>
                        <li><a>Разработка сайтов</a></li>
                        <li><a>Разработка мобильного приложения</a></li>
                        <li><a>Внедрение программного обеспечения 1С</a></li>
                    </menu>
                </li>

                <li><a>Наши клиенты</a></li>

                <li id="demo2">
                    <a>Полезные материалы</a>
                    <menu>
                        <li><a>Новости</a></li>
                        <li><a>Инструкции</a></li>
                        <li><a>Видеоматериалы</a></li>
                    </menu>
                </li>

            </menu>
        </li>
    </menu>
</nav>
   )
}

export default NavMenu;