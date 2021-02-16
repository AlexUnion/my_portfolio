type WorkItem = {
    id: string | number,
    name: string,
    src: string,
    links: {
        git?: string,
        deploy?: string,
    }
}

const arr: Array<WorkItem> = [
    {
        id: 1,
        name: 'Shop',
        src: 'shop.webp',
        links: {
            git: 'https://github.com/AlexUnion/crwn_shop',
            deploy: 'https://alexunion.github.io/crwn_shop/'
        }
    },
    {
        id: 2,
        name: 'Todo app',
        src: 'todolist.webp',
        links: {
            git: 'https://github.com/AlexUnion/events',
            deploy: 'https://alexunion.github.io/events/',
        }
    },
    {
        id: 3,
        name: 'Monster Dashboard',
        src: 'monster.webp',
        links: {
            git: 'https://github.com/AlexUnion/monster_dashboard',
            deploy: 'https://alexunion.github.io/monster_dashboard/',
        }
    },
    {
        id: 4,
        name: 'Guardian News',
        src: 'news.webp',
        links: {
            git: 'https://github.com/AlexUnion/News',
            deploy: 'https://alexunion.github.io/News/',
        }
    }
];

export type WorkList = Array<WorkItem>;

export default arr;
