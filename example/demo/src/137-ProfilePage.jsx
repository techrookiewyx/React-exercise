import ProfileSeciton from "./137-ProfilePage-Section";
import HeadingU from "./136-heading-use";
export default function ProfilePage() {
  return(
    <ProfileSeciton>
      <HeadingU>My Profile</HeadingU>
      <Post
        title='旅行者，你好'
        body='来看看我的冒险'
      />
      <AllPosts/>
    </ProfileSeciton>
  )
}

function AllPosts() { 
  return (
    <ProfileSeciton>
      <HeadingU>帖子</HeadingU>
      <RecentPosts/>
    </ProfileSeciton>
  )
}
function RecentPosts() { 
  return (
    <ProfileSeciton>
      <HeadingU>最近的帖子</HeadingU>
      <Post
        title="里斯本的味道"
        body="...那些蛋挞！"
      />
       <Post
        title="探戈节奏中的布宜诺斯艾利斯"
        body="我爱它！"
      />
    </ProfileSeciton>
  )
}
function Post({title,body}){
  return (
    <ProfileSeciton isFancy={true}>
      <HeadingU>
        { title }
      </HeadingU>
      <p><i>{body}</i></p>
    </ProfileSeciton>
  )
}
