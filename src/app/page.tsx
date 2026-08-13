import { Button } from '@/Components/UI/Button/Button';
import { Input } from '@/Components/UI/Input/Input';
import { Icon } from '@/Components/UI/Icon/Icon';
import { Rating } from '@/Components/UI/Rating/Rating';
import { MenuItem } from '@/Components/UI/MenuItem/MenuItem';
import { Logo } from '@/Components/UI/Logo/Logo';
import style from './page.module.scss';

export default function Home() {
    return (
        <main className={style.page}>
            <Logo />

            <section className={style.section}>
                <h2>Buttons</h2>
                <div className={style.row}>
                    <Button typeButton="primary">Кнопка</Button>
                    <Button typeButton="primary" disabled>Кнопка</Button>
                    <Button typeButton="secondary">О фильме</Button>
                    <Button typeButton="secondary" disabled>О фильме</Button>
                </div>
            </section>

            <section className={style.section}>
                <h2>Inputs</h2>
                <div className={style.column}>
                    <Input placeholder="Электронная почта" />
                    <Input defaultValue="sample@domain.ru" />
                    <Input placeholder="Электронная почта" error />
                </div>
            </section>

            <section className={style.section}>
                <h2>Icons</h2>
                <div className={style.row}>
                    <Icon name="burger" />
                    <Icon name="info" />
                    <Icon name="copyright" />
                    <Icon name="send" />
                    <Icon name="phone" />
                    <Icon name="check" />
                    <Icon name="mail" />
                    <Icon name="user" />
                    <Icon name="genres" />
                    <Icon name="play" />
                    <Icon name="pause" />
                    <Icon name="search" />
                    <Icon name="telegram" />
                    <Icon name="vk" />
                    <Icon name="youtube" />
                </div>
            </section>

            <section className={style.section}>
                <h2>Rating</h2>
                <div className={style.row}>
                    <Rating value={8.6} />
                    <Rating value={7.5} />
                    <Rating value={6.3} />
                    <Rating value={4.2} />
                </div>
            </section>

            <section className={style.section}>
                <h2>Menu item</h2>
                <div className={style.row}>
                    <MenuItem active>Меню</MenuItem>
                    <MenuItem>Меню</MenuItem>
                </div>
            </section>
        </main>
    );
}
