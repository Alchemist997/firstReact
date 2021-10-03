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
    return <div className={css.profile}>
        <Posts posts={props.posts} />
    </div>
}

export default Profile