import { reRender } from "../render";

let state = {
    profileData: {
        posts: [
            { photoSrc: './img/KateK.jpg', name: 'Катюша', text: 'Как погода? азаза', likes: 997 },
            { photoSrc: './img/Kate.jpg', name: 'Катенька', text: 'Привет, как дела?)', likes: 12 },
            { photoSrc: './img/Naste.jpg', name: 'Настя', text: 'Люблю бмв *__*', likes: 85850 }
        ]
    },
    messagesData: {
        dialogs: [
            { id: 997, name: 'Dimon', text: 'Hi bro' },
            { id: 9972, name: 'Dimson', text: 'What\'s up?' },
            { id: 9973, name: 'Dimas', text: 'Nice' }
        ]
    }
}

export let addANewPost = (text) => {
    let newPost = {
        photoSrc: './img/Kama.jpg',
        name: 'Кама Пуля',
        text: text,
        likes: 777
    };
    state.profileData.posts.push(newPost);
    reRender(state);
};

export default state