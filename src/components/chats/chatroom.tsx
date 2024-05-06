export default function Chatroom(props: {
  id: string;
  title: string;
  recent: string;
  date: string;
  thumbnail: string;
}) {
  return (
    <a href={"/chats/" + props.id}>
      <div className="chatroom">
        <img className="chatroom-thumbnail" src={props.thumbnail} />
        <div className="chatroom-info">
          <div className="chatroom-title">
            <h4>{props.title}</h4>
            <p>{props.recent.slice(0, 20)}..</p>
          </div>
          <div className="chatroom-contents">
            <p>{props.date}</p>
            <p className="chatroom-alert">15</p>
          </div>
        </div>
      </div>
    </a>
  );
}
