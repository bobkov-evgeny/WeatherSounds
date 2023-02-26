interface IDataItem {
    body: string;
    email: string;
    id: number;
    name: string;
    postId: number;
}

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData = async (url: string): Promise<IDataItem[]> => {
    const response = await fetch(url);
    const data: IDataItem[] = await response.json();

    return data;
}

getData(COMMENTS_URL)
    .then(data => {
        data.forEach(item => {
            console.log(`ID: ${item.id}, Email: ${item.email}`);
        })
    });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */