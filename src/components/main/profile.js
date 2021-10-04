import React from 'react'
import css from './Profile.module.css'

const Post = props => {
    return <div className={css.post}>
        <div className={css.profilePhotoWrap}>
            <img src={props.photoSrc} alt=''></img>
        </div>
        <div className={css.textWrap}>
            <div className={css.name}>{props.name}</div>
            <div className={css.postText}>{props.text}</div>
            <div className={css.likesCounter}>Likes: {props.likes}</div>
        </div>
    </div>
}

const Posts = props => {
    return props.posts.map(el => <Post photoSrc={el.photoSrc} name={el.name} text={el.text} likes={el.likes} />)
}

let Profile = props => {

    let newPost = React.createRef();
    let sendPost = () => {
        let text = newPost.current.value;
        newPost.current.value = '';
        props.addNewPost(text);
    };

    return <div className={css.profile}>
        <Posts posts={props.posts} />
        <textarea ref={newPost}></textarea>
        <button className={css.sendBtn} onClick={sendPost}>Отправить</button>
    </div>
}

export default Profile