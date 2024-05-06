export enum target {
  me = "me",
  another = "another",
}

export default function Chat(props: {
  target: target;
  profile?: string; // 'null' 대신 'undefined'를 사용하도록 변경
  contents: string;
}) {
  if (props.target === "me") {
    return (
      <div className="chat">
        <div className="chat-inner">
          <p>{props.contents}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="chat chat-another">
        {props.profile && <img src={props.profile} />}
        <div>
          <p className="chat-another-name">규연</p>
          <div className="chat-inner chat-inner-another">
            <div className="chat-inner-arrows-another"></div>
            <p>{props.contents}</p>
          </div>
        </div>
      </div>
    );
  }
}
