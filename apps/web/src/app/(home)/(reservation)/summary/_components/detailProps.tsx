export default function DetailProps(props: {
  detail: string;
  content: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <p className=" text-btn">{props.detail}</p>
      <p className="">{props.content}</p>
    </div>
  );
}
